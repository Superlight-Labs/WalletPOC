import { notFound, RouteError } from "@lib/route/error";
import { client } from "@server";
import { User } from "../user/user";
import { CircleAddress, CircleWallet } from "./circle";

export const saveCircleWallet = (user: User, walletId: string, entityId: string): Promise<CircleWallet> => {
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

export const saveCircleAddress = (
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

export const readCircleWallet = async (user: User): Promise<CircleWallet | RouteError> => {
  const wallet = await client.circleWallet.findFirst({
    where: {
      userId: user.id,
      userDevicePublicKey: user.devicePublicKey,
    },
  });

  if (!wallet) return notFound();

  return wallet;
};

export const readCircleWalletAddress = async (
  circleWallet: CircleWallet,
  currency: string,
  chain: string
): Promise<CircleAddress | RouteError> => {
  const circleAddress = await client.circleAddress.findFirst({
    where: {
      walletId: circleWallet.walletId,
      currency: currency,
      chain: chain,
    },
  });

  if (!circleAddress) return notFound();

  return circleAddress;
};
