import crypto from "crypto";
import { ResultAsync } from "neverthrow";
import { User } from "../user/user";
import { CircleCreateAddressRequest, CircleWallet } from "./circle";
import { fetchFromCircle, HttpMethod } from "./circle-config";
import { getCircleWallet, storeCircleWallet } from "./circle.repository";

const repoStoreCircleWallet = (user: User, wallet: any) => {
  const res = storeCircleWallet(user, wallet.walletId, wallet.entityId);

  return ResultAsync.fromPromise(res, (e) => console.error(e));
};

export const postCreateCircleWallet = (user: User): ResultAsync<CircleWallet, any> => {
  const usersCircleWalletPromise = getCircleWallet(user);
  const usersCircleWallet = ResultAsync.fromPromise(usersCircleWalletPromise, (e) =>
    console.error("Error checking users Circle Wallet", e)
  );

  // usersCircleWallet.map((wallet) => {
  //   if(wallet) return wallet;

  // })

  const circleWalletPromise: Promise<any> = fetchFromCircle("wallets", {
    method: HttpMethod.POST,
    body: JSON.stringify({ idempotencyKey: crypto.randomUUID(), description: "Vest Wallet Connector" }),
  });

  const circleWallet = ResultAsync.fromPromise(circleWalletPromise, (e) => console.error(e));

  return circleWallet.andThen((wallet) => repoStoreCircleWallet(user, wallet));
};

export const createCircleAddress = (
  createAddressReq: CircleCreateAddressRequest,
  user: User
): ResultAsync<number, any> => {
  return ResultAsync.fromPromise(Promise.resolve(0), (e) => console.error(e));
};
