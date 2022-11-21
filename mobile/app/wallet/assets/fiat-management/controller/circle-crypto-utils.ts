import { CreateNonceResponse } from "api-types/auth";
import { createCipheriv, randomBytes } from "crypto";
import { fetchFromApi } from "lib/http";

const algorithm = "aes256";
const inputEncoding = "utf8";
const outputEncoding = "hex";
const iv = randomBytes(16);

export async function encryptCircleData(dataToEncrypt: object) {
  const { nonce } = await fetchFromApi<CreateNonceResponse>("/auth/get-pgp-secret");
  const key = Buffer.from(nonce, "base64");

  const clear = JSON.stringify(dataToEncrypt);

  const cipher = createCipheriv(algorithm, key, iv);
  let ciphered = cipher.update(clear, inputEncoding, outputEncoding);
  ciphered += cipher.final(outputEncoding);

  return iv.toString(outputEncoding) + ":" + ciphered;
}
