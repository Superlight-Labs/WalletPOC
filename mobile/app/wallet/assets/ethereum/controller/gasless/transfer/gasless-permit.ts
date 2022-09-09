import { GaslessTransactionResponse, TankAddressResponse } from "api-types/gasless";
import { abi } from "ethereum/config/abi/general-abi";
import { ERC20Token } from "ethereum/config/tokens";
import { MPCSigner } from "ethereum/controller/signers/mpc-signer";
import { BigNumberish, ethers } from "ethers";
import { defaultAbiCoder, keccak256, solidityPack, toUtf8Bytes } from "ethers/lib/utils";
import { fetchFromApi, HttpMethod } from "lib/http";

/**
 * Runs an gasless permit call on the token's contract
 * @param signer
 * @param value
 * @param token erc20 token
 * @returns
 */
//TODO dynamic check if token has permit function
export const gaslessPermit = async (signer: MPCSigner, value: string, token: ERC20Token) => {
  //token contract connected with our mpcSigner
  const tokenContract = new ethers.Contract(token[signer.getNetwork()].address, abi, signer);

  //fetch apis tank address
  const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress?network=" + signer.getChain());

  // Create the approval request - api address will be permitted on token contract
  const approve = {
    owner: signer.getAddressObj().address,
    spender: tankAddress.address,
    value: ethers.utils.parseUnits(value, token.decimals),
  };

  // deadline as much as you want in the future
  const deadline = 100000000000000;

  // Get the user's nonce from the tokens contract address
  const nonce = await tokenContract.nonces(signer.getAddress());

  // Get the EIP712 digest
  const digest = getPermitDigest(
    await tokenContract.name(),
    tokenContract.address,
    signer.getChainIdentifier(),
    approve,
    nonce,
    deadline
  );

  //Use signHashedMessage as the digest is already hashed
  const { v, r, s } = await signer.signHashedMessage(digest);

  // Let api approve it
  const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayPermit", {
    method: HttpMethod.POST,
    body: {
      network: signer.getChain(),
      contractAddress: token[signer.getNetwork()].address,
      owner: approve.owner,
      spender: approve.spender,
      value: approve.value.toString(),
      deadline,
      v,
      r,
      s,
    },
  });

  return transaction;
};

//Meta transaction utils after this ---

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

const getPermitDigest = (
  name: string,
  address: string,
  chainId: number,
  approve: {
    owner: string;
    spender: string;
    value: BigNumberish;
  },
  nonce: BigNumberish,
  deadline: BigNumberish
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
            ["bytes32", "address", "address", "uint256", "uint256", "uint256"],
            [PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
          )
        ),
      ]
    )
  );
};

const PERMIT_TYPEHASH = keccak256(
  toUtf8Bytes("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)")
);
