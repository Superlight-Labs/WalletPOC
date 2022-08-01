import { User } from "api-types/user";
import constants from "config/constants";
import { createGenericSecret, importSecret, Share } from "lib/mpc";
import { deriveBIP32NoLocalAuth } from "lib/mpc/deriveBip32";
import { getResultDeriveBIP32 } from "react-native-blockchain-crypto-mpc";
import {
  KeyShareType,
  MasterKeyShare,
  MPCEcdsaKeyShare,
  MPCKeyShare,
  SecretKeyShare,
} from "shared/mpc";
import "shim";
import { CryptoWallet } from "../wallet";

export type MPCKeyShareToWalletConfig<T extends CryptoWallet> = (
  MPCKeyShare: MPCKeyShare
) => Promise<T>;

export const generateMPCKeyShareFromSeed = async (
  seed: string,
  user: User
): Promise<MasterKeyShare> => {
  const share = await importSecret(user.devicePublicKey, user.id, seed);

  return await deriveMaster(
    secretShareToMPCKeyShare(share),
    user,
    constants.bip44MasterIndex,
    false
  );
};

export const generateMPCKeyShare = async (
  user: User
): Promise<MasterKeyShare> => {
  const share = await createGenericSecret(user.devicePublicKey, user.id);

  return deriveMaster(
    secretShareToMPCKeyShare(share),
    user,
    constants.bip44MasterIndex,
    false
  );
};

const deriveMaster = async (
  parent: MPCKeyShare,
  user: User,
  index: string,
  hardened: boolean
): Promise<MasterKeyShare> => {
  const context = await deriveBIP32NoLocalAuth(
    user.devicePublicKey,
    user.id,
    parent.id,
    parent.keyShare,
    index,
    hardened ? "1" : "0"
  );

  const derivedShare = await getResultDeriveBIP32(context.clientContext);

  return {
    keyShare: derivedShare,
    id: context.deriveResult.serverShareId,
    path: context.deriveResult.path,
    type: KeyShareType.MASTER,
  };
};

export const deriveMpcKeyShare = async (
  parent: MPCEcdsaKeyShare | MasterKeyShare,
  user: User,
  index: string,
  hardened: boolean,
  type: KeyShareType
): Promise<MPCEcdsaKeyShare> => {
  const context = await deriveBIP32NoLocalAuth(
    user.devicePublicKey,
    user.id,
    parent.id,
    parent.keyShare,
    index,
    hardened ? "1" : "0",
    parent.path
  );

  const derivedShare = await getResultDeriveBIP32(context.clientContext);

  return {
    keyShare: derivedShare,
    id: context.deriveResult.serverShareId,
    path: context.deriveResult.path,
    parentWalletId: parent.id,
    type,
  };
};

const secretShareToMPCKeyShare = (share: Share): SecretKeyShare => {
  return {
    id: share.serverShareId,
    keyShare: share.clientShare,
    type: KeyShareType.SECRET,
  };
};
