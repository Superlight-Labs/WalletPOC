import { CreateNonceResponse } from "api-types/auth";
import { CircleCard, CirclePublicKey, CreateCircleCard } from "api-types/circle";
import { User } from "api-types/user";
import { fetchFromApi, fetchFromApiAuthenticated, HttpMethod } from "lib/http";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { apiLoadingState } from "state/atoms";
import ControlledTextInput from "../../../../views/components/controlled-text-input";
import { pgpEncrypt } from "../controller/circle-crypto-utils";
import { FiatManagementState } from "../state/fiat-management-atoms";
import { styles } from "./payment/fiat-payment-styles";

export type CardFormInputs = {
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
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
  expiryMonth: "1",
  expiryYear: "2025",
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

type Props = {
  user: User;
  setCard: SetterOrUpdater<FiatManagementState>;
};

const FiatAddCardForm = ({ user, setCard }: Props) => {
  const setSnackbar = useSetRecoilState(apiLoadingState);

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

  const onSubmit = useCallback(
    async (data: CardFormInputs) => {
      setSnackbar({ status: "Loading", message: "Saving Card, please wait..." });

      try {
        const cardDetails = {
          number: data.cardNumber.replace(/\s/g, ""),
          cvv: data.cvv,
        };
        const { nonce } = await fetchFromApi<CreateNonceResponse>("/auth/get-pgp-secret");
        const { keyId } = await fetchFromApiAuthenticated<CirclePublicKey>("/circle/get-public-key", user);

        const key = Buffer.from(nonce, "base64");
        const encryptedData = await pgpEncrypt(cardDetails, key);

        const payload: CreateCircleCard = {
          expMonth: parseInt(data.expiryMonth),
          expYear: parseInt(data.expiryYear),
          encryptedData,
          keyId,
          billingDetails: {
            line1: data.address,
            city: data.city,
            district: data.district,
            postalCode: data.postalCode,
            country: data.countryCode,
            name: data.holderName,
          },
          metadata: {
            phoneNumber: data.phone,
            email: data.email,
          },
        };

        fetchFromApiAuthenticated<CircleCard>("/circle/create-card", user, {
          method: HttpMethod.POST,
          body: payload,
        })
          .then((result) => {
            setSnackbar({ status: "Success", message: `Card with id "${result.cardId}" created!` });
            setCard({ cardId: result.cardId });
          })
          .catch((reason) => {
            setSnackbar({ status: "Error", message: reason.error });
          });
      } catch (err: any) {
        console.error(err, "Error while saving card");

        if (typeof err.error === "string") setSnackbar({ status: "Error", message: err.error });
      }
    },
    [user, setSnackbar, setCard]
  );

  return (
    <>
      <ScrollView style={{ ...styles.container, maxHeight: "60%" }}>
        <View style={{ marginBottom: 40 }}>
          <ControlledTextInput name="cardNumber" control={control} error={errors.cardNumber} />
          <ControlledTextInput name="cvv" control={control} error={errors.cvv} />
          <ControlledTextInput name="expiryMonth" control={control} error={errors.expiryMonth} />
          <ControlledTextInput name="expiryYear" control={control} error={errors.expiryYear} />
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
