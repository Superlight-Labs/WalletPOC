const Network: "TEST" | "Main" = "TEST";

const isTestNet = Network === "TEST";

export type Network = "polygon" | "ethereum";
export interface Config {
  IsTestNet: boolean;
  coinTypeIndex: string;
  chain: string;
  chainId: number;
  network: Network;
}

export const config: Config = {
  IsTestNet: isTestNet,
  coinTypeIndex: isTestNet ? "1" : "60",
  chain: isTestNet ? "goerli" : "mainnet",
  chainId: isTestNet ? 5 : 1,
  network: "ethereum",
};

export const alchemyProviderKey = "ahl42ynne2Kd8FosnoYBtCW3ssoCtIu0";
