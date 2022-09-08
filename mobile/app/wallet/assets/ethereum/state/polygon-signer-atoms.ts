import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { atom } from "recoil";

export const polygonSignerState = atom<PolygonSignerState>({
  key: "PolygonSignerState",
  default: undefined,
});

type PolygonSignerState = MPCSigner | undefined;
