import { ERC20Token } from "ethereum/config/tokens";
import { BigNumber } from "ethers";
import { EthereumBalance, EthereumTokenBalance } from "packages/blockchain-api-client/src/blockchains/ethereum/types";

export const weiToEth = (wei: number): number => wei / 1000000000000000000;

export const weiToGwei = (wei: number): number => wei / 1000000000;

export const ethToGwei = (eth: number): number => eth * 1000000000;

export const gWeiToWei = (gWei: number): number => gWei * 1000000000;

export const gWeiToEth = (gWei: number): number => gWei / 1000000000;

export const weiToEthBigNum = (gWei: string | number): BigNumber => BigNumber.from(gWei).div("1000000000000000000");

export const gWeiToEthBigNum = (gWei: string): BigNumber => BigNumber.from(gWei).div("1000000000");

export const gWeiToWeiBigNum = (gWei: string): BigNumber => BigNumber.from(gWei).mul("1000000000");

export const ethToWei = (eth: number): BigNumber => BigNumber.from(eth).mul("1000000000000000000");

export const getBalanceFromEthereumTokenBalance = (
  ethereumBalance: EthereumTokenBalance,
  token: ERC20Token
): EthereumBalance => {
  return { value: Number.parseInt(ethereumBalance.tokenBalance, 16) / 10 ** token.decimals };
};
