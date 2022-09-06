import { invalidAuthentication, other, RouteError } from "@lib/route/error";
import crypto from "crypto";
import { FastifyRequest } from "fastify";
import { errAsync, okAsync, ResultAsync } from "neverthrow";
import { User } from "../../routes/user/user";
import { readUser } from "../../routes/user/user.repository";
import { getSafeResultAsync } from "./neverthrow";

export const buildPubKey = (encoded: string) => {
  // Beginning public key execution
  const l1 = "-----BEGIN PUBLIC KEY-----\n";

  // Finishing public key execution
  const l3 = "\n-----END PUBLIC KEY-----";

  // concatenating all public keys
  return l1 + encoded + l3;
};

export const isNonceValid = (nonce: string | null) => nonce && nonce.length === 24;

export const authenticate = (req: FastifyRequest): ResultAsync<User, RouteError> => {
  const { devicesignature, devicepublickey, userid } = req.headers;

  const signedNonce = req.cookies["authnonce"];
  const nonce = req.unsignCookie(signedNonce || "").value || "";

  if (!isAuthRequestValid(devicesignature as string, devicepublickey as string, userid as string, nonce)) {
    throw new Error("Invalid Request to Mpc Endpoint");
  }

  const readUserResult = getSafeResultAsync(
    readUser({
      userId: userid as string,
      devicePublicKey: devicepublickey as string,
    }),
    (e) => other("Error while reading User from Database", e)
  );

  return readUserResult.andThen((user) => verifySignature(user, nonce, devicesignature as string));
};

const verifySignature = (user: User, nonce: string, deviceSignature: string): ResultAsync<User, RouteError> => {
  const verifier = crypto.createVerify("SHA256").update(nonce as string, "utf-8");

  const result = verifier.verify(
    {
      key: buildPubKey(user.devicePublicKey),
      format: "pem",
      type: "pkcs1",
    },
    Buffer.from(deviceSignature as string, "base64")
  );

  if (result) return okAsync(user);

  return errAsync(invalidAuthentication("Signature invalid"));
};

const isAuthRequestValid = (deviceSignature: string, devicePublicKey: string, userid: string, nonce: string | null) => {
  console.log({ devicePublicKey, deviceSignature, userid, nonce });
  return (
    isNonceValid(nonce) &&
    isDeviceSignatureValid(deviceSignature) &&
    isDevicePublicKeyValid(devicePublicKey) &&
    isUserIdValid(userid)
  );
};

const isDeviceSignatureValid = (deviceSignature: string | null) => deviceSignature && deviceSignature.length === 96;

const isDevicePublicKeyValid = (devicePublicKey: string | null) => devicePublicKey && devicePublicKey.length === 124;

const isUserIdValid = (userId: string | null) => userId && userId.length === 36;
