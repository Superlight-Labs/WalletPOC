import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ERC20Token } from "ethereum/config/tokens";
import {
  gaslessTransfer,
  gaslessTransferWithAuthorization,
} from "ethereum/controller/gasless/transfer/gasless-transfer";
import {
  checkPaymastersAllowance,
  gaslessApproveUnlimited,
} from "ethereum/controller/gasless/transfer/pseudo-gasless-approve";
import useEthereumSigner from "ethereum/hooks/useEthereumSigner";
import { EthereumWallet } from "ethereum/types/ethereum";
import { BigNumber } from "ethers";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRecoilValue } from "recoil";
import { NavigationRoutes } from "shared/types/navigation";
import { authState, AuthState } from "state/atoms";
import { Address } from "wallet/types/wallet";

type Props = NativeStackScreenProps<NavigationRoutes, "TokenSendScreen">;

const TokenSendScreen = ({ route }: Props) => {
  const [token, setToken] = useState<ERC20Token>(route.params.token);
  const [wallet, setWallet] = useState<EthereumWallet>(route.params.wallet);
  const [address, setAddress] = useState<Address>(route.params.wallet.external.addresses[0]);
  const user = useRecoilValue<AuthState>(authState);
  const signer = useEthereumSigner();
  console.log(signer);
  const [toAddress, setToAddress] = useState<string>("0x49e749dc596ebb62b724262928d0657f8950a7d7");
  const [tokensToSend, setTokenToSend] = useState<string>("");

  const handleTokenToSend = (value: string) => {
    let lengthDecimals = 0;
    if (value.includes(".")) lengthDecimals = value.length - value.indexOf(".") - 1;
    if (lengthDecimals <= token.decimals) setTokenToSend(value);
  };

  const sendTransactionValidation = useCallback(async () => {
    Alert.alert("Confirm your transaction", "Sending " + tokensToSend + " " + token.symbol + " to " + toAddress, [
      {
        text: "Send now",
        onPress: () => sendTransaction(toAddress, tokensToSend),
      },
      {
        text: "Cancel",
      },
    ]);
  }, [wallet, user, tokensToSend, toAddress]);

  const sendTransaction = useCallback(async (to: string, value: string) => {
    try {
      if (token.ethereum.hasPermit) {
        console.log("diese");
        const result = await gaslessTransferWithAuthorization(signer, to, value, token);
      } else {
        const allowance: BigNumber = await checkPaymastersAllowance(token, signer);
        //check if unlimited is not set yet
        if (allowance.eq(0)) {
          const approval = await gaslessApproveUnlimited(signer, token);
          console.log("Unlimited amount approved: ", approval);
          const transfer = await gaslessTransfer(signer, to, value, token);
          console.log("Sent transfer: ", transfer);
        } else {
          const transfer = await gaslessTransfer(signer, to, value, token);
          console.log("Sent transfer: ", transfer);
        }
      }

      Alert.alert("Successfully sent.");
    } catch (err) {
      console.log(err);
      Alert.alert("Unable to broadcast transaction");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Send {token.name}</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Receiver Address"
          onChangeText={setToAddress}
          value={toAddress}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder={"0 " + token.symbol}
          onChangeText={(value) => handleTokenToSend(value)}
          value={tokensToSend?.toString()}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.actionButton} onPress={sendTransactionValidation}>
        <Text style={styles.actionButtonText}>Send</Text>
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
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
  actionButton: {
    height: 42,
    width: "100%",
    backgroundColor: "#3828e0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TokenSendScreen;
