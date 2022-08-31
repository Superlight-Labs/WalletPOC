import React from "react";
import { ScrollView, Text, ViewStyle } from "react-native";

interface WalletProps {
  children: React.ReactNode;
  name: string;
  style?: ViewStyle;
}

const Wallets = ({ children, name, style }: WalletProps) => {
  return (
    <ScrollView
      scrollEnabled={true}
      style={[
        style,
        {
          padding: 12,
          flex: 1,
          maxHeight: "88%",
        },
      ]}
    >
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>{name}</Text>
      {children}
    </ScrollView>
  );
};

export default Wallets;
