import { ERC20Token } from "ethereum/config/token-constants";
import { ethers } from "ethers";
import { EthereumService } from "packages/blockchain-api-client/src";
import { EthereumProviderEnum } from "packages/blockchain-api-client/src/blockchains/ethereum/ethereum-factory";
import {
  EthereumTokenBalance,
  EthereumTokenBalances,
} from "packages/blockchain-api-client/src/blockchains/ethereum/types";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Address } from "wallet/types/wallet";

type TokenBalanceProps = {
  address: Address;
  token: ERC20Token;
};

export const TokenBalanceView = ({ address, token }: TokenBalanceProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenBalance, setTokenBalance] = useState<EthereumTokenBalance>();

  useEffect(() => {
    updateBalance();
  }, []);

  const [service] = useState(new EthereumService("TEST"));
  const updateBalance = () => {
    const loadBalance = async () => {
      setLoading(true);
      let tokenAddr: string[] = [];
      tokenAddr.push(token.contractAddress);
      const tokenBalances: EthereumTokenBalances = await service.getTokenBalances(
        address.address,
        tokenAddr,
        EthereumProviderEnum.ALCHEMY
      );
      setTokenBalance(tokenBalances.tokenBalances[0]);
      setLoading(false);
    };
    loadBalance();
  };

  return (
    <View style={styles.balanceContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.balanceText}>
          {tokenBalance?.tokenBalance ? ethers.utils.formatUnits(tokenBalance.tokenBalance, token.decimals) : "0"}{" "}
          {token.symbol}
        </Text>
        {loading && <ActivityIndicator />}
      </View>
      <TouchableOpacity onPress={updateBalance}>
        <Image
          style={styles.reloadIcon}
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/reload-retry-again-update-restart-refresh-sync-13-3149.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "normal",
    marginRight: 8,
  },
  reloadIcon: {
    width: 20,
    height: 20,
  },
});
