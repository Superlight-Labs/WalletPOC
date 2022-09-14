export interface CircleCreateWalletRequest {
  data: any;
}

export interface CircleAccount {
  id: string;
  cards: CircleCard[];
}

export interface CircleCard {
  cardId: string;
  accountId: string;
}

export type CircleResponse<T> = {
  data: T;
};

export type CirclePublicKey = {
  keyId: string;
  publicKey: string;
};

export type CreateCircleCard = {
  idempotencyKey: string;
  keyId: string;
  encryptedData: string;
  billingDetails: BillingDetails;
  expMonth: number;
  expYear: number;
  metadata: MetaData;
};

interface BillingDetails {
  name: string;
  city: string;
  country: string;
  line1: string;
  line2: string;
  district: string;
  postalCode: string;
}

export interface CircleCreateCardResponse {
  id: string;
  status: string;
  last4: string;
  billingDetails: BillingDetails;
  expMonth: number;
  expYear: number;
  network: string;
  bin: string;
  issuerCountry: string;
  fundingType: string;
  fingerprint: string;
  verification: Verification;
  createDate: Date;
  metadata: MetaData;
  updateDate: Date;
}

export interface Verification {
  cvv: string;
  avs: string;
}

interface MetaData {
  email?: string;
  phoneNumber?: string;
  sessionId?: string;
  ipAddress?: string;
}

export type CreateCardResponse = {
  id: string;
};

export interface BasePaymentPayload {
  idempotencyKey: string;
  amount: {
    amount: string;
    currency: string;
  };
  source: {
    id: string;
    type: string;
  };
  description: string;
  channel: string;
  metadata: MetaData;
}

export interface CreateCardPaymentPayload extends BasePaymentPayload {
  verification?: string;
  autoCapture?: boolean;
  verificationSuccessUrl?: string;
  verificationFailureUrl?: string;
  keyId?: string;
  encryptedData?: string;
}
