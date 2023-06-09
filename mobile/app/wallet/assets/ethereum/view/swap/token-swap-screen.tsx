import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import Token0xView from "./token-0x-view";
import TokenUniswapView from "./token-uniswap-view";

import { styles } from "./token-swap-style";

type Props = NativeStackScreenProps<NavigationRoutes, "TokenSwapScreen">;

const TokenSwapScreen = ({ route }: Props) => {
  const [switchValue, setSwitchValue] = useState<string>("uniswap");
  return (
    <View>
      <View style={styles.switchArea}>
        <TouchableOpacity
          style={switchValue == "uniswap" ? styles.switchButton : styles.switchButtonInactive}
          onPress={() => setSwitchValue("uniswap")}
        >
          <Text>Uniswap</Text>
        </TouchableOpacity>
        <View style={styles.switchPadding} />
        <TouchableOpacity
          style={switchValue == "0x" ? styles.switchButton : styles.switchButtonInactive}
          onPress={() => setSwitchValue("0x")}
        >
          <Text>0x</Text>
        </TouchableOpacity>
      </View>

      <View>
        {switchValue == "uniswap" && (
          <TokenUniswapView wallet={route.params.wallet} address={route.params.wallet.external.addresses[0]} />
        )}
        {switchValue == "0x" && (
          <Token0xView wallet={route.params.wallet} address={route.params.wallet.external.addresses[0]} />
        )}
      </View>
    </View>
  );
};

export default TokenSwapScreen;
