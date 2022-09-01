import { Provider } from "@ethersproject/abstract-provider";
import { abi as ERC20ABI } from "@uniswap/v2-core/build/ERC20.json";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { PolygonERC20Token } from "ethereum/polygon/config/tokens";
import { BigNumber, BigNumberish, ethers } from "ethers";

/**
 * Approves amount of token to be used for swapping
 * Is neccessary so uniswap can use that amount for swapping (uses fees)
 * @param token token which value should be approved
 * @param amount amount to be approved
 * @param signer signer to be use for signing
 * @param contractAddress contract address for which the amount should be approved
 * @returns Promise<boolean> true if it succeeded
 */
export const approvePolygonAmount = async (
  token: PolygonERC20Token,
  amount: BigNumberish,
  signer: MPCSigner,
  contractAddress: string
): Promise<boolean> => {
  const approvalResponse = await new ethers.Contract(token.polygonAddress, ERC20ABI, signer).approve(
    contractAddress,
    amount.toString()
  );
  await approvalResponse.wait();
  if (approvalResponse) return true;
  else return false;
};

/**
 * Checks how much value is approved for token on this address
 * @param token
 * @param address
 * @param provider
 * @param contractAddress contract address for which the amount should be approved
 * @returns
 */
export const checkPolygonAllowance = async (
  token: PolygonERC20Token,
  address: string,
  provider: Provider,
  contractAddress: string
): Promise<BigNumber> => {
  const allowanceResponce: BigNumber = await new ethers.Contract(token.polygonAddress, ERC20ABI, provider).allowance(
    address,
    contractAddress
  );
  return allowanceResponce;
};
