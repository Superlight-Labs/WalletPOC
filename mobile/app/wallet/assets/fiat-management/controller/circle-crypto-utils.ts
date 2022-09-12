import { CirclePublicKey } from "api-types/circle";
const { readKey, createMessage, encrypt } = require("react-native-openpgp");
/**
 * Encrypt dataToEncrypt
 *
 * @param {Object} dataToEncrypt
 * @param {PublicKey} Object containing keyId and publicKey properties
 *
 * @return {Object} Object containing encryptedMessage and keyId
 */
export async function pgpEncrypt(dataToEncrypt: object, { keyId, publicKey }: CirclePublicKey) {
  if (!publicKey || !keyId) {
    throw new Error("Unable to encrypt data");
  }

  const decodedPublicKey = await readKey({ armoredKey: atob(publicKey) });

  const message = await createMessage({ text: JSON.stringify(dataToEncrypt) });
  return encrypt({
    message,
    encryptionKeys: decodedPublicKey,
  }).then((cipherText: any) => {
    return {
      encryptedMessage: btoa(cipherText),
      keyId,
    };
  });
}
