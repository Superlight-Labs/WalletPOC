import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { NavigationRoutes } from "shared/types/navigation";
import { authState } from "state/atoms";
import { fiatStateAtom, initialFiatState } from "../state/fiat-management-atoms";
import FiatAddCardForm from "./fiat-add-card-form";
import { styles } from "./fiat-styles";

type Props = NativeStackScreenProps<NavigationRoutes, "FiatManagementScreen">;

const FiatManagementScreen = ({ navigation }: Props) => {
  const [fiatState, setFiatState] = useRecoilState(fiatStateAtom);
  const user = useRecoilValue(authState);

  return (
    <View>
      {fiatState.cardId === "" ? (
        <FiatAddCardForm user={user} setCard={setFiatState} />
      ) : (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("FiatCardPaymentScreen", undefined)}
        >
          <Text style={styles.actionButtonText}>Buy Crypto with your Card</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.dangerButton} onPress={() => setFiatState(initialFiatState)}>
        <Text style={styles.dangerButtonText}>Reset Fiat State</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FiatManagementScreen;
