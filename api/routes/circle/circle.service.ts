import { ResultAsync } from "neverthrow";
import { User } from "../user/user";
import { CircleCreateAddressRequest } from "./circle";

export const createCircleWallet = (user: User): ResultAsync<number, any> => {
  console.log("User: ", user);
  console.log("stufffff");
  return ResultAsync.fromPromise(Promise.resolve(0), (e) => new Error(e as any));
};

export const createCircleAddress = (
  createAddressReq: CircleCreateAddressRequest,
  user: User
): ResultAsync<number, any> => {
  return ResultAsync.fromPromise(Promise.resolve(0), (e) => new Error(e as any));
};
