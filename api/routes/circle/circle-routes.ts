import { route } from "@lib/route";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { authenticate } from "../auth/auth-middleware";
import { User } from "../user/user";
import { CircleCreateAddressRequest } from "./circle";
import { createCircleAddress, postCreateCircleWallet } from "./circle.service";

const postCircleCreateWallet = route<any>((req: FastifyRequest) => {
  return postCreateCircleWallet((req as any).user as User);
});

const postCircleCreateAddress = route<any>((req: FastifyRequest) => {
  return createCircleAddress(req.body as CircleCreateAddressRequest, (req as any).user as User);
});

const registerCircleRoutes = (server: FastifyInstance) => {
  server.register(async function plugin(privatePlugin, opts) {
    privatePlugin.addHook("onRequest", authenticate);
    registerPrivateRoutes(privatePlugin);
  });
};

const registerPrivateRoutes = (server: FastifyInstance) => {
  server.register(async function plugin(pluginServer: FastifyInstance) {
    pluginServer.post("/circle/create-wallet", postCircleCreateWallet);
    pluginServer.post("/circle/create-address", { schema: circleCreateAddressSchema }, postCircleCreateAddress);
  });
};

const circleCreateAddressSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["currency", "chain"],
    properties: {
      currency: { type: "string" },
      chain: { type: "string" },
    },
  },
};

export default registerCircleRoutes;
