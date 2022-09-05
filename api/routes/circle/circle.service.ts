import crypto from "crypto";
import { okAsync, ResultAsync } from "neverthrow";
import { User } from "../user/user";
import { CircleAddress, CircleAddressRequest, CircleWallet } from "./circle";
import { fetchFromCircle, HttpMethod } from "./circle-config";
import { getCircleWallet, getCircleWalletAddress, storeCircleAddress, storeCircleWallet } from "./circle.repository";

const repoStoreCircleWallet = (user: User, wallet: any) => {
  const res = storeCircleWallet(user, wallet.walletId, wallet.entityId);
  return ResultAsync.fromPromise(res, (e) => console.error(e));
};

const repoStoreCircleAddress = (user: User, circleWallet: CircleWallet, circleAddress: CircleAddress) => {
  const res = storeCircleAddress(user, circleWallet, circleAddress);
  return ResultAsync.fromPromise(res, (e) => console.error(e));
};

export const postCreateCircleWallet = (user: User): ResultAsync<CircleWallet, any> => {
  const usersCircleWalletPromise = getCircleWallet(user);
  const usersCircleWallet = ResultAsync.fromPromise(usersCircleWalletPromise, (e) =>
    console.error("Error checking users Circle Wallet", e)
  );

  const circleWallet = usersCircleWallet.andThen((cw) => {
    if (cw) return okAsync(cw);

    const circleWalletPromise: Promise<any> = fetchFromCircle("wallets", {
      method: HttpMethod.POST,
      body: JSON.stringify({ idempotencyKey: crypto.randomUUID(), description: "Vest Wallet Connector" }),
    });

    const newOne = ResultAsync.fromPromise(circleWalletPromise, (e) => console.error(e));
    return newOne.andThen((wallet) => repoStoreCircleWallet(user, wallet));
  });

  return circleWallet;
};

export const createCircleAddress = (
  createAddressReq: CircleAddressRequest,
  user: User
): ResultAsync<CircleAddress, any> => {
  const circleAddress = getCircleAddress(createAddressReq, user);

  return circleAddress.andThen((cw) => {
    if (cw) return okAsync(cw);

    return postCreateCircleWallet(user).andThen((circleWallet) => {
      const newCircleAddressPromise: Promise<any> = fetchFromCircle(
        "wallets/" + circleWallet?.walletId + "/addresses",
        {
          method: HttpMethod.POST,
          body: JSON.stringify({
            idempotencyKey: crypto.randomUUID(),
            currency: createAddressReq.currency,
            chain: createAddressReq.chain,
          }),
        }
      );
      const newCircleAddress = ResultAsync.fromPromise(newCircleAddressPromise, (e) =>
        console.error("Could not create new Circle Address", e)
      );

      return newCircleAddress.andThen((circleAddress) => repoStoreCircleAddress(user, circleWallet, circleAddress));
    });
  });
};

export const getCircleAddress = (
  createAddressReq: CircleAddressRequest,
  user: User
): ResultAsync<CircleAddress | null, any> => {
  return postCreateCircleWallet(user).andThen((circleWallet) => {
    const circleAddress = getCircleWalletAddress(circleWallet, createAddressReq.currency, createAddressReq.chain);
    return ResultAsync.fromPromise(circleAddress, (e) => console.error(e));
  });
};
