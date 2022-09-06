import { RevertError } from "@0x/utils";
import { GaslessTransactionResponse } from "api-types/gasless";
import { User } from "api-types/user";
import { erc20Tokens } from "ethereum/config/token-constants";
import { getPreparedMpcSigner, getPreparedProvider } from "ethereum/controller/signers/ethereum-alchemy-signer";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { getSwapQuote } from "ethereum/controller/swap/0x-utils";
import { polygonConfig } from "ethereum/polygon/config/polygon-config";
import { ecrecover, importPublic } from "ethereumjs-util";
import { ethers } from "ethers";
import { BigNumberish } from "ethers/lib/ethers";
import { defaultAbiCoder, keccak256, solidityPack, toUtf8Bytes } from "ethers/lib/utils";
import ec from "lib/elliptic";
import { fetchFromApi, HttpMethod } from "lib/http";
import { ZeroExSwapQuote } from "packages/blockchain-api-client/src/provider/0x/ethereum/0x-ethereum-types";
import { getPublicKey } from "react-native-blockchain-crypto-mpc";

import { Address } from "wallet/types/wallet";
import * as ExchangeAbi from "./IExchangeAbi.json";

export const swapGaslessPolygonWithQuote = async (quote: ZeroExSwapQuote, address: string, signer: MPCSigner) => {
  const transactionBody = {
    data: quote.data,
    to: quote.to,
    value: quote.value,
    gasPrice: quote.gasPrice,
  };

  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayTransaction", {
    method: HttpMethod.POST,
    body: {
      network: polygonConfig.chain,
      transaction: transactionBody,
    },
  });

  return transaction;
};

const genRanHex = (size: any) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

export const metaTxTest = async (address: Address, user: User) => {
  console.log("herej ");
  const mpcSigner = getPreparedMpcSigner(address, user);

  const quote = await getSwapQuote(erc20Tokens[1], erc20Tokens[2], "", "100000000000000000");
  console.log("Quote: ", quote);

  // const limitOrder = {
  //   chainId: polygonConfig.chainId,
  //   verifyingContract: "0xf471d32cb40837bf24529fcf17418fc1a4807626",
  //   maker: quote.buyTokenAddress,
  //   taker: quote.sellTokenAddress,
  //   makerToken: erc20Tokens[0].polygonAddress,
  //   takerToken: erc20Tokens[1].polygonAddress,
  //   makerAmount: BigNumber.from(quote.buyAmount),
  //   takerAmount: BigNumber.from(quote.sellAmount),
  //   takerTokenFeeAmount: 0,
  //   sender: "0x0000000000000000000000000000000000000000",
  //   feeRecipient: "0x0000000000000000000000000000000000000000",
  //   expiry: BigNumber.from(Date.now() + 1000 * 60 * 10)
  //     .div(1000 * 60)
  //     .toString(),
  //   pool: toUtf8Bytes(ethers.utils.hexZeroPad(ethers.utils.hexlify(0), 32).slice(34)),
  //   salt: BigNumber.from(Date.now()).toString(),
  // };

  // console.log("limit order: ", limitOrder);

  // const digestLimitOrder = getMetaLimitDigest(limitOrder);

  // console.log("Digest limit order: ", digestLimitOrder);

  // const signedLimitOrder = await mpcSigner.signHashedMessage(digestLimitOrder);

  // console.log("signed limit order:", signedLimitOrder);

  // const contractLimitOrder = new ethers.Contract(
  //   "0xf471d32cb40837bf24529fcf17418fc1a4807626",
  //   ZeroExAbi.compilerOutput.abi,
  //   mpcSigner
  // );

  // const hash = "0x" + genRanHex(64);
  const hash = "0x7188d256fdf2385b7562152c7bc34f9dfb1d9b73ea97b65e426b27210da845e6";

  console.log("hash: ", hash);

  const signedHash = await mpcSigner.signHashedMessage(hash);

  console.log("signed hash: ", signedHash);
  // 0xf471d32cb40837bf24529fcf17418fc1a4807626
  const zeroExContract = new ethers.Contract(
    "0xf91bb752490473b8342a3e964e855b9f9a2a668e",
    ExchangeAbi.compilerOutput.abi,
    getPreparedProvider()
  );

  const deployed = await zeroExContract.deployed();
  console.log("deployed: ", deployed);

  console.log("hash: ", Buffer.from(signedHash.s.slice(2), "hex").length);

  console.log(
    "Recovered: ",
    ecrecover(
      Buffer.from(hash.slice(2), "hex"),
      signedHash.v - 27,
      Buffer.from(signedHash.r.slice(2), "hex"),
      Buffer.from(signedHash.s.slice(2), "hex")
    ).toString("hex") ===
      importPublic(
        Buffer.from(
          ec
            .keyFromPublic([...Buffer.from(await getPublicKey(address.keyShare.keyShare), "base64")].slice(23))
            .getPublic()
            .encode("hex", false),
          "hex"
        )
      ).toString("hex")
  );
  const buffArr = [
    Buffer.from(signedHash.v.toString()),
    Buffer.from(signedHash.r.slice(2), "hex"),
    Buffer.from(signedHash.s.slice(2), "hex"),
    Buffer.from("03", "hex"),
  ];
  const encodedSignature = Buffer.concat(buffArr);

  console.log("Encoded Sig: ", encodedSignature);

  console.log("Encoded Sig Length: ", encodedSignature.length);

  console.log("bytes32: ", Buffer.from(hash.slice(2), "hex").length);
  console.log("address: ", address.address);
  console.log("bytes: ", encodedSignature.toString("hex"));

  console.log("mmmm.--;", Buffer.from("734e6e1c", "hex").toString("utf-8"));

  try {
    console.log("try");
    const valid = await zeroExContract.isValidHashSignature(
      Buffer.from(hash.slice(2), "hex"),
      address.address,
      encodedSignature
    );
    console.log("valid?: ", valid);
  } catch (err: any) {
    console.error("Error data: ", RevertError.decode(err.data));
    console.error("Full Error", { err });
  }

  return;

  // const tx = await contractLimitOrder.fillLimitOrder(limitOrder, signatureLimitOrder, limitOrder.takerAmount);

  // console.log("tx: ", tx);

  // return;
  // const metaTx = {
  //   signer: address.address,
  //   sender: "0x720dA83486197507A0CD8A2734b10098e55a1Ea4",
  //   minGasPrice: Number.parseFloat(quote.gasPrice) - 1000,
  //   maxGasPrice: Number.parseFloat(quote.gasPrice) + 1000,
  //   expirationTimeSeconds: 1662056181,
  //   salt: 82734,
  //   callData: quote.data,
  //   value: quote.value,
  //   feeToken: "0x720dA83486197507A0CD8A2734b10098e55a1Ea4",
  //   feeAmount: 0,
  // };
  // // Get the EIP712 digest
  // const digest = getMetaTxDigest(metaTx);

  // console.log("Digest: ", digest);

  // const { v, r, s } = await mpcSigner.signHashedMessage(digest);

  // console.log("Signed");
  // console.log("v: ", v);
  // console.log("r: ", r);
  // console.log("s: ", s);

  // const signature = {
  //   signatureType: 3,
  //   v,
  //   r,
  //   s,
  // };

  // const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayMetaTx", {
  //   method: HttpMethod.POST,
  //   body: {
  //     network: polygonConfig.chain,
  //     metaTx: metaTx,
  //     signature: signature,
  //     contractAddress: quote.to,
  //   },
  // });
};

// ---------

const getZeroExDomainSeparator = () => {
  return keccak256(
    defaultAbiCoder.encode(
      ["bytes32", "bytes32", "bytes32", "uint256", "address"],
      [
        keccak256(toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")),
        keccak256(toUtf8Bytes("ZeroEx")),
        keccak256(toUtf8Bytes("1.0.0")),
        80001,
        "0xf471d32cb40837bf24529fcf17418fc1a4807626",
      ]
    )
  );
};

const getMetaLimitDigest = (limitOrder: {
  makerToken: string;
  takerToken: string;
  makerAmount: BigNumberish;
  takerAmount: BigNumberish;
  takerTokenFeeAmount: BigNumberish;
  maker: string;
  taker: string;
  sender: string;
  feeRecipient: string;
  pool: BigNumberish;
  expiry: BigNumberish;
  salt: BigNumberish;
}) => {
  const DOMAIN_SEPARATOR = getZeroExDomainSeparator();
  console.log(
    "typehash: ",
    "0xce918627cb55462ddbb85e73de69a8b322f2bc88f4507c52fcad6d4c33c29d49" === LIMIT_ORDER_TYPEHASH
  );
  console.log("domain seperator: ", "0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f");
  console.log("domain seperator: ", DOMAIN_SEPARATOR);

  return keccak256(
    solidityPack(
      ["bytes1", "bytes1", "bytes32", "bytes32"],
      [
        "0x19",
        "0x01",
        DOMAIN_SEPARATOR,
        keccak256(
          defaultAbiCoder.encode(
            [
              "bytes32",
              "address",
              "address",
              "uint128",
              "uint128",
              "uint128",
              "address",
              "address",
              "address",
              "address",
              "bytes32",
              "uint64",
              "uint256",
            ],
            [
              LIMIT_ORDER_TYPEHASH,
              limitOrder.makerToken,
              limitOrder.takerToken,
              limitOrder.makerAmount,
              limitOrder.takerAmount,
              limitOrder.takerTokenFeeAmount,
              limitOrder.maker,
              limitOrder.taker,
              limitOrder.sender,
              limitOrder.feeRecipient,
              limitOrder.pool,
              limitOrder.expiry,
              limitOrder.salt,
            ]
          )
        ),
      ]
    )
  );
};

const getMetaTxDigest = (metaTx: {
  signer: string;
  sender: string;
  minGasPrice: BigNumberish;
  maxGasPrice: BigNumberish;
  expirationTimeSeconds: BigNumberish;
  salt: BigNumberish;
  callData: string;
  value: BigNumberish;
  feeToken: string;
  feeAmount: BigNumberish;
}) => {
  const DOMAIN_SEPARATOR = getZeroExDomainSeparator();
  return keccak256(
    solidityPack(
      ["bytes1", "bytes1", "bytes32", "bytes32"],
      [
        "0x19",
        "0x01",
        DOMAIN_SEPARATOR,
        keccak256(
          defaultAbiCoder.encode(
            [
              "bytes32",
              "address",
              "address",
              "uint256",
              "uint256",
              "uint256",
              "uint256",
              "bytes",
              "uint256",
              "address",
              "uint256",
            ],
            [
              META_TRANSACTION_TYPEHASH,
              metaTx.signer,
              metaTx.sender,
              metaTx.minGasPrice,
              metaTx.maxGasPrice,
              metaTx.expirationTimeSeconds,
              metaTx.salt,
              metaTx.callData,
              metaTx.value,
              metaTx.feeToken,
              metaTx.feeAmount,
            ]
          )
        ),
      ]
    )
  );
};

const LIMIT_ORDER_TYPEHASH = keccak256(
  toUtf8Bytes(
    "LimitOrder(" +
      "address makerToken," +
      "address takerToken," +
      "uint128 makerAmount," +
      "uint128 takerAmount," +
      "uint128 takerTokenFeeAmount," +
      "address maker," +
      "address taker," +
      "address sender," +
      "address feeRecipient," +
      "bytes32 pool," +
      "uint64 expiry," +
      "uint256 salt" +
      ")"
  )
);

const META_TRANSACTION_TYPEHASH = keccak256(
  toUtf8Bytes(
    "MetaTransactionData(address signer, address sender, uint256 minGasPrice, uint256 maxGasPrice, uint256 expirationTimeSeconds, uint256 salt, bytes callData, uni256 value, address feeToken, unit256 feeAmount)"
  )
);
