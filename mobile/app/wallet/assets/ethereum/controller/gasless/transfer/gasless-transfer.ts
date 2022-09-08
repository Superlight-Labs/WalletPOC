import { GaslessTransactionResponse } from "api-types/gasless";
import { usdcAbi } from "ethereum/config/abi/usdc-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { defaultAbiCoder, keccak256, randomBytes, solidityPack, toUtf8Bytes } from "ethers/lib/utils";
import { fetchFromApi, HttpMethod } from "lib/http";
import { MPCSigner } from "../signers/mpc-signer";

/**
 * Transfers erc20 Token value from -> to (permit or approveUnlimited has to be called beforehand)
 * @param signer
 * @param to
 * @param value
 * @param token
 * @returns
 */
export const gaslessTransfer = async (signer: MPCSigner, to: string, value: string, token: ERC20Token) => {
  // Let api approve it
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayTransfer", {
    method: HttpMethod.POST,
    body: {
      network: signer.getChain(),
      contractAddress: token[signer.getNetwork()].address,
      from: signer.getAddressObj().address,
      to,
      value: ethers.utils.parseUnits(value, token.decimals).toString(),
    },
  });

  return transaction;
};

/**
 * Transfers erc20 Token value from -> to (no permit has to be called beforehand, contract has to support transferWithAuthorization )
 * @param signer
 * @param to
 * @param value
 * @param token
 * @returns
 */
export const gaslessTransferWithAuthorization = async (
  signer: MPCSigner,
  to: string,
  value: string,
  token: ERC20Token
) => {
  //token contract connected with our mpcSigner
  const tokenContract = new ethers.Contract(token[signer.getNetwork()].address, usdcAbi, signer);

  // Create the approval request
  const approve = {
    from: signer.getAddressObj().address,
    to: to,
    value: ethers.utils.parseUnits(value, token.decimals),
  };

  // Create validation time
  const seconds = Math.round(new Date().getTime() / 1000);
  const validAfter = 0; //valid from now on
  const validBefore = seconds + 1200; // valid for 20min

  //const nonce is unique random byte32 when using transferWithAuth
  let isNonceUsed = true;
  let nonce;
  do {
    nonce = BigNumber.from(randomBytes(32));
    isNonceUsed = await tokenContract.authorizationState(signer.getAddressObj().address, nonce);
  } while (isNonceUsed);

  // Get the EIP712 digest
  const digest = getTransferDigest(
    await tokenContract.name(),
    tokenContract.address,
    signer.getChainIdentifier(),
    approve,
    toUtf8Bytes(ethers.utils.hexZeroPad(ethers.utils.hexlify(nonce), 32).slice(34)),
    validAfter,
    validBefore
  );

  const { v, r, s } = await signer.signHashedMessage(digest);

  //call api to relay transfer
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayTransferWithAuthorization", {
    method: HttpMethod.POST,
    body: {
      network: signer.getChain(),
      contractAddress: token[signer.getNetwork()].address,
      from: approve.from,
      to: approve.to,
      value: approve.value.toString(),
      validAfter,
      validBefore,
      nonce: nonce.toString(),
      v,
      r,
      s,
    },
  });

  return transaction;
};

// Meta transaction stuff ---------------

const getDomainSeparator = (name: string, contractAddress: string, chainId: number) => {
  return keccak256(
    defaultAbiCoder.encode(
      ["bytes32", "bytes32", "bytes32", "uint256", "address"],
      [
        keccak256(toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")),
        keccak256(toUtf8Bytes(name)),
        keccak256(toUtf8Bytes("2")),
        chainId,
        contractAddress,
      ]
    )
  );
};

const getTransferDigest = (
  name: string,
  address: string,
  chainId: number,
  approve: {
    from: string;
    to: string;
    value: BigNumberish;
  },
  nonce: BigNumberish,
  validAfter: BigNumberish,
  validBefore: BigNumberish
) => {
  const DOMAIN_SEPARATOR = getDomainSeparator(name, address, chainId);
  return keccak256(
    solidityPack(
      ["bytes1", "bytes1", "bytes32", "bytes32"],
      [
        "0x19",
        "0x01",
        DOMAIN_SEPARATOR,
        keccak256(
          defaultAbiCoder.encode(
            ["bytes32", "address", "address", "uint256", "uint256", "uint256", "bytes32"],
            [
              TRANSFER_WITH_AUTHORIZATION_TYPEHASH,
              approve.from,
              approve.to,
              approve.value,
              validAfter,
              validBefore,
              nonce,
            ]
          )
        ),
      ]
    )
  );
};

const TRANSFER_WITH_AUTHORIZATION_TYPEHASH = keccak256(
  toUtf8Bytes(
    "TransferWithAuthorization(address from,address to,uint256 value,uint256 validAfter,uint256 validBefore,bytes32 nonce)"
  )
);
