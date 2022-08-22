import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import { getDefaultProvider, Wallet } from "zksync";

type Props = NativeStackScreenProps<NavigationRoutes, "EthereumZkSyncScreen">;

const EthereumZkSyncScreen = ({ route }: Props) => {
  const [zkWallet, setZkWallet] = useState<Wallet>();
  const signer = route.params.signer;

  const setupZkSync = useCallback(async () => {
    if (!signer) return;

    const provider = await getDefaultProvider("goerli");
    const wallet = await Wallet.fromEthSigner(signer, provider);

    setZkWallet(wallet);
  }, [setZkWallet, signer]);

  useEffect(() => {
    setupZkSync();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ZK-Sync</Text>
      <View style={styles.pickerArea}>
        <Text style={styles.pickerHeading}>From</Text>

        <Text style={styles.availableValueText}>Available: </Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Swap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    margin: 12,
    paddingBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerArea: {
    justifyContent: "flex-start",
  },
  pickerHeading: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  tokenPicker: {
    borderRadius: 12,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 12,
  },
  tokenPickerItem: {
    height: 120,
  },
  arrowDown: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
  actionButtonDisabled: {
    opacity: 0.5,
    height: 42,
    width: "100%",
    backgroundColor: "#1a1e3c",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  actionButton: {
    height: 42,
    width: "100%",
    backgroundColor: "#1a1e3c",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
  },
  availableValueText: {
    textAlign: "right",
    marginTop: 4,
  },
  routeErrorText: {
    color: "red",
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
  feesText: {
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
});

export default EthereumZkSyncScreen;
