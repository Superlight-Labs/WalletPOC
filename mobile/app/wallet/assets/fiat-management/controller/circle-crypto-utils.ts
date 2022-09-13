import { createCipheriv, randomBytes } from "crypto";

const algorithm = "aes256";
const inputEncoding = "utf8";
const outputEncoding = "hex";
const iv = randomBytes(16);

export async function pgpEncrypt(dataToEncrypt: object, key: Buffer) {
  const clear = JSON.stringify(dataToEncrypt);

  const cipher = createCipheriv(algorithm, key, iv);
  let ciphered = cipher.update(clear, inputEncoding, outputEncoding);
  ciphered += cipher.final(outputEncoding);

  return iv.toString(outputEncoding) + ":" + ciphered;
}
