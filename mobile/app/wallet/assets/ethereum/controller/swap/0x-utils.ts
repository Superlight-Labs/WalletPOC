import { swapFeeAddress, swapFeePercentage } from "ethereum/config/ethereum-constants";
import { ERC20Token } from "ethereum/config/tokens";
import {
  EthereumSwappingProviderEnum,
  EthereumSwappingService,
} from "packages/blockchain-api-client/src/blockchains/ethereum/ethereum-swapping-service";
import { ZeroExSwapQuote } from "packages/blockchain-api-client/src/provider/0x/ethereum/0x-ethereum-types";
import { MPCSigner } from "../signers/mpc-signer";

export const getSwapQuote = async (
  tokenFrom: ERC20Token,
  tokenTo: ERC20Token,
  myAddress: string,
  amount: string
): Promise<ZeroExSwapQuote> => {
  const service = new EthereumSwappingService("TEST", "Ethereum");
  const params =
    "buyToken=" +
    tokenTo.ethereum.address +
    "&sellToken=" +
    tokenFrom.ethereum.address +
    "&sellAmount=" +
    amount +
    "&feeRecipient=" +
    swapFeeAddress +
    "&buyTokenPercentageFee=" +
    swapFeePercentage;
  return await service.getSwapQuote(params, EthereumSwappingProviderEnum.ZeroEx);
};

export const swapWithQuote = async (quote: ZeroExSwapQuote, signer: MPCSigner) => {
  const transaction = {
    data: quote.data,
    to: quote.to,
    value: quote.value,
    from: signer.getAddressObj().address,
    gasPrice: quote.gasPrice,
  };
  return await signer.sendTransaction(transaction);
};
