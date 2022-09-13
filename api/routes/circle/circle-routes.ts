import { authenticatedRoute } from "@lib/route/handlers";
import { decryptCipher } from "@lib/utils/auth";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { User } from "../user/user";
import { CircleCard, CirclePublicKey, CreateCircleCard } from "./circle";
import { getOrCreateCircleCard, getPublicKey } from "./circle.service";

const getCirclePublicKey = authenticatedRoute<CirclePublicKey>(getPublicKey);

const postCreateCircleCard = authenticatedRoute<CircleCard>((req: FastifyRequest, user: User) => {
  const signedNonce = req.cookies["pgpsecret"];
  const secret = req.unsignCookie(signedNonce || "").value || "";

  const createCircleCard = req.body as CreateCircleCard;
  console.log(secret, createCircleCard);
  return getOrCreateCircleCard(
    { ...createCircleCard, encryptedData: decryptCipher(secret, createCircleCard.encryptedData) },
    user
  );
});

const registerCircleRoutes = (server: FastifyInstance) => {
  server.get("/circle/get-public-key", getCirclePublicKey);
  server.post("/circle/create-card", { schema: circleCreateCardSchema }, postCreateCircleCard);
};

const circleCreateCardSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["encryptedData", "expMonth", "expYear", "keyId"],
    properties: {
      encryptedData: { type: "string", maxLength: 96, minLength: 96 },
      keyId: { type: "string", maxLength: 100, minLength: 2 },
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
