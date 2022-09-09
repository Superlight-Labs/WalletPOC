import { EthereumService } from "packages/blockchain-api-client/src";
import { TransactionRequest } from "packages/blockchain-api-client/src/base/types";
import { EthereumProviderEnum } from "packages/blockchain-api-client/src/blockchains/ethereum/ethereum-factory";

/**
 * builds a raw ethereum transaction
 * @param to
 * @param value
 * @param txCount
 * @param gasPrice
 * @returns
 */
export const buildRawTransaction = (
  to: string,
  value: number,
  txCount: string,
  gasPrice: string
): TransactionRequest => {
  const txData: TransactionRequest = {
    nonce: txCount,
    to,
    value: "0x" + value.toString(16),
    gasPrice,
    gasLimit: "0x5208",
    chainId: 5,
  };

  return txData;
};

/**
 * Broadcasts a signed Ethereum transaction via TATUM
 * @param transaction Signed transaction
 * @returns
 */
export const broadcastTransaction = async (transaction: string): Promise<string> => {
  const service = new EthereumService("TEST");
  const broadcastTransaction: string = await service.sendRawTransaction(transaction, EthereumProviderEnum.ALCHEMY);
  if (!broadcastTransaction) throw new Error("Failed to broadcast transaction");
  return broadcastTransaction;
};
