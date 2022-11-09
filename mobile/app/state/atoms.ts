import { User } from "api-types/user";
import { emptyKeyPair } from "config/constants";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { KeyShareType } from "shared/types/mpc";
import { CustomStorage } from "./storage";

const { persistAtom } = recoilPersist({
  storage: CustomStorage,
  key: "AuthStatePersist",
});

export type AuthState = User;

export const initialAuthState: AuthState = {
  devicePublicKey: "",
  id: "",
  keyShares: [],
  bip44MasterKeyShare: { ...emptyKeyPair, type: KeyShareType.MASTER },
};

export const authState = atom({
  key: "AuthState",
  default: initialAuthState,
  effects_UNSTABLE: [persistAtom],
});

export type LoadingState = {
  status: "Loading" | "Error" | "Success" | "Idle";
  message: string;
};

const initialApiLoadingState: LoadingState = {
  status: "Idle",
  message: "",
};

export const apiLoadingState = atom({
  key: "ApiLoadingState",
  default: initialApiLoadingState,
});
