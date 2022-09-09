import { abi } from "ethereum/config/abi/general-abi";
import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { MPCSigner } from "../signers/mpc-signer";

/**
 * Approves amount of token to be used for swapping
 * Is neccessary so uniswap can use that amount for swapping (uses fees)
 * @param token token which value should be approved
 * @param amount amount to be approved
 * @param signer signer to be use for signing
 * @param contractAddress contract address for which the amount should be approved
 * @returns Promise<boolean> true if it succeeded
 */
export const approveAmount = async (
  token: ERC20Token,
  amount: BigNumberish,
  signer: MPCSigner,
  contractAddress: string
): Promise<boolean> => {
  const approvalResponse = await new ethers.Contract(token[signer.getNetwork()].address, abi, signer).approve(
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
 * @param signer
 * @param contractAddress contract address for which the amount should be approved
 * @returns
 */
export const checkAllowance = async (
  token: ERC20Token,
  signer: MPCSigner,
  contractAddress: string
): Promise<BigNumber> => {
  const allowanceResponce: BigNumber = await new ethers.Contract(
    token[signer.getNetwork()].address,
    usdcAbi,
    signer
  ).allowance(signer.getAddressObj().address, contractAddress);
  return allowanceResponce;
};
