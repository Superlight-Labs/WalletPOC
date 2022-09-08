import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { User } from "api-types/user";
import { config } from "ethereum/config/ethereum-config";
import { ERC20Token } from "ethereum/config/tokens";
import { BigNumber, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";
import { Address } from "wallet/types/wallet";
import { usdcAbi } from "../../config/abi/usdc-abi";
import { getPreparedMpcSigner, getPreparedProvider } from "../signers/alchemy-signer";

export const gaslessOneTimeApprove = async (address: Address, user: User, token: ERC20Token) => {
  const mpcSigner = getPreparedMpcSigner(address, user, config);

  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress");

  // Let api send ether to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      contractAddress: token.ethereum.address,
      receiver: address.address,
    },
  });

  //approve token for unlimited amount
  const approvalResponse = await new ethers.Contract(token.ethereum.address, usdcAbi, mpcSigner).approve(
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
 * @param address
 * @returns
 */
export const checkPaymastersAllowance = async (token: ERC20Token, address: string): Promise<BigNumber> => {
  const provider = getPreparedProvider(config);
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress");
  const allowanceResponce: BigNumber = await new ethers.Contract(token.ethereum.address, usdcAbi, provider).allowance(
    address,
    tankAddress.address
  );
  return allowanceResponce;
};
