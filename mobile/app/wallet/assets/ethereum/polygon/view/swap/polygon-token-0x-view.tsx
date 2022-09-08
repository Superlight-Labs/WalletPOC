import { Picker } from "@react-native-picker/picker";
import { ERC20Token, erc20Tokens } from "ethereum/config/tokens";
import { gaslessSwapWithQuote } from "ethereum/controller/gasless/swap/gasless-0x";
import { swapWithQuote } from "ethereum/controller/swap/0x-utils";
import usePolygonSigner from "ethereum/hooks/usePolygonSigner";
import { approveGaslessPolygonAmount } from "ethereum/polygon/controller/gasless/polygon-gasless-swap-utils";
import { getPolygonErc20Balance } from "ethereum/polygon/controller/polygon-token-utils";
import { getPolygonSwapQuote } from "ethereum/polygon/controller/swap/polygon-0x-utils";
import { checkPolygonAllowance } from "ethereum/polygon/controller/swap/polygon-swap-utils";
import { EthereumWallet } from "ethereum/types/ethereum";
import { ethers } from "ethers";
import { EthereumService } from "packages/blockchain-api-client/src";
import { ZeroExSwapQuote } from "packages/blockchain-api-client/src/provider/0x/ethereum/0x-ethereum-types";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Modal, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRecoilValue } from "recoil";
import { authState, AuthState } from "state/atoms";
import { Address } from "wallet/types/wallet";

import { styles } from "./polygon-token-swap-style";

type Props = {
  wallet: EthereumWallet;
  address: Address;
};

const PolygonToken0xView = ({ wallet, address }: Props) => {
  const user = useRecoilValue<AuthState>(authState);

  const [selectedInputTokenIndex, setSelectedInputTokenIndex] = useState<number>(0);
  const [selectedOutputTokenIndex, setSelectedOutputTokenIndex] = useState<number>(0);

  const [gaslessEnabled, setGaslessEnabled] = useState<boolean>(true);

  const signer = usePolygonSigner();
  useEffect(() => {
    updateBalance(erc20Tokens[0]);
  }, []);

  type refreshProps = {
    inputIndex: number;
    inputValue: string;
    outputIndex: number;
  };
  const refreshQuoteTimer = (props: refreshProps) => {
    clearTimeout(timerRef.current);
    setLoadingQuote(false);
    setQuoteErr(false);
    setQuote(undefined);
    if (inputValue) {
      setLoadingQuote(true);
      timerRef.current = setTimeout(
        () =>
          updateQuote(
            erc20Tokens[props.inputIndex],
            erc20Tokens.filter((token) => token != erc20Tokens[props.inputIndex])[props.outputIndex],
            props.inputValue
          ),
        2000
      );
    }
  };

  const updateSelectedInputToken = (index: number) => {
    setSelectedInputTokenIndex(index);
    updateBalance(erc20Tokens[index]);
    refreshQuoteTimer({ inputIndex: index, inputValue: inputValue!, outputIndex: selectedOutputTokenIndex });
  };

  const [inputValue, setInputValue] = useState<string>();
  const timerRef = useRef<any>();
  const updateInputValue = (inputValue: string) => {
    setInputValue(inputValue);
    refreshQuoteTimer({
      inputIndex: selectedInputTokenIndex,
      inputValue: inputValue,
      outputIndex: selectedOutputTokenIndex,
    });
  };

  const updateSelectedOutputToken = (index: number) => {
    setSelectedOutputTokenIndex(index);
    refreshQuoteTimer({ inputIndex: selectedInputTokenIndex, inputValue: inputValue!, outputIndex: index });
  };

  const [availableBalance, setAvailableBalance] = useState<string>();
  const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
  const [service] = useState(new EthereumService("TEST"));
  const updateBalance = async (token: ERC20Token) => {
    setLoadingBalance(true);

    let tokenAddr: string[] = [];
    tokenAddr.push(token.polygon.address);
    const tokenBalance: string = await getPolygonErc20Balance(signer, token);
    setAvailableBalance(ethers.utils.formatUnits(tokenBalance, token.decimals));

    setLoadingBalance(false);
  };

  const [loadingQuote, setLoadingQuote] = useState<boolean>(false);
  const [quote, setQuote] = useState<ZeroExSwapQuote>();
  const [quoteErr, setQuoteErr] = useState<boolean>();
  const updateQuote = async (inputToken: ERC20Token, outputToken: ERC20Token, inputAmount: string) => {
    const inputAmountWei = ethers.utils.parseUnits(inputAmount, inputToken.decimals);
    try {
      const quote = await getPolygonSwapQuote(inputToken, outputToken, address.address, inputAmountWei.toString());
      console.log(quote);
      if (!quote) console.log("Not enough liquidity");
      else setQuote(quote);
    } catch (err) {
      console.log(err);
      setQuoteErr(true);
    }
    setLoadingQuote(false);
  };

  const swapAlert = () => {
    if (!inputValue || !quote) return;
    Alert.alert(
      "Confirm your swap",
      "You should get " +
        ethers.utils.formatUnits(
          quote.buyAmount,
          erc20Tokens.filter((token) => token != erc20Tokens[selectedInputTokenIndex])[selectedOutputTokenIndex]
            .decimals
        ) +
        " " +
        erc20Tokens.filter((token) => token != erc20Tokens[selectedInputTokenIndex])[selectedOutputTokenIndex].symbol +
        " for " +
        inputValue +
        " " +
        erc20Tokens[selectedInputTokenIndex].symbol +
        " with fee " +
        quote.estimatedGas.toString() +
        " WEI",
      [
        {
          text: "Swap now",
          onPress: () => swapTokens(),
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  const swapTokens = async () => {
    if (!inputValue || !quote) return;

    const inputAmountWei = ethers.utils.parseUnits(inputValue, erc20Tokens[selectedInputTokenIndex].decimals);

    //check if uniswap has allowance for enough value - else approve new amount
    if (erc20Tokens[selectedInputTokenIndex].polygon.isToken) {
      const allowedAmount = await checkPolygonAllowance(
        erc20Tokens[selectedInputTokenIndex],
        address.address,
        signer!.provider!,
        quote.allowanceTarget
      );
      if (!allowedAmount.gte(inputAmountWei)) {
        setApprovalModalVisible(true);
        try {
          if (
            !(await approveGaslessPolygonAmount(
              erc20Tokens[selectedInputTokenIndex],
              inputAmountWei.sub(allowedAmount),
              signer,
              quote.allowanceTarget
            ))
          )
            console.error("Could not approve new amount for swapping");
        } catch (err) {
          console.error(err);
          setApprovalModalVisible(false);
        }
        setApprovalModalVisible(false);
      }
    }

    try {
      const swapped = gaslessEnabled ? await gaslessSwapWithQuote(quote, signer) : swapWithQuote(quote, signer);
      console.log(swapped);
      Alert.alert(
        "Successfully swapped!",
        "You should get " +
          ethers.utils.formatUnits(
            quote.buyAmount,
            erc20Tokens.filter((token) => token != erc20Tokens[selectedInputTokenIndex])[selectedOutputTokenIndex]
              .decimals
          ) +
          " " +
          erc20Tokens[selectedOutputTokenIndex].symbol
      );
    } catch (err) {
      console.log(err);
      Alert.alert("Unable to swap", "Maybe the route was outdated.");
    }
  };

  const [approvalModalVisible, setApprovalModalVisible] = useState(false);
  const renderApprovalModal = () => {
    return (
      <Modal
        visible={approvalModalVisible}
        style={{ margin: 40, alignItems: "center", justifyContent: "center" }}
        transparent={true}
      >
        <View style={styles.approvalModalParent}>
          <View style={styles.approvalModalChild}>
            <Text style={styles.heading}>Waiting for approval</Text>
            <ActivityIndicator />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {renderApprovalModal()}
      <Text style={styles.heading}>Swap Polygon with 0x</Text>
      <View style={styles.pickerArea}>
        <Text style={styles.pickerHeading}>From</Text>
        <Picker
          style={styles.tokenPicker}
          itemStyle={styles.tokenPickerItem}
          selectedValue={selectedInputTokenIndex}
          onValueChange={(itemValue) => updateSelectedInputToken(itemValue)}
        >
          {erc20Tokens.map((token, index) => {
            return (
              token.polygon.address != "0x0" &&
              token.ethereum.address != "ETH" && <Picker.Item key={token.name} label={token.name} value={index} />
            );
          })}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder={"0 " + erc20Tokens[selectedInputTokenIndex]?.symbol}
          onChangeText={(value) => updateInputValue(value)}
          value={inputValue}
        ></TextInput>
        <Text style={styles.availableValueText}>
          Available:{" "}
          {availableBalance && !loadingBalance && availableBalance + " " + erc20Tokens[selectedInputTokenIndex].symbol}
          {loadingBalance && <ActivityIndicator />}
        </Text>
      </View>
      {loadingQuote ? <ActivityIndicator /> : <Text style={styles.arrowDown}>{"\u2193"}</Text>}
      <View style={styles.pickerArea}>
        <Text style={styles.pickerHeading}>To</Text>
        <Picker
          style={styles.tokenPicker}
          itemStyle={styles.tokenPickerItem}
          selectedValue={selectedOutputTokenIndex}
          onValueChange={(itemValue) => updateSelectedOutputToken(itemValue)}
        >
          {erc20Tokens
            .filter((token) => token != erc20Tokens[selectedInputTokenIndex])
            .map((token, index) => {
              return (
                token.polygon.address != "0x0" &&
                token.ethereum.address != "ETH" && <Picker.Item key={token.name} label={token.name} value={index} />
              );
            })}
        </Picker>
        <TextInput
          editable={false}
          style={styles.input}
          value={
            (quote
              ? ethers.utils.formatUnits(
                  quote.buyAmount,
                  erc20Tokens.filter((token) => token != erc20Tokens[selectedInputTokenIndex])[selectedOutputTokenIndex]
                    .decimals
                )
              : "?") +
            " " +
            erc20Tokens.filter((token) => token != erc20Tokens[selectedInputTokenIndex])[selectedOutputTokenIndex]
              ?.symbol
          }
        ></TextInput>
        {quoteErr && <Text style={styles.routeErrorText}>No route for this pair</Text>}
        {quote && <Text style={styles.feesText}>{"Fees: " + quote.estimatedGas.toString() + " WEI"}</Text>}
      </View>
      <TouchableOpacity
        style={!inputValue || !quote || quoteErr ? styles.actionButtonDisabled : styles.actionButton}
        disabled={!inputValue || !quote || quoteErr}
        onPress={() => swapAlert()}
      >
        <Text style={styles.actionButtonText}>Swap</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", marginTop: 12 }}>
        <Text style={{ fontSize: 17, marginRight: 12 }}>Gasless</Text>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          thumbColor={gaslessEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setGaslessEnabled(!gaslessEnabled)}
          value={gaslessEnabled}
        />
      </View>
    </View>
  );
};

export default PolygonToken0xView;
