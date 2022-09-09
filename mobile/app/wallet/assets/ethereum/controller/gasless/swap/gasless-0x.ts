import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { abi } from "ethereum/config/abi/general-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { ethers } from "ethers";
import { BigNumberish } from "ethers/lib/ethers";
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

/**
 * Approves amount of token to be used for swapping
 * Is neccessary so uniswap can use that amount for swapping (uses fees)
 * @param token token which value should be approved
 * @param amount amount to be approved
 * @param signer signer to be use for signing
 * @param approvalContractAddress contract address for which the amount should be approved
 * @returns Promise<boolean> true if it succeeded
 */
export const gaslessApproveContract = async (
  token: ERC20Token,
  amount: BigNumberish,
  signer: MPCSigner,
  approvalContractAddress: string
): Promise<boolean> => {
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + signer.getChain());

  // Let api send ether to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      network: signer.getChain(),
      contractAddress: token[signer.getNetwork()].address,
      receiver: signer.getAddressObj().address,
    },
  });

  //approve token
  const approvalResponse = await new ethers.Contract(token[signer.getNetwork()].address, abi, signer).approve(
    approvalContractAddress,
    amount.toString()
  );
  await approvalResponse.wait();
  if (approvalResponse) return true;
  else return false;
};
