import { config } from "ethereum/config/ethereum-config";

const mainProxyAddress = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa";
const testProxyAddress = "0xb5505a6d998549090530911180f38aC5130101c6";

export const proxyAddress = config.IsTestNet ? testProxyAddress : mainProxyAddress;

const Network: "TEST" | "Main" = "TEST";

const isTestNet = Network === "TEST";

interface Config {
  IsTestNet: boolean;
  coinTypeIndex: string;
  chain: string;
  chainId: number;
}

export const polygonConfig: Config = {
  IsTestNet: isTestNet,
  coinTypeIndex: isTestNet ? "1" : "60",
  chain: isTestNet ? "maticmum" : "matic",
  chainId: isTestNet ? 80001 : 137,
};
