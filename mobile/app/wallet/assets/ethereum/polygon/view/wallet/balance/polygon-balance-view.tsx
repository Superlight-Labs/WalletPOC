import { findContractAddressBySymbol } from "ethereum/config/tokens";
import { getTokenBalance } from "ethereum/controller/ethereum-balance";
import usePolygonSigner from "ethereum/hooks/usePolygonSigner";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Address } from "wallet/types/wallet";

type PolygonBalanceProps = {
  address: Address;
};

export const PolygonBalanceView = ({ address }: PolygonBalanceProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>("0");
  const signer = usePolygonSigner();

  useEffect(() => {
    updateBalanceFunction();
  }, []);

  const updateBalanceFunction = async () => {
    setLoading(true);
    const balance = await getTokenBalance(findContractAddressBySymbol("WMATIC")!, signer);
    setBalance(balance);
    setLoading(false);
  };

  return (
    <View style={styles.balanceContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.balanceText}>
          {ethers.utils.formatUnits(balance, findContractAddressBySymbol("WMATIC")!.decimals)} Matic
        </Text>
        {loading && <ActivityIndicator />}
      </View>
      <TouchableOpacity onPress={updateBalanceFunction}>
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
