import { client } from "@server";
import { User } from "../user/user";
import { CircleWallet } from "./circle";

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

export const getCircleWallet = async (user: User): Promise<CircleWallet | null> => {
  return await client.circleWallet.findFirst({
    where: {
      userId: user.id,
      userDevicePublicKey: user.devicePublicKey,
    },
  });
};
