import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "ethereum/polygon/view/ethereum-polygon-styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { NavigationRoutes } from "shared/types/navigation";
import { fiatStateAtom } from "../state/fiat-management-atoms";
import FiatAddCardForm from "./fiat-add-card-form";

type Props = NativeStackScreenProps<NavigationRoutes, "FiatManagementScreen">;

const FiatManagementScreen = ({ navigation }: Props) => {
  const [fiatState, setFiatState] = useRecoilState(fiatStateAtom);

  return (
    <View>
      <TouchableOpacity
        // style={styles.actionButton}
        onPress={() => navigation.navigate("FiatCardPaymentScreen", undefined)}
      >
        <Text style={styles.actionButtonText}>Card Payment</Text>
      </TouchableOpacity>
      {fiatState.cardId === "" && <FiatAddCardForm />}
    </View>
  );
};

export default FiatManagementScreen;
