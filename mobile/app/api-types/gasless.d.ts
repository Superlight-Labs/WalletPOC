import { BigNumber } from "ethers";

export interface TankBalanceResponse {
  balance: BigNumber;
}

export interface TankAddressResponse {
  address: string;
}

export interface GaslessTransactionResponse {
  transaction: any;
}

export interface GaslessGetRequest {
  network: string;
}

export interface GaslessApproveRequest {
  network: string;
  contractAddress: string;
  receiver: string;
}

export interface GaslessPermitRequest {
  network: string;
  contractAddress: string;
  owner: string;
  spender: string;
  value: string;
  deadline: number;
  v: number;
  r: string;
  s: string;
}

export interface GaslessTransactionRequest {
  network: string;
  transaction: any;
}

export interface GaslessTransferRequest {
  network: string;
  contractAddress: string;
  from: string;
  to: string;
  value: string;
}

export interface GaslessTransferWithAuthorizationRequest {
  network: string;
  contractAddress: string;
  from: string;
  to: string;
  value: string;
  validAfter: number;
  validBefore: number;
  nonce: Array;
  v: number;
  r: string;
  s: string;
}
