import { POSClient } from "@maticnetwork/maticjs";
import { PlasmaClient } from "@maticnetwork/maticjs-plasma";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { erc20Tokens } from "ethereum/config/tokens";
import { EthereumWallet } from "ethereum/types/ethereum";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import { Address } from "wallet/types/wallet";
import { styles } from "../ethereum-polygon-styles";

type Props = NativeStackScreenProps<NavigationRoutes, "TokenWalletScreen">;

type PolygonTokenWalletListViewProps = {
  posClient: POSClient;
  plasmaClient: PlasmaClient;
  address: Address;
  wallet: EthereumWallet;
  navigation: NativeStackNavigationProp<NavigationRoutes, "PolygonScreen", undefined>;
};

const PolygonTokenWalletListView = ({
  posClient,
  plasmaClient,
  address,
  navigation,
  wallet,
}: PolygonTokenWalletListViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.heading}>Token Wallets</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate("PolygonBridgeScreen", { address, posClient, plasmaClient })}
        >
          <Text style={styles.headerButtonText}>Polygon Bridge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate("PolygonTokenSwapScreen", { wallet })}
        >
          <Text style={styles.headerButtonText}>Swap Tokens</Text>
        </TouchableOpacity>
      </View>

      {erc20Tokens.map((token) => {
        return (
          token.polygon.isToken != false && (
            <TouchableOpacity
              style={styles.actionButton}
              key={token.polygon.address}
              onPress={() =>
                navigation.navigate("PolygonTokenWalletScreen", { wallet, token, polygonClient: posClient, address })
              }
            >
              <Text style={styles.actionButtonText}>
                {token.name} Wallet {"\u2192"}
              </Text>
            </TouchableOpacity>
          )
        );
      })}
    </View>
  );
};

export default PolygonTokenWalletListView;
