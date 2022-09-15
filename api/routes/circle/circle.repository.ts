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

export const readUserByCardId = async (cardId: string): Promise<User | RouteError> => {
  const cardWithUser = await client.circleCard.findUnique({
    where: {
      cardId,
    },
    include: {
      circleAccount: {
        include: {
          user: {
            include: {
              keyShares: true,
            },
          },
        },
      },
    },
  });

  if (!cardWithUser) return notFound();

  return cardWithUser.circleAccount.user;
};
