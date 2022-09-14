import { CreateCardPaymentPayload } from "api-types/circle";
import { User } from "api-types/user";
import { fetchFromApiAuthenticated, HttpMethod } from "lib/http";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";
import { useSetRecoilState } from "recoil";
import { apiLoadingState } from "state/atoms";
import { encryptCircleData } from "wallet/assets/fiat-management/controller/circle-crypto-utils";
import ControlledTextInput from "../../../../../../views/components/controlled-text-input";
import { styles } from "../../fiat-styles";

export type CardFormInputs = {
  amount: string;
  currency: string;
  cvv: string;
  email: string;
  phoneNumber: string;
};

type Props = {
  user: User;
};

const FiatCardForm = ({ user }: Props) => {
  const setSnackbar = useSetRecoilState(apiLoadingState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormInputs>({
    defaultValues: {
      amount: "0.00",
      currency: "USD",
      cvv: "123",
      email: "customer-0001@circle.com",
      phoneNumber: "+12025550180",
    },
  });

  const onSubmit = useCallback(async (data: CardFormInputs) => {
    setSnackbar({ status: "Loading", message: "Saving Card, please wait..." });

    const payload = await buildCreateCardPayload(data);

    fetchFromApiAuthenticated<any>("/circle/create-card-payment", user, {
      method: HttpMethod.POST,
      body: payload,
    })
      .then((result) => {
        setSnackbar({ status: "Success", message: `Card initiated successfully` });
      })
      .catch((reason) => {
        setSnackbar({ status: "Error", message: reason.error });
      });
  }, []);

  return (
    <>
      <ScrollView style={{ ...styles.container, maxHeight: "35%" }}>
        <View style={{ marginBottom: 40 }}>
          <ControlledTextInput name="amount" control={control} error={errors.amount} />
          <ControlledTextInput name="currency" control={control} error={errors.currency} />
          <ControlledTextInput name="cvv" control={control} error={errors.cvv} />
          <ControlledTextInput name="email" control={control} error={errors.email} />
          <ControlledTextInput name="phoneNumber" control={control} error={errors.phoneNumber} />
        </View>
      </ScrollView>
      <Button title="Deposit Fiat to USDC per Card" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

const buildCreateCardPayload = async (data: CardFormInputs): Promise<CreateCardPaymentPayload> => {
  const cardDetails = {
    cvv: data.cvv,
  };

  const encryptedData = await encryptCircleData(cardDetails);

  const amountDetail = {
    amount: data.amount,
    currency: "USD",
  };

  const payload: CreateCardPaymentPayload = {
    amount: amountDetail,
    verification: "cvv",
    encryptedData,
    metadata: {
      phoneNumber: data.phoneNumber,
      email: data.email,
      sessionId: "xxx",
      ipAddress: "172.33.222.1",
    },
  };

  return payload;
};

export default FiatCardForm;
