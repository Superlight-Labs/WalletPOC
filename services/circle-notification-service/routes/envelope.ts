export interface CircleNotification {
  clientId: string;
  notificationType: string;
  version: number;
  customAttributes: CustomAttributes;

  payment?: Payment;
  settlement?: Settlement;
}

export interface Payment {
  id: string;
  type: string;
  status: string;
  description: string;
  amount: Amount;
  fees: Amount;
  createDate: Date;
  updateDate: Date;
  merchantId: string;
  merchantWalletId: string;
  source: Source;
  refunds: any[];
  verification: Verification;
  metadata: Metadata;
}

export interface Amount {
  amount: string;
  currency: string;
}

export interface Metadata {
  phoneNumber: string;
  email: string;
}

export interface Source {
  id: string;
  type: string;
}

export interface Verification {
  cvv: string;
  avs: string;
}

export interface CustomAttributes {
  clientId: string;
}

export interface Settlement {
  id: string;
  merchantWalletId: string;
  totalDebits: Amount;
  totalCredits: Amount;
  paymentFees: Amount;
  chargebackFees: Amount;
  createDate: Date;
  updateDate: Date;
}
