import { EthereumWallet } from "ethereum/types/Ethereum";
import React from "react";
import { Button, Text } from "react-native";

type EthereumBalanceProps = {
  wallet: EthereumWallet;
  updateBalance: () => Promise<void>;
};

export const EthereumBalance = ({ wallet, updateBalance }: EthereumBalanceProps) => {
  return (
    <>
      {wallet.balance && <Text>Balance: {wallet.ethBalance} Wei</Text>}
      <Button onPress={updateBalance} title="Fetch Balance" />
    </>
  );
};
