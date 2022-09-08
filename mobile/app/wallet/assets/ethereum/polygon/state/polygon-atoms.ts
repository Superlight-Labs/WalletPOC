import { ERC20Token } from "ethereum/config/tokens";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CustomStorage } from "state/storage";

const { persistAtom } = recoilPersist({
  storage: CustomStorage,
  key: "PolygonStatePersist",
});

export type PendingTransaction = {
  hash: string;
  token: ERC20Token;
  amount: string;
  checkpointed: boolean;
};

export type PolygonState = {
  withdrawTransactions: PendingTransaction[];
};

export const initialPolygonState: PolygonState = {
  withdrawTransactions: [],
};

export const polygonState = atom<PolygonState>({
  key: "PolygonState",
  default: initialPolygonState,
  effects_UNSTABLE: [persistAtom],
});
