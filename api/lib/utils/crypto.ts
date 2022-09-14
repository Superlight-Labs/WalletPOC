import crypto from "crypto";
import { createMessage, encrypt, readKey } from "openpgp";
import { CirclePublicKey } from "../../routes/circle/circle";
import { buildPubKey } from "./auth";

export const verifySignature = (publicKey: string, message: string, signature: string): boolean => {
  const verifier = crypto.createVerify("SHA256").update(message, "utf-8");

  return verifier.verify(
    {
      key: buildPubKey(publicKey),
      format: "pem",
      type: "pkcs1",
    },
    Buffer.from(signature, "base64")
  );
};

/**
 * Encrypt dataToEncrypt
 *
 * @param {Object} dataToEncrypt
 * @param {PublicKey} Object containing keyId and publicKey properties
 *
 * @return {Object} Object containing encryptedMessage and keyId
 */
export async function pgpEncrypt(dataToEncrypt: unknown, { keyId, publicKey }: CirclePublicKey) {
  if (!publicKey || !keyId) {
    throw new Error("Unable to encrypt data");
  }

  const decodedPublicKey = await readKey({ armoredKey: Buffer.from(publicKey, "base64").toString("latin1") });

  const message = await createMessage({ text: JSON.stringify(dataToEncrypt) });
  return encrypt({
    message,
    encryptionKeys: decodedPublicKey,
  }).then((cipherText) => {
    return Buffer.from(cipherText as string, "latin1").toString("base64");
  });
}
