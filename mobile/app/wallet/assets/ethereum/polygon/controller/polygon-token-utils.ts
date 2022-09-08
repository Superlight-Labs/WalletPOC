import { POSClient } from "@maticnetwork/maticjs";
import { ERC20 } from "@maticnetwork/maticjs/dist/ts/pos/erc20";
import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { ERC20Token, findContractAddressBySymbol } from "ethereum/config/tokens";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { ethers } from "ethers";
import { EthereumService } from "packages/blockchain-api-client/src";
import { EthereumProviderEnum } from "packages/blockchain-api-client/src/blockchains/ethereum/ethereum-factory";
import { Alert } from "react-native";

export const depositToken = async (
  polygonClient: POSClient,
  tokenAddress: string,
  userAddress: string,
  amount: number
) => {
  if (tokenAddress === findContractAddressBySymbol("ETH")?.ethereum.address) {
    const deposit = await polygonClient.depositEther(amount, userAddress, {});

    return deposit.getReceipt();
  }

  const parentErc20 = polygonClient.erc20(tokenAddress, true);

  const approve = await parentErc20.approve(amount);

  const approveTransaction = await approve.getTransactionHash();

  Alert.alert("Confirm your Deposit", "You are depositing " + amount + " of the minimal unit of the chosen currency", [
    {
      text: "Deposit",
      onPress: () => doErc20Deposit(parentErc20, amount, userAddress),
    },
    {
      text: "Cancel",
    },
  ]);
};

const doErc20Deposit = async (parentErc20: ERC20, amount: number, userAddress: string) => {
  const deposit = await parentErc20.deposit(amount, userAddress);

  const receipt = await deposit.getReceipt();

  console.log("Deposit: ", receipt);

  Alert.alert("Deposit successful");
};

export const getEthereumTokenBalance = async (token: ERC20Token, signer: MPCSigner): Promise<string> => {
  if (token.ethereum.address === findContractAddressBySymbol("ETH")?.ethereum.address)
    return getEthereumBalance(signer.getAddressObj().address);

  return getEthereumErc20Balance(signer, token);
};

const getEthereumBalance = async (address: string): Promise<string> => {
  const service = new EthereumService("TEST");

  const balance = await service.getBalance(address, EthereumProviderEnum.ALCHEMY);

  return balance.value.toString();
};

// const getErc20BalanceLegacy = async (polygonClient: POSClient, address: string, userAddress: string): Promise<string> => {
//   const parentErc20 = polygonClient.erc20(address, true);

//   const balance = await parentErc20.getBalance(userAddress);

//   return balance;
// };

export const getEthereumErc20Balance = async (signer: MPCSigner, token: ERC20Token): Promise<string> => {
  const tokenContract = new ethers.Contract(token.ethereum.address, usdcAbi, signer);
  const balance = await tokenContract.balanceOf(signer.getAddressObj());
  return balance.toString();
};

export const getPolygonErc20Balance = async (signer: MPCSigner, token: ERC20Token): Promise<string> => {
  const tokenContract = new ethers.Contract(token.polygon.address, usdcAbi, signer);
  const balance = await tokenContract.balanceOf(signer.getAddressObj().address);
  return balance.toString();
};
