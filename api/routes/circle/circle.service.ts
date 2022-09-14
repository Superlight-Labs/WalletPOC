import logger from "@lib/logger";
import { isRouteError, other, RouteError, thirdPartyError } from "@lib/route/error";
import { decryptCipher } from "@lib/utils/auth";
import { pgpEncrypt } from "@lib/utils/crypto";
import { circlePublicKey } from "@server";
import crypto from "crypto";
import { okAsync, ResultAsync } from "neverthrow";
import { HttpMethod } from "../endpoints";
import { User } from "../user/user";
import { CircleAccount, CircleCard, CircleCreateCardResponse, CreateCircleCard } from "./circle";
import { fetchFromCircle } from "./circle-endpoint";
import { readCircleAccount, readCircleCard, saveCircleAccount, saveCircleCard } from "./circle.repository";

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
    .map((encryptedData) => getCirclePayload(createCard, encryptedData))
    .andThen(postCardToCircle)
    .andThen((circleCard) => processCircleCardResponse(circleAccount, circleCard, user));
};

const getCirclePayload = (createCard: CreateCircleCard, encryptedData: string): CreateCircleCard => {
  return {
    ...createCard,
    idempotencyKey: crypto.randomUUID(),
    keyId: circlePublicKey.keyId,
    encryptedData,
    metadata: {
      ...createCard.metadata,
      ipAddress: "127.0.0.1",
      sessionId: crypto.createHash("sha256").update(encryptedData).digest("base64"),
    },
  };
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
