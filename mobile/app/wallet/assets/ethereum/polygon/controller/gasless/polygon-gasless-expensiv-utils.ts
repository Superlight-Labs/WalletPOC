import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { User } from "api-types/user";
import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { getPreparedMpcSigner, getPreparedProvider } from "ethereum/controller/signers/alchemy-signer";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { PolygonERC20Token } from "ethereum/polygon/config/tokens";
import { BigNumber, ethers } from "ethers";
import { fetchFromApi, HttpMethod } from "lib/http";
import { Address } from "wallet/types/wallet";

export const gaslessPolygonOneTimeApprove = async (address: Address, user: User, token: PolygonERC20Token) => {
  const mpcSigner = getPreparedMpcSigner(address, user, polygonConfig);

  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);

  // Let api send matic to use in approval call
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/approve", {
    method: HttpMethod.POST,
    body: {
      network: polygonConfig.chain,
      contractAddress: token.polygonAddress,
      receiver: address.address,
    },
  });

  //approve token for unlimited amount
  const approvalResponse = await new ethers.Contract(token.polygonAddress, usdcAbi, mpcSigner).approve(
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
export const checkPolygonPaymastersAllowance = async (
  token: PolygonERC20Token,
  address: string
): Promise<BigNumber> => {
  const provider = getPreparedProvider(polygonConfig);
  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + polygonConfig.chain);
  const allowanceResponce: BigNumber = await new ethers.Contract(token.polygonAddress, usdcAbi, provider).allowance(
    address,
    tankAddress.address
  );
  return allowanceResponce;
};
