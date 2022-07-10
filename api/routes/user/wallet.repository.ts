import { notFound, other } from "@lib/error";
import { client } from "../../server";
import { User } from "./user";
import { SecretWallet, ShareWallet, Wallet } from "./wallet";

export const createWalletByShareOfParent = (
  user: User,
  share: string,
  parent: Wallet
): Promise<Wallet> => {
  return client.wallet.create({
    data: {
      mainShare: share,
      parentWallet: {
        connect: {
          id: parent.id,
        },
      },
      user: {
        connect: {
          id_devicePublicKey: {
            id: user.id,
            devicePublicKey: user.devicePublicKey,
          },
        },
      },
    },
  });
};

export const createWalletByShare = (
  user: User,
  share: string
): Promise<Wallet> => {
  return client.wallet.create({
    data: {
      mainShare: share,
      user: {
        connect: {
          id_devicePublicKey: {
            id: user.id,
            devicePublicKey: user.devicePublicKey,
          },
        },
      },
    },
  });
};

export const createWalletBySecret = (
  user: User,
  secret: string
): Promise<Wallet> => {
  return client.wallet.create({
    data: {
      genericSecret: secret,
      user: {
        connect: {
          id_devicePublicKey: {
            id: user.id,
            devicePublicKey: user.devicePublicKey,
          },
        },
      },
    },
  });
};

export const getWallet = async (id: string): Promise<Wallet> => {
  const wallet = await client.wallet.findUnique({
    where: {
      id,
    },
  });

  if (!wallet) throw notFound("No Wallet Found");

  return wallet;
};

export const getSecretWallet = async (id: string): Promise<SecretWallet> => {
  const wallet = await client.wallet.findUnique({
    where: {
      id,
    },
  });

  if (!wallet) throw notFound("No Wallet Found");

  if (wallet.genericSecret === null)
    throw other(
      "Wallet was fetched for working with genericSecret but Wallet does not have generic secret"
    );

  return wallet as SecretWallet;
};

export const getShareWallet = async (id: string): Promise<ShareWallet> => {
  const wallet = await client.wallet.findUnique({
    where: {
      id,
    },
  });

  if (!wallet) throw notFound("No Wallet Found");

  if (wallet.mainShare === null)
    throw other(
      "Wallet was fetched for working with mainShare but Wallet does not have share"
    );

  return wallet as ShareWallet;
};
