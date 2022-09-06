import { POSClient } from "@maticnetwork/maticjs";
import { PlasmaClient } from "@maticnetwork/maticjs-plasma";
import { ERC20 } from "@maticnetwork/maticjs/dist/ts/pos/erc20";
import { User } from "api-types/user";
import { BitcoinWallet } from "bitcoin/types/bitcoin";
import { ERC20Token } from "ethereum/config/token-constants";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { PolygonERC20Token } from "ethereum/polygon/config/tokens";
import { EthereumWallet } from "ethereum/types/ethereum";
import { EthereumService } from "packages/blockchain-api-client/src";
import { BitcoinTransaction } from "packages/blockchain-api-client/src/blockchains/bitcoin/types";
import { EthereumTransaction } from "packages/blockchain-api-client/src/blockchains/ethereum/types";
import { Address } from "wallet/types/wallet";

type NavigationRoutes = {
  Home: undefined;

  //Bitcoin Screens
  BitcoinScreen: { isStateEmpty: boolean; user: User };
  BitcoinSendScreen: { account: BitcoinWallet };
  BitcoinReceiveScreen: { account: BitcoinWallet };
  BitcoinSingleTransactionScreen: { transaction: BitcoinTransaction; wallet: BitcoinWallet };

  //Ethereum Screens
  EthereumScreen: { isStateEmpty: boolean; user: User };
  EthereumSendScreen: { signer?: MPCSigner; service?: EthereumService };
  EthereumReceiveScreen: { account: EthereumWallet };
  EthereumSingleTransactionScreen: { transaction: EthereumTransaction; wallet: EthereumWallet };

  //Ethereum Token Screens
  TokenWalletScreen: { wallet: EthereumWallet; token: ERC20Token };
  TokenSendScreen: { wallet: EthereumWallet; token: ERC20Token };
  TokenSwapScreen: { wallet: EthereumWallet };

  //Ethereum Polygon Screens
  EthereumPolygonScreen: { wallet: EthereumWallet; address: Address; signer?: MPCSigner };

  PolygonTokenWalletScreen: {
    wallet: EthereumWallet;
    address: Address;
    token: PolygonERC20Token;
    polygonClient: POSClient;
  };
  PolygonTokenSendScreen: { wallet: EthereumWallet; childErc20: ERC20; token: PolygonERC20Token };

  PolygonBridgeScreen: { address: Address; posClient: POSClient; plasmaClient: PlasmaClient };

  //Ramp it on

  RampOn: { userAddress: string; token: string };
};
