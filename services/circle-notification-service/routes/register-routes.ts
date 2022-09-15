import { isCircleServiceError } from "@lib/error";
import logger from "@lib/logger";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { handleEnvelopePost } from "./envelope.service";

export const registerRoutes = (server: FastifyInstance) => {
  server.head("/", handleHeadRequest);
  server.post("/", handlePostRequest);
};

const handlePostRequest = (req: FastifyRequest, res: FastifyReply) => {
  logger.info({ body: req.body }, "POST Request");

  handleEnvelopePost(req.body)
    .then(() => res.send("POST request for " + req.url))
    .catch((err) => {
      if (!isCircleServiceError(err)) throw err;

      res.status(err.code).send(err.message);
    });
};

const handleHeadRequest = (req: FastifyRequest, res: FastifyReply) => {
  logger.info({ body: req.body, head: req.headers }, "HEAD Request");
  res.type("text/html").send("HEAD request for " + req.url);
};
