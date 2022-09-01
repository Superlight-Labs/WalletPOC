import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import PolygonToken0xView from "./polygon-token-0x-view";

import { styles } from "./polygon-token-swap-style";

type Props = NativeStackScreenProps<NavigationRoutes, "PolygonTokenSwapScreen">;

const PolygonTokenSwapScreen = ({ route }: Props) => {
  const [switchValue, setSwitchValue] = useState<string>("0x");
  return (
    <View style={styles.outerContainer}>
      <View style={styles.switchArea}>
        <View style={styles.switchPadding} />
        <TouchableOpacity
          style={switchValue == "0x" ? styles.switchButton : styles.switchButtonInactive}
          onPress={() => setSwitchValue("0x")}
        >
          <Text>0x</Text>
        </TouchableOpacity>
      </View>

      <View>
        {switchValue == "0x" && (
          <PolygonToken0xView wallet={route.params.wallet} address={route.params.wallet.external.addresses[0]} />
        )}
      </View>
    </View>
  );
};

export default PolygonTokenSwapScreen;
