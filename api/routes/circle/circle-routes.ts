import { authenticatedRoute } from "@lib/route/handlers";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { User } from "../user/user";
import { CircleCard, CreateCircleCard } from "./circle";
import { getOrCreateCircleCard } from "./circle.service";

const postCreateCircleCard = authenticatedRoute<CircleCard>((req: FastifyRequest, user: User) => {
  const signedNonce = req.cookies["pgpsecret"];
  const secret = req.unsignCookie(signedNonce || "").value || "";

  const createCircleCard = req.body as CreateCircleCard;

  return getOrCreateCircleCard(createCircleCard, user, secret);
});

const registerCircleRoutes = (server: FastifyInstance) => {
  server.post("/circle/create-card", { schema: circleCreateCardSchema }, postCreateCircleCard);
};

const circleCreateCardSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["encryptedData", "expMonth", "expYear"],
    properties: {
      encryptedData: { type: "string", maxLength: 129, minLength: 129 },
      expMonth: { type: "integer" },
      expYear: { type: "integer" },
      billingDetails: {
        type: "object",
        properties: {
          city: { type: "string", maxLength: 100, minLength: 2 },
          country: { type: "string", maxLength: 100, minLength: 2 },
          district: { type: "string", maxLength: 100, minLength: 2 },
          line1: { type: "string", maxLength: 100, minLength: 2 },
          line2: { type: "string", maxLength: 100, minLength: 2 },
          name: { type: "string", maxLength: 100, minLength: 2 },
          postalCode: { type: "string", maxLength: 50, minLength: 2 },
        },
      },
      metadata: {
        type: "object",
        properties: {
          email: { type: "string", minLength: 3, maxLength: 150 },
          phoneNumber: { type: "string", minLength: 3, maxLength: 50 },
          sessionId: { type: "string", minLength: 10, maxLength: 100 },
          ipAddress: { type: "string", minLength: 3, maxLength: 40 },
        },
      },
    },
  },
};

export default registerCircleRoutes;
