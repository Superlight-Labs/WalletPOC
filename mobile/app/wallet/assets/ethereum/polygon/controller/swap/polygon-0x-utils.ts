import { swapFeeAddress, swapFeePercentage } from "ethereum/config/ethereum-constants";
import { ERC20Token } from "ethereum/config/tokens";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import {
  EthereumSwappingProviderEnum,
  EthereumSwappingService,
} from "packages/blockchain-api-client/src/blockchains/ethereum/ethereum-swapping-service";
import { ZeroExSwapQuote } from "packages/blockchain-api-client/src/provider/0x/ethereum/0x-ethereum-types";

export const getPolygonSwapQuote = async (
  tokenFrom: ERC20Token,
  tokenTo: ERC20Token,
  myAddress: string,
  amount: string
): Promise<ZeroExSwapQuote> => {
  const service = new EthereumSwappingService("TEST", "Polygon");
  const toAddress = tokenTo.polygonContract.isToken ? tokenTo.polygonContract.address : tokenTo.symbol;
  const fromAddress = tokenFrom.polygonContract.isToken ? tokenFrom.polygonContract.address : tokenFrom.symbol;
  const params =
    "buyToken=" +
    toAddress +
    "&sellToken=" +
    fromAddress +
    "&sellAmount=" +
    amount +
    "&feeRecipient=" +
    swapFeeAddress +
    "&buyTokenPercentageFee=" +
    swapFeePercentage;
  console.log("params:", params);
  return await service.getSwapQuote(params, EthereumSwappingProviderEnum.ZeroEx);
};

export const swapPolygonWithQuote = async (quote: ZeroExSwapQuote, address: string, signer: MPCSigner) => {
  const transaction = {
    data: quote.data,
    to: quote.to,
    value: quote.value,
    from: address,
    gasPrice: quote.gasPrice,
  };
  return await signer.sendTransaction(transaction);
};
