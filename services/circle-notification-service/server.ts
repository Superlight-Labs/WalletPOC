import logger from "@lib/logger";
import { FastifyInstance } from "fastify";
import { registerRoutes } from "./routes/register-routes";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fastify = require("fastify");

const server: FastifyInstance = fastify({ logger });

registerRoutes(server);

server.all("*", (request, reply) => {
  reply.status(404).send({ error: "Route does not exist" });
});

server.listen({ port: 8001 }, (err, address) => {
  if (err) {
    logger.error({ err, address }, "Error while trying to listen on port 8080");
    process.exit(1);
  }
});

process.on("uncaughtException", (err) => {
  logger.error({ err }, "Uncaugh Exception");
  logger.warn("Shutting down server because of uncaught exception");

  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error(
    {
      error: reason,
    },
    "Unhandled Promise Rejection"
  );

  // need to log the promise without stringifying it to properly
  // display all rejection info
  logger.warn({ promise });

  // TODO: stream errors to sentry

  process.exit(1);
});
