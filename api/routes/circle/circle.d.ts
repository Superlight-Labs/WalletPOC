export interface CircleCreateWalletRequest {
  data: any;
}

export interface CircleAddressRequest {
  currency: string;
  chain: string;
}

export interface CircleWallet {
  walletId: string;
  entityId: string;
  addresses?: CircleAddress[];
}

export interface CircleAddress {
  addressId: string;
  address: string;
  currency: string;
  chain: string;
}

export type CircleResponse<T> = {
  data: T;
};
