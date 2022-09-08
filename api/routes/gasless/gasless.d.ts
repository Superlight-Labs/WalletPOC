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

export interface GaslessSwapRequest {
  network: string;
  zeroExQuote: ZeroExSwapQuote;
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

export interface GaslessMetaTransactionRequest {
  network: string;
  metaTx: object;
  signature: object;
  contractAddress: string;
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

export interface ZeroExSwapQuote {
  chainId: number;
  price: string;
  guaranteedPrice: string;
  to: string;
  data: string;
  value: string;
  gas: string;
  estimatedGas: string;
  gasPrice: string;
  protocolFee: string;
  minimumProtocolFee: string;
  buyTokenAddress: string;
  sellTokenAddress: string;
  buyAmount: string;
  sellAmount: string;
  sources?: SourcesEntity[] | null;
  orders?: OrdersEntity[] | null;
  allowanceTarget: string;
  sellTokenToEthRate: string;
  buyTokenToEthRate: string;
}
export interface SourcesEntity {
  name: string;
  proportion: string;
}
export interface OrdersEntity {
  makerToken: string;
  takerToken: string;
  makerAmount: string;
  takerAmount: string;
  fillData: FillData;
  source: string;
  sourcePathId: string;
  type: number;
}
export interface FillData {
  tokenAddressPath?: string[] | null;
  router: string;
}
