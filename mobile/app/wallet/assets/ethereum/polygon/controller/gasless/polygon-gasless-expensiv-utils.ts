import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { User } from "api-types/user";
import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { getPreparedMpcSigner, getPreparedProvider } from "ethereum/controller/signers/alchemy-signer";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { BigNumber, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";
import { Address } from "wallet/types/wallet";

export const gaslessPolygonOneTimeApprove = async (address: Address, user: User, token: ERC20Token) => {
  const mpcSigner = getPreparedMpcSigner(address, user, polygonConfig);

  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);

  // Let api send matic to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      network: polygonConfig.chain,
      contractAddress: token.polygonContract.address,
      receiver: address.address,
    },
  });

  //approve token for unlimited amount
  const approvalResponse = await new ethers.Contract(token.polygonContract.address, usdcAbi, mpcSigner).approve(
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
export const checkPolygonPaymastersAllowance = async (token: ERC20Token, address: string): Promise<BigNumber> => {
  const provider = getPreparedProvider(polygonConfig);
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);
  const allowanceResponce: BigNumber = await new ethers.Contract(
    token.polygonContract.address,
    usdcAbi,
    provider
  ).allowance(address, tankAddress.address);
  return allowanceResponce;
};
