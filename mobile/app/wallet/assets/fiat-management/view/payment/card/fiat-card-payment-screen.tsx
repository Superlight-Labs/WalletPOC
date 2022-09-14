import React from "react";
import { useRecoilValue } from "recoil";
import { authState } from "state/atoms";
import FiatCardForm from "./fiat-card-form";

const FiatCardPaymentScreen = () => {
  const user = useRecoilValue(authState);
  return <FiatCardForm user={user} />;
};

export default FiatCardPaymentScreen;
