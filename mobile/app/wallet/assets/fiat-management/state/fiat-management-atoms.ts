import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CustomStorage } from "state/storage";

const { persistAtom } = recoilPersist({
  storage: CustomStorage,
  key: "FiatManagementStatePersist",
});

const initialState: FiatManagementState = {};

export type FiatManagementState = {};

export const ethereumWalletsState = atom({
  key: "FiatManagement",
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
