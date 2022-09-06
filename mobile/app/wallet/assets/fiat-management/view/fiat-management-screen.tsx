import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
type Props = NativeStackScreenProps<NavigationRoutes, "FiatManagementScreen">;

const FiatManagementScreen = ({ route }: Props) => {
  const { address, user } = route.params;
  return <Text>Hi {address}</Text>;
};

export default FiatManagementScreen;
