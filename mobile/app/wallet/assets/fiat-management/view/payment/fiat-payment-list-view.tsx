import { CirclePayment } from "api-types/circle";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  payments: CirclePayment[];
};

const FiatPaymentListView = ({ payments }: Props) => {
  return (
    <View style={{ maxHeight: "50%" }}>
      {payments.map((payment, index) => (
        <View key={index}>
          <Text>
            Pending Payment {index + 1}: {payment.id}
          </Text>
          <Text>Status: {payment.status}</Text>
          <Text>
            Amount: {payment.amount?.amount} {payment.amount?.currency}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default FiatPaymentListView;
