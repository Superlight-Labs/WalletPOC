import config from "@lib/config";
import logger from "@lib/logger";
import { isRouteError, other, RouteError, thirdPartyError } from "@lib/route/error";
import { decryptCipher } from "@lib/utils/auth";
import { pgpEncrypt } from "@lib/utils/crypto";
import { getSafeResultAsync } from "@lib/utils/neverthrow";
import { circlePublicKey } from "@server";
import { createHash, randomUUID } from "crypto";
import { errAsync, okAsync, ResultAsync } from "neverthrow";
import { HttpMethod } from "../endpoints";
import { User } from "../user/user";
import {
  CircleAccount,
  CircleCard,
  CircleCreateCardResponse,
  CirclePayload,
  CirclePayment,
  CirclePaymentResponse,
  CircleSettlement,
  CircleTransferResponse,
  CreateCardPaymentPayload,
  CreateCircleCard,
  CreateCircleSettlement,
} from "./circle";
import { fetchFromCircle } from "./circle-endpoint";
import {
  readCircleAccount,
  readCircleCard,
  readUserByCardId,
  saveCircleAccount,
  saveCircleCard,
} from "./circle.repository";

export const getOrCreateCircleAccount = (user: User): ResultAsync<CircleAccount, RouteError> => {
  const readAccount = ResultAsync.fromPromise(readCircleAccount(user), (e) =>
    other("Error while reading circleAccounts from Database", e)
  );

  return readAccount.andThen((accountOrNotFound) => {
    logger.info({ accountOrNotFound }, "Account or not found");
    if (isRouteError(accountOrNotFound)) return createCircleAccount(user);

    return okAsync(accountOrNotFound);
  });
};

const createCircleAccount = (user: User): ResultAsync<CircleAccount, RouteError> => {
  return ResultAsync.fromPromise(saveCircleAccount(user), (e) => other("Error while Saving CircleAccount", e));
};

export const getOrCreateCircleCard = (
  createAddressReq: CreateCircleCard,
  user: User,
  secret: string
): ResultAsync<CircleCard, RouteError> => {
  const circleAccount = getOrCreateCircleAccount(user);

  return circleAccount.andThen((ca) => getOrCreateCircleCardFromCircleAccount(ca, createAddressReq, user, secret));
};

const getOrCreateCircleCardFromCircleAccount = (
  circleAccount: CircleAccount,
  createCard: CreateCircleCard,
  user: User,
  secret: string
): ResultAsync<CircleCard, RouteError> => {
  const readCard = ResultAsync.fromPromise(readCircleCard(circleAccount), (e) =>
    other("Error while reading CircleAddress from Database", e)
  );

  return readCard.andThen((addressOrNotFound) => {
    if (isRouteError(addressOrNotFound)) return createCircleCard(circleAccount, createCard, user, secret);

    return okAsync(addressOrNotFound);
  });
};

const createCircleCard = (
  circleAccount: CircleAccount,
  createCard: CreateCircleCard,
  user: User,
  secret: string
): ResultAsync<CircleCard, RouteError> => {
  const { encryptedData } = createCard;

  const decryptedCardInfo = decryptCipher(Buffer.from(secret, "base64"), encryptedData);

  const pgpEncryptData = ResultAsync.fromPromise(pgpEncrypt(decryptedCardInfo, circlePublicKey), (e) =>
    other("Error while encrypting Card Details", e)
  );

  return pgpEncryptData
    .map((encryptedData) => <CreateCircleCard>addBoilerPlatePayloadData({ ...createCard, encryptedData }))
    .andThen(postCardToCircle)
    .andThen((circleCard) => processCircleCardResponse(circleAccount, circleCard, user));
};

const postCardToCircle = (body: CreateCircleCard): ResultAsync<CircleCreateCardResponse, RouteError> => {
  const newCircleAddressPromise: Promise<CircleCreateCardResponse> = fetchFromCircle("/cards", {
    method: HttpMethod.POST,
    body,
  });

  return ResultAsync.fromPromise(newCircleAddressPromise, (e) => thirdPartyError("Circle Api Create Address Error", e));
};

const processCircleCardResponse = (
  circleAccount: CircleAccount,
  circleCard: CircleCreateCardResponse,
  user: User
): ResultAsync<CircleCard, RouteError> =>
  ResultAsync.fromPromise(saveCircleCard(user, circleAccount, circleCard.id), (e) =>
    other("Error while Saving CircleAddress", e)
  );

export const createCircleCardPayment = (
  body: CreateCardPaymentPayload,
  user: User,
  secret: string
): ResultAsync<CirclePayment, RouteError> => {
  const account = getSafeResultAsync(readCircleAccount(user), (e) =>
    other("Error while fetching Circle Account from DB")
  );

  return account
    .andThen((account) => mapAccountWithDecryptedCipher(account, body, secret))
    .map((payload) => <CreateCardPaymentPayload>addBoilerPlatePayloadData(payload))
    .andThen(postCardPaymentToCircle)
    .map(processCircleCardPaymentResponse);
};

const postCardPaymentToCircle = (body: CreateCardPaymentPayload): ResultAsync<CirclePaymentResponse, RouteError> => {
  const newCircleAddressPromise: Promise<CirclePaymentResponse> = fetchFromCircle("/payments", {
    method: HttpMethod.POST,
    body,
  });

  return ResultAsync.fromPromise(newCircleAddressPromise, (e) => thirdPartyError("Circle Api Create Payment Error", e));
};

const mapAccountWithDecryptedCipher = (
  account: CircleAccount,
  body: CreateCardPaymentPayload,
  secret: string
): ResultAsync<CreateCardPaymentPayload, RouteError> => {
  const { encryptedData } = body;

  const decryptedCardInfo = decryptCipher(Buffer.from(secret, "base64"), encryptedData);

  const encryptCardData = ResultAsync.fromPromise(pgpEncrypt(decryptedCardInfo, circlePublicKey), (e) =>
    other("Error while encrypting Card Details", e)
  );

  return encryptCardData.map((encryptedData) => ({
    ...body,
    encryptedData,
    verification: "cvv",
    source: { type: "card", id: account.cards[0].cardId },
  }));
};

const processCircleCardPaymentResponse = (payment: CirclePaymentResponse): CirclePayment => {
  const { status, id, createDate, updateDate } = payment;
  logger.debug({ payment }, "Payment result from circle");
  return { status, id, createDate, updateDate };
};

const addBoilerPlatePayloadData = <T>(createCard: CirclePayload): T => {
  return {
    ...createCard,
    idempotencyKey: randomUUID(),
    keyId: circlePublicKey.keyId,
    metadata: {
      ...createCard.metadata,
      ipAddress: "127.0.0.1",
      sessionId: createHash("sha256").update(createCard.encryptedData).digest("base64"),
    },
  } as T;
};

export const createSettlement = (
  createSettlement: CreateCircleSettlement
): ResultAsync<CircleSettlement, RouteError> => {
  const fetchPayments = ResultAsync.fromPromise(
    fetchFromCircle<CirclePaymentResponse[]>(`/payments?settlementId=${createSettlement.settlementId}`),
    (e) => thirdPartyError("Circle API fetch Payments Error", e)
  );

  return fetchPayments.andThen(checkPaymentResponse).andThen(findUserByPaymentCard).andThen(payoutToUser);
};

const checkPaymentResponse = (payments: CirclePaymentResponse[]): ResultAsync<CirclePaymentResponse, RouteError> => {
  if (payments.length !== 1)
    return errAsync(other("Invalid Payment Response from Circle Api, something is wrong here!"));

  const [payment] = payments;

  if (payment.status !== "paid")
    return errAsync(other("Invalid Payment Response from Circle Api Payment is not registered as paid!"));

  return okAsync(payment);
};

const findUserByPaymentCard = (payment: CirclePaymentResponse): ResultAsync<PaymentAndAddress, RouteError> => {
  const readUser = getSafeResultAsync(readUserByCardId(payment.source.id), (e) =>
    other("Error while Reading User by Card Id", e)
  );

  return readUser.andThen(findUsdcAddress).map((address) => ({ ...payment, address }));
};

const findUsdcAddress = (user: User): ResultAsync<string, RouteError> => {
  const ethereumAddressShare = user.keyShares.find((share) => share.path === config.ethereumAddressPath);

  if (!ethereumAddressShare || ethereumAddressShare.address === null)
    return errAsync(other("No matching Ethereum Address could be found"));

  return okAsync(ethereumAddressShare.address);
};

const payoutToUser = (paymentAndAddress: PaymentAndAddress): ResultAsync<CircleSettlement, RouteError> => {
  const requestBody = {
    idempotencyKey: randomUUID(),
    source: {
      type: "wallet",
      id: paymentAndAddress.merchantWalletId,
    },
    destination: {
      type: "blockchain",
      address: paymentAndAddress.address,
      chain: "MATIC",
    },
    amount: calculateAmount(paymentAndAddress),
  };

  const postPayout = ResultAsync.fromPromise(
    fetchFromCircle<CircleTransferResponse>("/transfers", { method: HttpMethod.POST, body: requestBody }),
    (e) => thirdPartyError("Error while triggering Circle Transfer", e)
  );

  return postPayout;
};

const calculateAmount = (payment: CirclePaymentResponse) => {
  const { amount, fees: paymentFees } = payment;

  const brutto = Number.parseFloat(amount.amount);
  const fees = Number.parseFloat(paymentFees.amount);
  const netto = brutto - fees;

  return { amount: netto.toFixed(2), currency: amount.currency };
};

type PaymentAndAddress = CirclePaymentResponse & { address: string };
