import { SocketStream } from "@fastify/websocket";
import logger from "@lib/logger";
import { FastifyInstance, FastifyRequest } from "fastify";
import { authenticate } from "../auth/auth-middleware";
import { User } from "../user/user";
import { deriveBIP32 } from "./ecdsa/derive/deriveBIP32";
import { generateEcdsaKey } from "./ecdsa/generateEcdsa";
import { generateGenericSecret } from "./ecdsa/generateSecret";
import { importGenericSecret } from "./ecdsa/importSecret";
import { signWithEcdsaShare } from "./ecdsa/sign";
import { verifyEcdsaSignature } from "./ecdsa/verify";

export type ActionStatus = "Init" | "Stepping";

const route = "/mpc/ecdsa";

const registerMcpRoutes = (server: FastifyInstance): void => {
  // Open Routes
  server.post(route + "/verify", verifyEcdsaSignature);

  // Routes that need Authentication
  server.register(async function plugin(privatePlugin, opts) {
    privatePlugin.addHook("onRequest", authenticate);
    privatePlugin.addHook("onError", async (request, reply, error) => {
      request.log.error({ request: request.body, error }, "Error on MPC Route");
    });

    registerPrivateMpcRoutes(privatePlugin);
  });
};

const registerPrivateMpcRoutes = (server: FastifyInstance) => {
  server.register(async function (server) {
    server.get(route + "/generateSecret", { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
      const user: User = req["user"];
      generateGenericSecret(connection, user);
    });
  });
  server.register(async function (server) {
    server.get(route + "/import", { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
      const user: User = req["user"];
      importGenericSecret(connection, user);
    });
  });
  server.register(async function (server) {
    server.get(route + "/derive", { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
      const usage = server.memoryUsage();
      logger.info(
        {
          ...usage,
          heapUsed: usage.heapUsed / 1000000 + " MB",
          rssBytes: usage.rssBytes / 1000000 + " MB",
        },
        "Staring Bip Derive - Monitoring Memory usage"
      );
      const user: User = req["user"];
      deriveBIP32(connection, user);
    });
  });
  server.register(async function (server) {
    server.get(route + "/generateEcdsa", { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
      const user: User = req["user"];
      generateEcdsaKey(connection, user);
    });
  });
  server.register(async function (server) {
    server.get(route + "/sign", { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
      const user: User = req["user"];
      signWithEcdsaShare(connection, user);
    });
  });
};

export default registerMcpRoutes;
