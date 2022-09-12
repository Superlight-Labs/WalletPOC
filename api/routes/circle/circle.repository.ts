import { notFound, RouteError } from "@lib/route/error";
import { client } from "@server";
import { User } from "../user/user";
import { CircleAccount, CircleCard } from "./circle";

export const saveCircleAccount = (user: User): Promise<CircleAccount> => {
  return client.circleAccount.create({
    data: {
      user: {
        connect: {
          id_devicePublicKey: {
            id: user.id,
            devicePublicKey: user.devicePublicKey,
          },
        },
      },
    },
    include: {
      cards: true,
    },
  });
};

export const saveCircleCard = (user: User, account: CircleAccount, cardId: string): Promise<CircleCard> => {
  return client.circleCard.create({
    data: {
      cardId,
      circleAccount: {
        connect: {
          id: account.id,
          userId_userDevicePublicKey: {
            userId: user.id,
            userDevicePublicKey: user.devicePublicKey,
          },
        },
      },
    },
  });
};

export const readCircleAccount = async (user: User): Promise<CircleAccount | RouteError> => {
  const wallet = await client.circleAccount.findFirst({
    where: {
      userId: user.id,
      userDevicePublicKey: user.devicePublicKey,
    },
    include: { cards: true },
  });

  if (!wallet) return notFound();

  return wallet;
};

export const readCircleCard = async (account: CircleAccount): Promise<CircleCard | RouteError> => {
  const circleCard = await client.circleCard.findFirst({
    where: {
      accountId: account.id,
    },
  });

  if (!circleCard) return notFound();

  return circleCard;
};
