import React, { useState } from "react";
import { Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { authState } from "state/atoms";

const CreateWallet = () => {
  const [userCreateResult, setUserCreateResult] = useState<boolean>();
  const devicePublicKey = useRecoilValue(authState);

  return (
    <View>
      <Text>Now you can create your wallet</Text>
      <Text>{userCreateResult && "Successfully created user"}</Text>
    </View>
  );
};

export default CreateWallet;
