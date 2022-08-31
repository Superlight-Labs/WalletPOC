import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EthereumWallet } from "ethereum/types/Ethereum";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import { PolygonBalanceView } from "./balance/polygon-balance-view";

type PolygonWalletProps = {
  wallet: EthereumWallet;
  navigation: NativeStackNavigationProp<NavigationRoutes, "PolygonScreen", undefined>;
};

const PolygonWalletView = ({ wallet, navigation }: PolygonWalletProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingArea}>
        <Image
          style={styles.icon}
          source={{ uri: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png" }}
        />
        <Text style={styles.heading}>Matic Wallet</Text>
      </View>

      <PolygonBalanceView address={wallet.external.addresses[0]} />

      {/* <View style={styles.actionArea}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("EthereumReceiveScreen", { account: wallet })}
        >
          <Text style={styles.actionButtonText}>Receive</Text>
        </TouchableOpacity>
        <View style={styles.actionAreaSpace} />
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("EthereumSendScreen", { signer, service })}
        >
          <Text style={styles.actionButtonText}>Send</Text>
        </TouchableOpacity>
      </View> */}
      {/* 
      <EthereumTransactionsView
        wallet={wallet}
        address={wallet.external.addresses[0]}
        navigation={navigation}
        updateTransactions={updateTransactions}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: 32,
  },
  headingArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: { width: 20, height: 20, marginRight: 6 },
  actionArea: { flex: 1, flexDirection: "row", justifyContent: "space-evenly", marginTop: 22, marginBottom: 22 },
  actionAreaSpace: {
    width: 18,
  },
  actionButton: {
    flex: 1,
    height: 42,
    backgroundColor: "#3828e0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default PolygonWalletView;
