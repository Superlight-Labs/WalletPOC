import React from "react";
import { useForm } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";
import ControlledTextInput from "../../../../views/components/controlled-text-input";
import { styles } from "./payment/fiat-payment-styles";

export type CardFormInputs = {
  cardNumber: string;
  cvv: string;
  expiry: string;
  description: string;
  channel: string;
  holderName: string;
  address: string;
  postalCode: string;
  city: string;
  district: string;
  countryCode: string;
  phone: string;
  email: string;
};

const exampleData = {
  cardNumber: "4007400000000007",
  cvv: "123",
  expiry: new Date("January 1, 2025").toDateString(),
  holderName: "Customer 0001",
  district: "VIE",
  address: "Test Address",
  city: "Test City",
  postalCode: "11111",
  phone: "+12025550180",
  email: "customer-0001@circle.com",
  countryCode: "AT",
  description: "Example Test Card",
};

const FiatAddCardForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormInputs>({
    defaultValues: {
      channel: "",
      ...exampleData,
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <ScrollView style={{ ...styles.container, maxHeight: "60%" }}>
        <View style={{ marginBottom: 40 }}>
          <ControlledTextInput name="cardNumber" control={control} error={errors.cardNumber} />
          <ControlledTextInput name="cvv" control={control} error={errors.cvv} />
          <ControlledTextInput name="description" control={control} error={errors.description} />
          <ControlledTextInput name="channel" control={control} error={errors.channel} />
          <ControlledTextInput name="holderName" control={control} error={errors.holderName} />
          <ControlledTextInput name="address" control={control} error={errors.address} />
          <ControlledTextInput name="postalCode" control={control} error={errors.postalCode} />
          <ControlledTextInput name="city" control={control} error={errors.city} />
          <ControlledTextInput name="district" control={control} error={errors.district} />
          <ControlledTextInput name="countryCode" control={control} error={errors.countryCode} />
          <ControlledTextInput name="phone" control={control} error={errors.phone} />
          <ControlledTextInput name="email" control={control} error={errors.email} />
        </View>
      </ScrollView>
      <Button title="Save Card" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

export default FiatAddCardForm;
