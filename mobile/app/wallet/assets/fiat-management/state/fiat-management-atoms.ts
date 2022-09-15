import { CirclePayment } from "api-types/circle";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CustomStorage } from "state/storage";

const { persistAtom } = recoilPersist({
  storage: CustomStorage,
  key: "FiatManagementStatePersist",
});

export const initialFiatState: FiatManagementState = {
  cardId: "",
  payments: [],
};

export type FiatManagementState = {
  cardId: string;
  payments: CirclePayment[];
};

export const fiatStateAtom = atom<FiatManagementState>({
  key: "FiatManagement",
  default: initialFiatState,
  effects_UNSTABLE: [persistAtom],
});
