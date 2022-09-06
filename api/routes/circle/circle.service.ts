import { isRouteError, other, RouteError, thirdPartyError } from "@lib/error";
import crypto from "crypto";
import { okAsync, ResultAsync } from "neverthrow";
import { User } from "../user/user";
import { CircleAddress, CircleAddressRequest, CircleWallet } from "./circle";
import { fetchFromCircle, HttpMethod } from "./circle-config";
import { readCircleWallet, readCircleWalletAddress, saveCircleAddress, saveCircleWallet } from "./circle.repository";

export const getOrCreateCircleWallet = (user: User): ResultAsync<CircleWallet, RouteError> => {
  const readWallet = ResultAsync.fromPromise(readCircleWallet(user), (e) =>
    other("Error while reading CircleWallets from Database", e)
  );

  return readWallet.andThen((walletOrNotFound) => {
    if (isRouteError(walletOrNotFound)) return createCircleWallet(user);

    return okAsync(walletOrNotFound);
  });
};

const createCircleWallet = (user: User): ResultAsync<CircleWallet, RouteError> => {
  const circleWalletPromise: Promise<any> = fetchFromCircle("wallets", {
    method: HttpMethod.POST,
    body: JSON.stringify({ idempotencyKey: crypto.randomUUID(), description: "Vest Wallet Connector" }),
  });

  return ResultAsync.fromPromise(circleWalletPromise, (e) =>
    thirdPartyError("Circle Api Create Wallet Error", e)
  ).andThen((wallet) =>
    ResultAsync.fromPromise(saveCircleWallet(user, wallet.walletId, wallet.entityId), (e) =>
      other("Error while Saving CircleWallet", e)
    )
  );
};

export const getOrCreateCircleAddress = (
  createAddressReq: CircleAddressRequest,
  user: User
): ResultAsync<CircleAddress, RouteError> => {
  const circleWallet = getOrCreateCircleWallet(user);

  return circleWallet.andThen((cw) => getOrCreateCircleAddressFromCircleWallet(cw, createAddressReq, user));
};

const getOrCreateCircleAddressFromCircleWallet = (
  circleWallet: CircleWallet,
  createAddressReq: CircleAddressRequest,
  user: User
) => {
  const { currency, chain } = createAddressReq;

  const readAddress = ResultAsync.fromPromise(readCircleWalletAddress(circleWallet, currency, chain), (e) =>
    other("Error while reading CircleAddress from Database", e)
  );

  return readAddress.andThen((addressOrNotFound) => {
    if (isRouteError(addressOrNotFound)) return createCircleAddress(circleWallet, createAddressReq, user);

    return okAsync(addressOrNotFound);
  });
};

const createCircleAddress = (circleWallet: CircleWallet, createAddressReq: CircleAddressRequest, user: User) => {
  const newCircleAddressPromise: Promise<any> = fetchFromCircle("wallets/" + circleWallet?.walletId + "/addresses", {
    method: HttpMethod.POST,
    body: JSON.stringify({
      idempotencyKey: crypto.randomUUID(),
      currency: createAddressReq.currency,
      chain: createAddressReq.chain,
    }),
  });

  return ResultAsync.fromPromise(newCircleAddressPromise, (e) =>
    thirdPartyError("Circle Api Create Address Error", e)
  ).andThen((circleAddress) =>
    ResultAsync.fromPromise(saveCircleAddress(user, circleWallet, circleAddress), (e) =>
      other("Error while Saving CircleAddress", e)
    )
  );
};
