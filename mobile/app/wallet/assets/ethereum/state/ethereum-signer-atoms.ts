import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { atom } from "recoil";

export const ethereumSignerState = atom<EthereumSignerState>({
  key: "EthereumSignerState",
  default: undefined,
});

type EthereumSignerState = MPCSigner | undefined;
