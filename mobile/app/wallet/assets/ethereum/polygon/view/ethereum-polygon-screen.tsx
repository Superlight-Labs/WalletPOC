import { POSClient, use } from "@maticnetwork/maticjs";
import Web3ClientPlugin from "@maticnetwork/maticjs-ethers";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MPCSigner } from "ethereum/controller/zksync/signer";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationRoutes } from "shared/types/navigation";
import PolygonTokenWalletListView from "./tokens/polygon-token-wallet-list-view";

type Props = NativeStackScreenProps<NavigationRoutes, "EthereumPolygonScreen">;

const EthereumPolygonScreen = ({ route, navigation }: Props) => {
  const [polygonClient, setPolygonClient] = useState<POSClient>();
  const { signer, address } = route.params;

  const createPolygonAccount = useCallback(async () => {
    if (!signer) throw new Error("Signer is undefined, cannot access Polygon Client View without Signer");
    const client = new POSClient();

    const alchemy = new ethers.providers.AlchemyProvider("maticmum", "ahl42ynne2Kd8FosnoYBtCW3ssoCtIu0");

    const childSigner = new MPCSigner(signer.getAddressObj(), signer.getUser()).connect(alchemy);

    await client.init({
      log: true,
      network: "testnet",
      version: "mumbai",
      parent: {
        provider: signer,
        defaultConfig: {
          from: address,
        },
      },
      child: {
        provider: childSigner,
        defaultConfig: {
          from: address,
        },
      },
    });

    setPolygonClient(client);
  }, [setPolygonClient, signer]);

  const setupPolygon = useCallback(async () => {
    use(Web3ClientPlugin);

    await createPolygonAccount();
  }, [createPolygonAccount]);

  useEffect(() => {
    setupPolygon();
  }, []);

  if (!polygonClient) {
    return <Text>Client loading...</Text>;
  }

  return <PolygonTokenWalletListView address={address} navigation={navigation} polygonClient={polygonClient} />;
};

export default EthereumPolygonScreen;