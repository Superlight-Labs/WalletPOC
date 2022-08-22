import { User } from "api-types/user";
import { BitcoinWallet } from "bitcoin/types/bitcoin";
import { ERC20Token } from "ethereum/config/token-constants";
import { MPCSigner } from "ethereum/controller/zksync/signer";
import { EthereumWallet } from "ethereum/types/ethereum";
import { EthereumService } from "packages/blockchain-api-client/src";
import { BitcoinTransaction } from "packages/blockchain-api-client/src/blockchains/bitcoin/types";
import { EthereumTransaction } from "packages/blockchain-api-client/src/blockchains/ethereum/types";

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

  //Ethereum zk-sync Screens
  EthereumZkSyncScreen: { signer?: MPCSigner };

  //Ethereum Token Screens
  TokenWalletScreen: { wallet: EthereumWallet; token: ERC20Token };
  TokenSendScreen: { wallet: EthereumWallet; token: ERC20Token };
  TokenUniswapScreen: { wallet: EthereumWallet };
};
