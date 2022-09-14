export type CirclePublicKey = { keyId: string; publicKey: string };

export type CreateCircleCard = {
  idempotencyKey?: string;
  keyId?: string;
  publicKey?: string;
  encryptedData: string;
  billingDetails: {
    name: string;
    city: string;
    country: string;
    line1: string;
    line2?: string;
    district: string;
    postalCode: string;
  };
  expMonth: number;
  expYear: number;
  metadata: MetaData;
};

interface MetaData {
  email?: string;
  phoneNumber?: string;
  sessionId?: string;
  ipAddress?: string;
}

export interface CircleCard {
  cardId: string;
  accountId: string;
}
