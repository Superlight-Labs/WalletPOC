import { other, RouteError } from "@lib/route/error";
import { BigNumber, ethers } from "ethers";
import { toUtf8Bytes } from "ethers/lib/utils";
import { ResultAsync } from "neverthrow";
import { erc20Abi } from "./erc20-abi";
import {
  GaslessApproveRequest,
  GaslessPermitRequest,
  GaslessTransactionResponse,
  GaslessTransferRequest,
  GaslessTransferWithAuthorizationRequest,
  TankAddressResponse,
  TankBalanceResponse,
} from "./gasless";

const paymasterProvider = new ethers.providers.AlchemyProvider("goerli", "ahl42ynne2Kd8FosnoYBtCW3ssoCtIu0");

const paymasterAccount = ethers.utils.HDNode.fromMnemonic(
  "verify twice old trouble merge spot sorry doctor topple naive rent horse tumble wheat angle secret plate crane warfare chase run cereal match scissors"
).derivePath(`m/44'/60'/0'/0/0`);

const paymasterWallet = new ethers.Wallet(paymasterAccount, paymasterProvider);

export const fetchTankBalance = async (): Promise<TankBalanceResponse> => {
  return { balance: await paymasterWallet.getBalance() };
};

export const fetchTankAddress = (): TankAddressResponse => {
  return { address: paymasterWallet.address };
};

export const gaslessApprove = (request: GaslessApproveRequest): ResultAsync<GaslessTransactionResponse, RouteError> => {
  const tx = {
    to: request.receiver,
    // Convert currency unit from ether to wei
    value: 100000000000000,
  };
  return ResultAsync.fromPromise(paymasterWallet.sendTransaction(tx), (e) =>
    other("Err while sending ether for approval", e as Error)
  ).map(async (transaction) => {
    console.log("Ether sent for approval transaction: ", transaction);
    await transaction.wait();
    console.log("Transaction confirmed");
    return { transaction };
  });
};

export const relayGaslessPermit = (
  request: GaslessPermitRequest
): ResultAsync<GaslessTransactionResponse, RouteError> => {
  //token contract connected with paymasters signer
  const tokenContract = new ethers.Contract(request.contractAddress, erc20Abi, paymasterWallet);
  return ResultAsync.fromPromise(
    tokenContract.permit(
      request.owner,
      request.spender,
      request.value,
      request.deadline,
      request.v,
      request.r,
      request.s
    ),
    (e) => other("Err while relaying gasless permit", e as Error)
  ).map((transaction) => {
    console.log("Permit transaction: ", transaction);
    return { transaction };
  });
};

export const relayGaslessTransfer = (
  request: GaslessTransferRequest
): ResultAsync<GaslessTransactionResponse, RouteError> => {
  //token contract connected with paymasters signer
  const tokenContract = new ethers.Contract(request.contractAddress, erc20Abi, paymasterWallet);
  return ResultAsync.fromPromise(tokenContract.transferFrom(request.from, request.to, request.value), (e) =>
    other("Err while relaying gasless transferFrom", e as Error)
  ).map((transaction) => {
    console.log("TransferFrom transaction: ", transaction);
    return { transaction };
  });
};

export const relayGaslessTransferWithAuthorization = (
  request: GaslessTransferWithAuthorizationRequest
): ResultAsync<GaslessTransactionResponse, RouteError> => {
  //token contract connected with paymasters signer
  const tokenContract = new ethers.Contract(request.contractAddress, erc20Abi, paymasterWallet);
  return ResultAsync.fromPromise(
    tokenContract.transferWithAuthorization(
      request.from,
      request.to,
      request.value,
      request.validAfter,
      request.validBefore,
      toUtf8Bytes(ethers.utils.hexZeroPad(ethers.utils.hexlify(BigNumber.from(request.nonce)), 32).slice(34)),
      request.v,
      request.r,
      request.s
    ),
    (e) => other("Err while relaying gasless transferWithAuthorization", e as Error)
  ).map((transaction) => {
    console.log("TransferWithAuthorization transaction: ", transaction);
    return { transaction };
  });
};
