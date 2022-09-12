import logger from "@lib/logger";
import { isRouteError, other, RouteError, thirdPartyError } from "@lib/route/error";
import crypto from "crypto";
import { okAsync, ResultAsync } from "neverthrow";
import { HttpMethod } from "../endpoints";
import { User } from "../user/user";
import { CircleAccount, CircleCard, CircleCreateCardResponse, CirclePublicKey, CreateCircleCard } from "./circle";
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
  user: User
): ResultAsync<CircleCard, RouteError> => {
  const circleAccount = getOrCreateCircleAccount(user);

  return circleAccount.andThen((ca) => getOrCreateCircleCardFromCircleAccount(ca, createAddressReq, user));
};

const getOrCreateCircleCardFromCircleAccount = (
  circleAccount: CircleAccount,
  createCard: CreateCircleCard,
  user: User
): ResultAsync<CircleCard, RouteError> => {
  const readCard = ResultAsync.fromPromise(readCircleCard(circleAccount), (e) =>
    other("Error while reading CircleAddress from Database", e)
  );

  return readCard.andThen((addressOrNotFound) => {
    if (isRouteError(addressOrNotFound)) return createCircleCard(circleAccount, createCard, user);

    return okAsync(addressOrNotFound);
  });
};

const createCircleCard = (
  circleAccount: CircleAccount,
  createCard: CreateCircleCard,
  user: User
): ResultAsync<CircleCard, RouteError> => {
  const body = {
    ...createCard,
    idempotencyKey: crypto.randomUUID(),
    metadata: {
      ...createCard.metadata,
      ipAddress: "127.0.0.1",
      sessionId: crypto.createHash("sha256").update(user.id).digest("base64"),
    },
  };

  logger.info({ body });
  const newCircleAddressPromise: Promise<CircleCreateCardResponse> = fetchFromCircle("/cards", {
    method: HttpMethod.POST,
    body,
  });

  return ResultAsync.fromPromise(newCircleAddressPromise, (e) =>
    thirdPartyError("Circle Api Create Address Error", e)
  ).andThen((circleCard) =>
    ResultAsync.fromPromise(saveCircleCard(user, circleAccount, circleCard.id), (e) =>
      other("Error while Saving CircleAddress", e)
    )
  );
};

export const getPublicKey = (): ResultAsync<CirclePublicKey, RouteError> => {
  const circlePublicKey = fetchFromCircle<CirclePublicKey>("/encryption/public");

  return ResultAsync.fromPromise(circlePublicKey, (e) => thirdPartyError("Circle Api get Public Key Error", e));
};
