import { GaslessTransactionResponse } from "api-types/gasless";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { fetchFromApi, HttpMethod } from "lib/http";
import { ZeroExSwapQuote } from "packages/blockchain-api-client/src/provider/0x/ethereum/0x-ethereum-types";

export const gaslessSwapWithQuote = async (quote: ZeroExSwapQuote, signer: MPCSigner) => {
  //   Let api send ether to use in approval call
  await fetchFromApi<GaslessTransactionResponse>("/gasless/swap", {
    method: HttpMethod.POST,
    body: {
      network: signer.getChain(),
      zeroExQuote: quote,
      receiver: signer.getAddressObj().address,
    },
  });
  const transaction = {
    data: quote.data,
    to: quote.to,
    value: quote.value,
    from: signer.getAddressObj().address,
    gasPrice: quote.gasPrice,
  };
  return await signer.sendTransaction(transaction);
};
