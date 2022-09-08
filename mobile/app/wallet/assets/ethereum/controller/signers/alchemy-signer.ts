import { User } from "api-types/user";
import { alchemyProviderKey, Config } from "ethereum/config/ethereum-config";
import { ethers } from "ethers";
import { Address } from "wallet/types/wallet";
import { MPCSigner } from "./mpc-signer";

/**
 * Prepares mpc Signer with Alchemy Provider
 * @param address
 * @param user
 * @param network Config of network which will be used (Polygon or Ethereum)
 * @returns
 */
export const getPreparedMpcSigner = (address: Address, user: User, network: Config): MPCSigner => {
  return new MPCSigner(address, user).connect(getPreparedProvider(network));
};

/**
 * Prepares Alchemy Provider without signer
 * @param network Config of network which will be used (Polygon or Ethereum)
 * @returns
 */
export const getPreparedProvider = (network: Config): ethers.providers.AlchemyProvider => {
  return new ethers.providers.AlchemyProvider(network.chain, alchemyProviderKey);
};
