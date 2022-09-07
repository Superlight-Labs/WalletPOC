import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "ethereum/polygon/view/ethereum-polygon-styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";

type Props = NativeStackScreenProps<NavigationRoutes, "FiatManagementScreen">;

const FiatManagementScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Holaa</Text>
      <TouchableOpacity
        // style={styles.actionButton}
        onPress={() => navigation.navigate("FiatCardPaymentScreen", undefined)}
      >
        <Text style={styles.actionButtonText}>Card Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FiatManagementScreen;
