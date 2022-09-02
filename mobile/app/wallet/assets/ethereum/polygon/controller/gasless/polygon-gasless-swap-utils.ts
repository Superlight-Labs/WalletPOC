import { abi as ERC20ABI } from "@uniswap/v2-core/build/ERC20.json";
import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { User } from "api-types/user";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { PolygonERC20Token } from "ethereum/polygon/config/tokens";
import { BigNumberish, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";
import { Address } from "wallet/types/wallet";
import { getPreparedPolygonMpcSigner } from "../signers/polygon-alchemy-signer";

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
  token: PolygonERC20Token,
  amount: BigNumberish,
  address: Address,
  user: User,
  contractAddress: string
): Promise<boolean> => {
  const mpcSigner = getPreparedPolygonMpcSigner(address, user);

  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);

  // Let api send ether to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      network: polygonConfig.chain,
      contractAddress: token.polygonAddress,
      receiver: address.address,
    },
  });

  console.log("try approval for: ");
  console.log(token);
  console.log(amount);
  console.log(contractAddress);

  //approve token
  const approvalResponse = await new ethers.Contract(token.polygonAddress, ERC20ABI, mpcSigner).approve(
    contractAddress,
    amount.toString()
  );
  await approvalResponse.wait();
  if (approvalResponse) return true;
  else return false;
};
