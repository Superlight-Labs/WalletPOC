import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { ethers } from "ethers";
import { MPCSigner } from "./signers/mpc-signer";

/**
 * returns token balance on eth/matic depending on the chain in signer
 * @param token
 * @param signer
 * @returns
 */
export const getTokenBalance = async (token: ERC20Token, signer: MPCSigner): Promise<string> => {
  const tokenContract = new ethers.Contract(token[signer.getNetwork()].address, usdcAbi, signer);
  const balance = await tokenContract.balanceOf(signer.getAddressObj().address);
  return balance.toString();
};

/**
 * returns eth or matic balance depending on the chain in signer
 * @param signer
 * @returns
 */
export const getNativeTokenBalance = async (signer: MPCSigner): Promise<string> => {
  const balance = await signer.getBalance();
  return balance.toString();
};
