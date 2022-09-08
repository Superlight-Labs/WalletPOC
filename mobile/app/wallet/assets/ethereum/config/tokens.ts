import { config } from "./ethereum-config";

//created VEST Tether with remix -> to receive funds -> mathias chrome metamask wallet have full funds
const erc20TestnetTokens: ERC20Token[] = [
  //Ethereum is not ERC20 Token, but is here for workaround for 0x swap
  {
    name: "Ethereum",
    symbol: "ETH",
    ethereumContract: {
      address: "ETH",
      decimals: 18,
      isToken: false,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
    polygonContract: {
      address: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
  },
  {
    name: "Wrapped Ether",
    symbol: "wETH",
    ethereumContract: {
      address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
    polygonContract: {
      address: "0x0",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
  },
  {
    name: "USDC",
    symbol: "USDC",
    ethereumContract: {
      address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
      decimals: 6,
      isToken: true,
      hasPermit: true,
      hasTransferWithAuthorization: true,
    },
    polygonContract: {
      address: "0x0fa8781a83e46826621b3bc094ea2a0212e71b23",
      decimals: 6,
      isToken: true,
      hasPermit: true,
      hasTransferWithAuthorization: true,
    },
  },
  {
    name: "Vest Tether",
    symbol: "VESTT",
    ethereumContract: {
      address: "0x407a2069455a8D16FFad985F1c7500B1EE8e5536",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
    polygonContract: {
      address: "0x0",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
  },
  {
    name: "Wrapped Ether (Polygon)",
    symbol: "wETH (P)",
    ethereumContract: {
      address: "0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc",
      decimals: 18,
      isToken: true,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
    polygonContract: {
      address: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
      decimals: 18,
      hasPermit: false,
      hasTransferWithAuthorization: false,
      isToken: true,
    },
  },
  {
    name: "Wrapped Native Matic",
    symbol: "WMATIC",
    ethereumContract: {
      address: "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae",
      decimals: 18,
      isToken: false,
      hasPermit: false,
      hasTransferWithAuthorization: false,
    },
    polygonContract: {
      address: "0x0000000000000000000000000000000000001010",
      decimals: 18,
      hasPermit: false,
      hasTransferWithAuthorization: false,
      isToken: false,
    },
  },
  {
    name: "Test ERC20",
    symbol: "TERC20",
    ethereumContract: {
      address: "0x655F2166b0709cd575202630952D71E2bB0d61Af",
      decimals: 18,
      hasPermit: false,
      hasTransferWithAuthorization: false,
      isToken: true,
    },
    polygonContract: {
      address: "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1",
      decimals: 18,
      hasPermit: false,
      hasTransferWithAuthorization: false,
      isToken: true,
    },
  },
];

const erc20MainnetTokens: ERC20Token[] = [];

export const findContractAddressBySymbol = (searchSymbol: string): ERC20Token | undefined => {
  return config.IsTestNet
    ? erc20TestnetTokens.find((erc20Token) => erc20Token.symbol === searchSymbol)
    : erc20MainnetTokens.find((erc20Token) => erc20Token.symbol === searchSymbol);
};

export const erc20Tokens = config.IsTestNet ? erc20TestnetTokens : erc20MainnetTokens;

export interface ERC20Token {
  name: string;
  symbol: string;
  ethereumContract: ERC20TokenContract;
  polygonContract: ERC20TokenContract;
}
interface ERC20TokenContract {
  address: string;
  decimals: number;
  isToken: boolean;
  hasPermit: boolean;
  hasTransferWithAuthorization: boolean;
}

/**
 * const main: PolygonERC20Token[] = [
  {
    name: "Matic Token",
    symbol: "MATIC",
    polygonAddress: "0x0000000000000000000000000000000000001010",
    ethereumAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    decimals: 18,
    hasPermit: false,
    hasTransferWithAuthorization: false,
    isToken: false,
  },
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    polygonAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    ethereumAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    decimals: 18,
    hasPermit: false,
    hasTransferWithAuthorization: false,
    isToken: true,
  },
  {
    name: "USDC",
    symbol: "USDC",
    polygonAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    ethereumAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 18,
    hasPermit: true,
    hasTransferWithAuthorization: true,
    isToken: true,
  },
];
 */
