import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CustomStorage } from "state/storage";

const { persistAtom } = recoilPersist({
  storage: CustomStorage,
  key: "FiatManagementStatePersist",
});

const initialState: FiatManagementState = {
  cardId: "",
};

export type FiatManagementState = {
  cardId: string;
};

export const fiatStateAtom = atom<FiatManagementState>({
  key: "FiatManagement",
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
