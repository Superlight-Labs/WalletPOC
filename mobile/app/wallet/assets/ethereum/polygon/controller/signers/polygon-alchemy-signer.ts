import { User } from "api-types/user";
import { alchemyProviderKey } from "ethereum/config/ethereum-config";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { ethers } from "ethers";
import { Address } from "wallet/types/wallet";

/**
 * Prepares mpc Signer with Alchemy Provider for polygon
 * @param address
 * @param user
 * @returns
 */
export const getPreparedPolygonMpcSigner = (address: Address, user: User): MPCSigner => {
  return new MPCSigner(address, user).connect(getPreparedPolygonProvider());
};

/**
 * Prepares Alchemy Provider without signer for polygon
 * @returns
 */
export const getPreparedPolygonProvider = (): ethers.providers.AlchemyProvider => {
  return new ethers.providers.AlchemyProvider(polygonConfig.chain, alchemyProviderKey);
};
