import { abi as ERC20ABI } from "@uniswap/v2-core/build/ERC20.json";
import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { ERC20Token } from "ethereum/config/tokens";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { BigNumberish, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";

/**
 * Approves amount of token to be used for swapping
 * Is neccessary so uniswap can use that amount for swapping (uses fees)
 * @param token token which value should be approved
 * @param amount amount to be approved
 * @param signer signer to be use for signing
 * @param contractAddress contract address for which the amount should be approved
 * @returns Promise<boolean> true if it succeeded
 */
export const approveGaslessPolygonAmount = async (
  token: ERC20Token,
  amount: BigNumberish,
  signer: MPCSigner,
  contractAddress: string
): Promise<boolean> => {
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);

  // Let api send ether to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      network: polygonConfig.chain,
      contractAddress: token.polygon.address,
      receiver: signer.getAddressObj().address,
    },
  });

  console.log("try approval for: ");
  console.log(token);
  console.log(amount);
  console.log(contractAddress);

  //approve token
  const approvalResponse = await new ethers.Contract(token.polygon.address, ERC20ABI, signer).approve(
    contractAddress,
    amount.toString()
  );
  await approvalResponse.wait();
  if (approvalResponse) return true;
  else return false;
};
