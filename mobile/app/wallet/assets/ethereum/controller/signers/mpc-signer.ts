import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import { Signature, SignatureLike } from "@ethersproject/bytes";
import { serialize, UnsignedTransaction } from "@ethersproject/transactions";
import { User } from "api-types/user";
import { Config, config, Network } from "ethereum/config/ethereum-config";
import { Bytes, ethers, getDefaultProvider, Signer } from "ethers";
import {
  defineReadOnly,
  getAddress,
  hashMessage,
  joinSignature,
  keccak256,
  resolveProperties,
  splitSignature,
} from "ethers/lib/utils";
import * as LocalAuthentication from "expo-local-authentication";
import { signEcdsa } from "lib/mpc";
import { getBinSignature } from "react-native-blockchain-crypto-mpc";
import { Address } from "wallet/types/wallet";

export class MPCSigner extends Signer {
  private address: Address;
  private user: User;
  private config?: Config;

  constructor(address: Address, user: User, config?: Config) {
    super();
    this.address = address;
    this.user = user;
    this.config = config;
  }

  getNetwork = (): Network => {
    return this.config?.network || "ethereum";
  };

  getChainIdentifier = (): number => {
    return this.config?.chainId || 1;
  };

  getChain = (): string => {
    return this.config?.chain || "mainnet";
  };

  getAddress = (): Promise<string> => {
    return Promise.resolve(this.address.address);
  };

  signHashedMessage = async (message: string | Bytes): Promise<any> => {
    if (typeof message === "string") {
      //message = toUtf8Bytes(message);
      message = message.split("0x")[1];
    } else {
      message = message.toString();
    }

    const context = await signEcdsa(
      this.user.devicePublicKey,

      this.user.id,
      this.address.keyShare.id,
      this.address.keyShare.keyShare,
      message,
      "hex"
    );

    const { signature, recoveryCode: recoveryParam } = await getBinSignature(context, this.address.keyShare.keyShare);

    const sigBuff = Buffer.from(signature, "base64");
    const sig = getSignatureWithRecoveryCode(
      {
        r: "0x" + sigBuff.slice(0, 32).toString("hex"),
        s: "0x" + sigBuff.slice(32, 64).toString("hex"),
        recoveryParam: 0,
      },
      Buffer.from(message, "hex"),
      this.address.address
    );

    const signatureRVS = splitSignature(sig);
    return { r: signatureRVS.r, v: signatureRVS.v, s: signatureRVS.s };
  };

  signMessage = async (message: string | Bytes): Promise<string> => {
    if (typeof message === "string") {
      //message = toUtf8Bytes(message);
      message = message.split("0x")[1];
    }

    const hash = hashMessage(message).split("0x")[1];

    const context = await signEcdsa(
      this.user.devicePublicKey,

      this.user.id,
      this.address.keyShare.id,
      this.address.keyShare.keyShare,
      hash,
      "hex"
    );

    const { signature, recoveryCode: recoveryParam } = await getBinSignature(context, this.address.keyShare.keyShare);

    const sigBuff = Buffer.from(signature, "base64");
    const sig = getSignatureWithRecoveryCode(
      {
        r: "0x" + sigBuff.slice(0, 32).toString("hex"),
        s: "0x" + sigBuff.slice(32, 64).toString("hex"),
        recoveryParam: 0,
      },
      Buffer.from(hash, "hex"),
      this.address.address
    );

    return joinSignature(sig);
  };

  signTransaction = async (transaction: TransactionRequest): Promise<string> => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to verify your Device WalletPOC",
      cancelLabel: "cancel",
    });

    if (!result.success) {
      // Show snackbar here or similar
      throw new Error(result.error);
    }
    return resolveProperties(transaction).then(async (tx) => {
      if (tx.from != null) {
        if (getAddress(tx.from) !== this.address.address) {
          console.error(
            "transaction from address mismatch",
            "transaction.from",
            tx.from,
            " !== ",
            this.address.address
          );
        }
        delete tx.from;
      }

      const serialized = serialize(<UnsignedTransaction>tx);
      const kec = keccak256(serialized).split("0x")[1];

      const context = await signEcdsa(
        this.user.devicePublicKey,

        this.user.id,
        this.address.keyShare.id,
        this.address.keyShare.keyShare,
        kec,
        "hex"
      );

      const { signature, recoveryCode } = await getBinSignature(context, this.address.keyShare.keyShare);

      const sigBuff = Buffer.from(signature, "base64");

      const sig = getSignatureWithRecoveryCode(
        {
          r: "0x" + sigBuff.slice(0, 32).toString("hex"),
          s: "0x" + sigBuff.slice(32, 64).toString("hex"),
          recoveryParam: 0,
        },
        Buffer.from(kec, "hex"),
        this.address.address
      );

      return serialize(<UnsignedTransaction>tx, sig);
    });
  };

  connect = (provider: Provider): MPCSigner => {
    defineReadOnly(this, "provider", provider || null);
    return this;
  };

  getProvider = (): Provider => {
    return this.provider || getDefaultProvider(config.chain);
  };

  getAddressObj = (): Address => {
    return this.address;
  };

  getUser = (): User => {
    return this.user;
  };
}

/**
 * Workaround to fix a problem in unbound-crypto-mpc
 *
 * @param signature Signature with recoveryParam: 0
 * @param msgHash Message before signing
 * @param address Address we are expecting
 * @returns Recovery Code that leads from the Signature to the correct Public Key / Address
 */
export const getSignatureWithRecoveryCode = (
  signature: SignatureLike,
  msgHash: Buffer,
  address: string
): SignatureLike => {
  const recoveredAddress = ethers.utils.recoverAddress(msgHash, signature);

  if (recoveredAddress === address) return signature;

  return { ...(signature as Signature), recoveryParam: 1 };
};
