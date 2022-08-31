import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  checkPolygonPaymastersAllowance,
  gaslessPolygonOneTimeApprove,
} from "ethereum/polygon/controller/gasless/polygon-gasless-expensiv-utils";
import {
  gaslessPolygonTransfer,
  gaslessPolygonTransferWithAuthorization,
} from "ethereum/polygon/controller/gasless/polygon-gasless-utils";
import { styles as polygonStyles } from "ethereum/polygon/view/ethereum-polygon-styles";
import { BigNumber } from "ethers";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRecoilValue } from "recoil";
import { NavigationRoutes } from "shared/types/navigation";
import { authState, AuthState } from "state/atoms";
import { Address } from "wallet/types/wallet";

type Props = NativeStackScreenProps<NavigationRoutes, "PolygonTokenSendScreen">;

const PolygonTokenSendScreen = ({ route }: Props) => {
  const { childErc20, token, wallet } = route.params;

  const [toAddress, setToAddress] = useState<string>("0x49e749dc596ebb62b724262928d0657f8950a7d7");
  const [tokensToSend, setTokensToSend] = useState<string>("");

  const [address, setAddress] = useState<Address>(wallet.external.addresses[0]);
  const user = useRecoilValue<AuthState>(authState);

  // const broadcast = useCallback(
  //   async (amount: string, toAddress: string) => {
  //     try {
  //       const transfer = await childErc20.transfer(amount, toAddress);

  //       const receipt = await transfer.getReceipt();
  //       console.log("Transfer", receipt);
  //       Alert.alert("Successfully sent.");
  //     } catch (err) {
  //       console.log(err);
  //       Alert.alert("Unable to broadcast transaction");
  //     }
  //   },
  //   [childErc20]
  // );

  // const sendTransactionOld = useCallback(async () => {
  //   try {
  //     Alert.alert("Confirm your transaction", "Sending " + tokenToSend + " " + token.symbol + " to " + toAddress, [
  //       {
  //         text: "Send now",
  //         onPress: () => broadcast(tokenToSend, toAddress),
  //       },
  //       {
  //         text: "Cancel",
  //       },
  //     ]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [broadcast, tokenToSend, token, toAddress]);

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
      if (token.hasPermit) {
        const result = await gaslessPolygonTransferWithAuthorization(address, user, to, value, token);
      } else {
        const allowance: BigNumber = await checkPolygonPaymastersAllowance(token, address.address);
        //check if unlimited is not set yet
        if (allowance.eq(0)) {
          const approval = await gaslessPolygonOneTimeApprove(address, user, token);
          console.log("Unlimited amount approved: ", approval);
          const transfer = await gaslessPolygonTransfer(address, to, value, token);
          console.log("Sent transfer: ", transfer);
        } else {
          const transfer = await gaslessPolygonTransfer(address, to, value, token);
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
          onChangeText={(value) => setTokensToSend(value)}
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
  ...polygonStyles,
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
});

export default PolygonTokenSendScreen;
