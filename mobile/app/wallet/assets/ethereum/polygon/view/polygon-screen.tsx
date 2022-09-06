import { POSClient, setProofApi, use } from "@maticnetwork/maticjs";
import Web3ClientPlugin from "@maticnetwork/maticjs-ethers";
import { PlasmaClient } from "@maticnetwork/maticjs-plasma";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import Wallets from "wallet/view/generic-wallet-screen";
import PolygonCheckTransaction from "./polygon-check-transaction";
import PolygonTokenWalletListView from "./tokens/polygon-token-wallet-list-view";
import PolygonPendingWithdrawList from "./tokens/wallet/bridge/withdraw/polygon-pending-withdraw-list-view";
import PolygonWalletView from "./wallet/polygon-wallet";

type Props = NativeStackScreenProps<NavigationRoutes, "PolygonScreen">;

const EthereumPolygonScreen = ({ route, navigation }: Props) => {
  const [posClient, setPosClient] = useState<POSClient>();
  const [plasmaClient, setPlasmaClient] = useState<PlasmaClient>();
  const { signer, address, wallet } = route.params;

  const createPolygonAccount = useCallback(async () => {
    if (!signer) throw new Error("Signer is undefined, cannot access Polygon Client View without Signer");

    const alchemy = new ethers.providers.AlchemyProvider("maticmum", "ahl42ynne2Kd8FosnoYBtCW3ssoCtIu0");

    const childSigner = new MPCSigner(signer.getAddressObj(), signer.getUser()).connect(alchemy);

    const poClient = new POSClient();
    const plClient = new PlasmaClient();

    const clientConfig = {
      log: true,
      network: "testnet",
      version: "mumbai",
      parent: {
        provider: signer,
        defaultConfig: {
          from: address.address,
        },
      },
      child: {
        provider: childSigner,
        defaultConfig: {
          from: address.address,
        },
      },
    };

    await poClient.init(clientConfig);
    await plClient.init(clientConfig);
    // TODO: For Production host this ourselves because of performance
    setProofApi("https://apis.matic.network/");

    setPosClient(poClient);
    setPlasmaClient(plClient);
  }, [signer, setPlasmaClient, setPosClient, address]);

  const setupPolygon = useCallback(async () => {
    use(Web3ClientPlugin);

    await createPolygonAccount();
  }, [createPolygonAccount]);

  useEffect(() => {
    setupPolygon();
  }, []);

  if (!posClient || !plasmaClient) {
    return <Text>Client loading...</Text>;
  }

  return (
    <Wallets style={{ backgroundColor: "#8fa2ff" }} name="Polygon">
      <PolygonTokenWalletListView
        wallet={wallet}
        address={address}
        navigation={navigation}
        plasmaClient={plasmaClient}
        posClient={posClient}
      />
      <PolygonWalletView wallet={wallet} navigation={navigation} />
      <PolygonPendingWithdrawList posClient={posClient} plasmaClient={plasmaClient} address={address.address} />
      <PolygonCheckTransaction polygonClient={posClient} />
    </Wallets>
  );
};

export default EthereumPolygonScreen;
