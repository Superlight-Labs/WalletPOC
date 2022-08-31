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
