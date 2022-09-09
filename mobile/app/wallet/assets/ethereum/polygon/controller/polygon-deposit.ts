import { POSClient } from "@maticnetwork/maticjs";
import { ERC20 } from "@maticnetwork/maticjs/dist/ts/pos/erc20";
import { findContractAddressBySymbol } from "ethereum/config/tokens";
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
