import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { config } from "ethereum/config/ethereum-config";
import { ERC20Token } from "ethereum/config/tokens";
import { BigNumber, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";
import { usdcAbi } from "../../config/abi/usdc-abi";
import { getPreparedProvider } from "../signers/alchemy-signer";
import { MPCSigner } from "../signers/mpc-signer";

export const gaslessApproveUnlimited = async (signer: MPCSigner, token: ERC20Token) => {
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

  //approve token for unlimited amount
  const approvalResponse = await new ethers.Contract(token.ethereum.address, usdcAbi, signer).approve(
    tankAddress.address,
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );

  await approvalResponse.wait();
  if (approvalResponse) return true;
  else return false;
};

/**
 * Checks how much value is approved for paymaster
 * @param token
 * @param signer
 * @returns
 */
export const checkPaymastersAllowance = async (token: ERC20Token, signer: MPCSigner): Promise<BigNumber> => {
  const provider = getPreparedProvider(config);
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + signer.getChain());
  const allowanceResponce: BigNumber = await new ethers.Contract(
    token[signer.getNetwork()].address,
    usdcAbi,
    provider
  ).allowance(signer.getAddressObj().address, tankAddress.address);
  return allowanceResponce;
};
