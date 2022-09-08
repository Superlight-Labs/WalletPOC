// /**
//  * Runs an gasless permit call on the token's contract
//  * @param address
//  * @param user
//  * @param value
//  * @param token erc20 token
//  * @returns
//  */

// import { User } from "api-types/user";
// import { ERC20Token } from "ethereum/config/tokens";
// import { PolygonERC20Token } from "ethereum/polygon/config/tokens";
// import { Address } from "wallet/types/wallet";

// //TODO dynamic check if token has permit function
// export const gasslessPermit = async (
//   address: Address,
//   user: User,
//   value: string,
//   token: ERC20Token | PolygonERC20Token
// ) => {
//   const mpcSigner = getPreparedMpcSigner(address, user, config);

//   //token contract connected with our mpcSigner
//   const tokenContractMpcSigner = new ethers.Contract(token.contractAddress, ERC20ABI, mpcSigner);

//   //fetch apis tank address
//   const tankAddress = await fetchFromApi<TankAddressResponse>("/gasless/tankAddress");

//   // Create the approval request - api address will be permitted on token contract
//   const approve = {
//     owner: address.address,
//     spender: tankAddress.address,
//     value: ethers.utils.parseUnits(value, token.decimals),
//   };

//   // deadline as much as you want in the future
//   const deadline = 100000000000000;

//   // Get the user's nonce from the tokens contract address
//   const nonce = await tokenContractMpcSigner.nonces(address.address);

//   // Get the EIP712 digest
//   const digest = getPermitDigest(
//     await tokenContractMpcSigner.name(),
//     tokenContractMpcSigner.address,
//     config.chainId,
//     approve,
//     nonce,
//     deadline
//   );

//   //Use signHashedMessage as the digest is already hashed
//   const { v, r, s } = await mpcSigner.signHashedMessage(digest);

//   // Let api approve it
//   const { transaction } = await fetchFromApi<GaslessTransactionResponse>("/gasless/relayPermit", {
//     method: HttpMethod.POST,
//     body: {
//       contractAddress: token.contractAddress,
//       owner: approve.owner,
//       spender: approve.spender,
//       value: approve.value.toString(),
//       deadline,
//       v,
//       r,
//       s,
//     },
//   });

//   return transaction;
// };
