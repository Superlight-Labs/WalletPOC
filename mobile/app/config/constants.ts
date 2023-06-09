import { KeyShareType, MPCEcdsaKeyShare } from "shared/types/mpc";

interface IConstants {
  deviceKeyName: string;
  bip44MasterIndex: string;
  bip44PurposeIndex: string;
}

//TODO PurposeIndex should be 44, causes an mpc error currently. Fix error and change to 44
const constants: IConstants = {
  deviceKeyName: "WalletPOCDeviceKey",
  bip44MasterIndex: "m",
  bip44PurposeIndex: "44",
};

export const emptyKeyPair: MPCEcdsaKeyShare = {
  id: "",
  path: "",
  keyShare: "",
  parentWalletId: "",
  type: KeyShareType.EMPTY,
};

export const emptyEcdsaKey = {};

export default constants;
