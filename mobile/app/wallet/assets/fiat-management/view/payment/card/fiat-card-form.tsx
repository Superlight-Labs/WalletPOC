import React from "react";
import { useForm } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";
import ControlledTextInput from "../../../../../../views/components/controlled-text-input";
import { styles } from "../fiat-payment-styles";

export type CardFormInputs = {
  amount: string;
};

const FiatCardForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormInputs>({
    defaultValues: {
      amount: "0.00",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <ScrollView style={{ ...styles.container, maxHeight: "15%" }}>
        <View style={{ marginBottom: 40 }}>
          <ControlledTextInput name="amount" control={control} error={errors.amount} />
        </View>
      </ScrollView>
      <Button title="Deposit Fiat to USDC per Card" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default FiatCardForm;
