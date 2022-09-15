import { authenticatedRoute, route } from "@lib/route/handlers";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import { okAsync } from "neverthrow";
import { User } from "../user/user";
import { CircleCard, CirclePayment, CircleSettlement, CreateCardPaymentPayload, CreateCircleCard } from "./circle";
import { createCircleCardPayment, getOrCreateCircleCard } from "./circle.service";

const postCreateCircleCard = authenticatedRoute<CircleCard>((req: FastifyRequest, user: User) => {
  const signedNonce = req.cookies["pgpsecret"];
  const secret = req.unsignCookie(signedNonce || "").value || "";

  const createCircleCard = req.body as CreateCircleCard;

  return getOrCreateCircleCard(createCircleCard, user, secret);
});

const postCreateCirclePaymentCard = authenticatedRoute<CirclePayment>((req: FastifyRequest, user: User) => {
  const signedNonce = req.cookies["pgpsecret"];
  const secret = req.unsignCookie(signedNonce || "").value || "";

  const createCircleCard = req.body as CreateCardPaymentPayload;

  return createCircleCardPayment(createCircleCard, user, secret);
});

const postTriggerSettlement = route<CircleSettlement | null>((req: FastifyRequest) => {
  return okAsync(null);
});

const registerCircleRoutes = (server: FastifyInstance) => {
  server.post("/circle/create-card", { schema: circleCreateCardSchema }, postCreateCircleCard);
  server.post("/circle/create-card-payment", { schema: circleCreateCardPaymentSchema }, postCreateCirclePaymentCard);
  server.post("/circle/trigger-settlement", { schema: circleTriggerSettlementSchema }, postTriggerSettlement);
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

const circleCreateCardPaymentSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["encryptedData", "amount", "metadata"],
    properties: {
      encryptedData: { type: "string", maxLength: 65, minLength: 65 },
      amount: {
        type: "object",
        properties: {
          amount: { type: "string", maxLength: 100, minLength: 2 },
          currency: { type: "string", maxLength: 5, minLength: 1 },
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

const circleTriggerSettlementSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["settlementId", "amount"],
    properties: {
      amount: {
        type: "object",
        properties: {
          amount: { type: "string", maxLength: 100, minLength: 2 },
          currency: { type: "string", maxLength: 5, minLength: 1 },
        },
      },
      metadata: {
        type: "string",
        maxLength: 36,
        minLength: 36,
      },
    },
  },
};
export default registerCircleRoutes;
