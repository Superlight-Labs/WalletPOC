import { client } from "@server";
import { User } from "../user/user";
import { CircleAddress, CircleWallet } from "./circle";

export const storeCircleWallet = (user: User, walletId: string, entityId: string): Promise<CircleWallet> => {
  return client.circleWallet.create({
    data: {
      walletId,
      entityId,
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

export const storeCircleAddress = (
  user: User,
  circleWallet: CircleWallet,
  circleAddress: CircleAddress
): Promise<CircleAddress> => {
  return client.circleAddress.create({
    data: {
      address: circleAddress.address,
      currency: circleAddress.currency,
      chain: circleAddress.chain,
      circleWallet: {
        connect: {
          walletId: circleWallet.walletId,
        },
      },
    },
  });
};

export const getCircleWallet = async (user: User): Promise<CircleWallet | null> => {
  return await client.circleWallet.findFirst({
    where: {
      userId: user.id,
      userDevicePublicKey: user.devicePublicKey,
    },
  });
};

export const getCircleWalletAddress = async (
  circleWallet: CircleWallet,
  currency: string,
  chain: string
): Promise<CircleAddress | null> => {
  const circleAddress = await client.circleAddress.findFirst({
    where: {
      walletId: circleWallet.walletId,
      currency: currency,
      chain: chain,
    },
  });

  return circleAddress;
};
