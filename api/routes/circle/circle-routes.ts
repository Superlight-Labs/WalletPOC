import { authenticatedRoute } from "@lib/route/handlers";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { User } from "../user/user";
import { CircleAddressRequest } from "./circle";
import { getOrCreateCircleAddress, getOrCreateCircleWallet } from "./circle.service";

const postCircleCreateWallet = authenticatedRoute<any>((req: FastifyRequest, user: User) => {
  return getOrCreateCircleWallet(user);
});

const postCircleCreateAddress = authenticatedRoute<any>((req: FastifyRequest, user: User) => {
  return getOrCreateCircleAddress(req.body as CircleAddressRequest, user);
});

const registerCircleRoutes = (server: FastifyInstance) => {
  server.post("/circle/create-wallet", postCircleCreateWallet);
  server.post("/circle/create-address", { schema: circleCreateAddressSchema }, postCircleCreateAddress);
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
