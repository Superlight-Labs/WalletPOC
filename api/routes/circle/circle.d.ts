export interface CircleCreateWalletRequest {}

export interface CircleCreateAddressRequest {
  currency: string;
  chain: string;
}

export interface CircleWallet {
  walletId: string;
  entitiyId: string;
  addresses: CircleAddress[];
}

export interface CircleAddress {
  addressId: string;
  address: string;
  currency: string;
  chain: string;
}
