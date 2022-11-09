import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "state/atoms";
import { fiatStateAtom } from "wallet/assets/fiat-management/state/fiat-management-atoms";
import FiatPaymentListView from "../fiat-payment-list-view";
import FiatCardForm from "./fiat-card-form";

const FiatCardPaymentScreen = () => {
  const user = useRecoilValue(authState);

  const [fiatState, setFiatState] = useRecoilState(fiatStateAtom);

  return (
    <>
      <FiatCardForm user={user} setFiatState={setFiatState} />
      <FiatPaymentListView payments={fiatState.payments} />
    </>
  );
};

export default FiatCardPaymentScreen;
