import { route } from "@lib/route/handlers";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { authenticate } from "../auth/auth-middleware";
import { User } from "../user/user";
import { CircleAddressRequest } from "./circle";
import { getOrCreateCircleAddress, getOrCreateCircleWallet } from "./circle.service";

const postCircleCreateWallet = route<any>((req: FastifyRequest) => {
  return getOrCreateCircleWallet((req as any).user as User);
});

const postCircleCreateAddress = route<any>((req: FastifyRequest) => {
  return getOrCreateCircleAddress(req.body as CircleAddressRequest, (req as any).user as User);
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
