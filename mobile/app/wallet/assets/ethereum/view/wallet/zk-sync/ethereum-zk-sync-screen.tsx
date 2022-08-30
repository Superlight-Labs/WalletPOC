import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { config } from "ethereum/config/ethereum-config";
import { gWeiToEth } from "ethereum/controller/ethereum-utils";
import { BigNumber, ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import { getDefaultProvider, Wallet } from "zksync";
import { Network } from "zksync/build/types";

type Props = NativeStackScreenProps<NavigationRoutes, "EthereumZkSyncScreen">;

const EthereumZkSyncScreen = ({ route }: Props) => {
  const [zkWallet, setZkWallet] = useState<Wallet>();
  const [zkBalance, setZkBalance] = useState<BigNumber>();
  const [depositVal, setDepositVal] = useState("");
  const signer = route.params.signer;

  const createZkWallet = useCallback(async () => {
    if (!signer) throw new Error("Signer is undefined, cannot access ZK-Wallet View without Signer");
    console.log("creating zk");
    const provider = await getDefaultProvider(config.chain as Network);
    const wallet = await Wallet.fromEthSigner(signer, provider);
    setZkWallet(wallet);
    console.log("Set zkwallet", wallet);
  }, [setZkWallet, signer]);

  const unlockZkAccount = useCallback(async () => {
    if (zkWallet && !(await zkWallet.isSigningKeySet())) {
      if ((await zkWallet.getAccountId()) == undefined) {
        throw new Error("Unknown account");
      }

      const changePubkey = await zkWallet.setSigningKey({
        feeToken: "ETH",
        ethAuthType: "ECDSA",
      });

      await changePubkey.awaitReceipt();
    }
  }, [zkWallet]);

  const setBalance = useCallback(async () => {
    if (!zkWallet) throw new Error("ZkWallet is undefined, balance refresh is not possible");

    const verifiedETHBalance = await zkWallet.getBalance("ETH", "verified");

    setZkBalance(verifiedETHBalance);
  }, [setZkBalance, zkWallet]);

  const setupZkSync = useCallback(async () => {
    await createZkWallet();
    // await unlockZkAccount();
    // setBalance();
  }, [zkWallet]);

  useEffect(() => {
    setupZkSync();
  }, []);

  const deposit = useCallback(async () => {
    if (!zkWallet) throw new Error("ZkWallet is undefined, deposit not possible");

    const gweis = Number.parseInt(depositVal);
    const eth = gWeiToEth(gweis);

    const deposit = await zkWallet.depositToSyncFromEthereum({
      depositTo: zkWallet.address(),
      token: "ETH",
      amount: ethers.utils.parseEther(eth.toString()),
    });

    console.log("Depost result", deposit);
  }, [zkWallet]);

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.pickerHeading}>Current Ethereum Balance manged with ZK-Sync</Text>
        <Text style={styles.availableValueText}>{zkBalance?.toString()}</Text>
      </View>

      <View style={styles.area}>
        <Text>Wallet is defined: {!!zkWallet + ""}</Text>
      </View>

      <View style={styles.area}>
        <Text>Transfer Eth to zkSync</Text>
        <TextInput onChangeText={setDepositVal} value={depositVal} placeholder="Amount to deposit (gWei)" />
        <TouchableOpacity style={styles.actionButton} onPress={deposit}>
          <Text style={styles.actionButtonText}>Deposit!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={setBalance}>
          <Text style={styles.actionButtonText}>Refresh ZkBalance</Text>
        </TouchableOpacity>
      </View>
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
  area: {
    // marginBottom: 100,
  },
  pickerHeading: {
    marginTop: 20,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  actionButton: {
    height: 42,
    width: "100%",
    backgroundColor: "#1a1e3c",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
  },
  availableValueText: {
    textAlign: "right",
    marginTop: 4,
  },
});

export default EthereumZkSyncScreen;
