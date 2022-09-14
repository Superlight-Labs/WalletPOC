import { setNonceRoute } from "@lib/route/handlers";
import { FastifyInstance, FastifyRequest } from "fastify";
import { ResultAsync } from "neverthrow";
import { CreateNonceResponse } from "./auth";

const getNonce = setNonceRoute<CreateNonceResponse>((req: FastifyRequest, nonce: string) =>
  ResultAsync.fromSafePromise(Promise.resolve({ nonce }))
);
const getPgpSecret = setNonceRoute<CreateNonceResponse>(
  (req: FastifyRequest, nonce: string) => ResultAsync.fromSafePromise(Promise.resolve({ nonce })),
  { nonceLength: 32, cookieName: "pgpsecret" }
);

const registerAuthRoutes = (server: FastifyInstance) => {
  server.get("/auth/get-nonce", getNonce);
  server.get("/auth/get-pgp-secret", getPgpSecret);
};

export default registerAuthRoutes;
