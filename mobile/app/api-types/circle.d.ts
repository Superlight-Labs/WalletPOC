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

export interface CirclePayment {
  id: string;
  createDate: Date;
  updateDate: Date;
  status: "pending" | "confirmed" | "paid" | "failed";
  amount?: Amount;
}

export interface BasePaymentPayload {
  idempotencyKey?: string;
  amount: Amount;
  source?: Source;
  description?: string;
  channel?: string;
  metadata: MetaData;
}

export interface Amount {
  amount: string;
  currency: string;
}

export interface Source {
  id: string;
  type: "card";
}

export interface CreateCardPaymentPayload extends BasePaymentPayload {
  verification?: string;
  autoCapture?: boolean;
  verificationSuccessUrl?: string;
  verificationFailureUrl?: string;
  keyId?: string;
  encryptedData?: string;
}
