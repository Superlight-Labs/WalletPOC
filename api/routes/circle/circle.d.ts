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

export interface CirclePayment {
  id: string;
  createDate: Date;
  updateDate: Date;
  status: "pending" | "confirmed" | "paid" | "failed";
}

export interface CircleSettlement {
  id: string;
}

export interface CreateCircleSettlement {
  id: string;
  amount: Amount;
}

export type CircleResponse<T> = {
  data: T;
};

export type CirclePublicKey = {
  keyId: string;
  publicKey: string;
};

export type CirclePayload = {
  metadata: MetaData;
  encryptedData: string;
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
  amount: Amount;
  source: Source;
  description: string;
  channel: string;
  metadata: MetaData;
}

export interface CreateCardPaymentPayload extends BasePaymentPayload {
  verification?: "cvv";
  autoCapture?: boolean;
  verificationSuccessUrl?: string;
  verificationFailureUrl?: string;
  keyId?: string;
  encryptedData: string;
}

export interface CirclePaymentResponse {
  id: string;
  type: string;
  status: "pending" | "confirmed" | "paid" | "failed";
  description: string;
  amount: Amount;
  fees: Amount;
  createDate: Date;
  updateDate: Date;
  merchantId: string;
  merchantWalletId: string;
  source: Source;
  refunds: any[];
  metadata: Metadata;
}

export interface CircleTransferResponse {
  id: string;

  // Many more but we dont need them all
  // for completeness look at https://developers.circle.com/reference/accounts-transfers-create
}
export interface Amount {
  amount: string;
  currency: string;
}

export interface Source {
  id: string;
  type: "card";
}
