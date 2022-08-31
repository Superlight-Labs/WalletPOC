import { nonceRoute } from "@lib/route";
import { FastifyInstance, FastifyRequest, FastifySchema } from "fastify";
import {
  GaslessApproveRequest,
  GaslessGetRequest,
  GaslessPermitRequest,
  GaslessTransactionResponse,
  GaslessTransferRequest,
  GaslessTransferWithAuthorizationRequest,
  TankAddressResponse,
  TankBalanceResponse,
} from "./gasless";
import {
  fetchTankAddress,
  fetchTankBalance,
  gaslessApprove,
  relayGaslessPermit,
  relayGaslessTransfer,
  relayGaslessTransferWithAuthorization,
} from "./gasless.service";

const getTankBalance = async (req: FastifyRequest): Promise<TankBalanceResponse> => {
  return await fetchTankBalance(req.query as GaslessGetRequest);
};

const getTankAddress = (req: FastifyRequest): TankAddressResponse => {
  return fetchTankAddress(req.query as GaslessGetRequest);
};

const postRelayGaslessApprove = nonceRoute<GaslessTransactionResponse>((req: FastifyRequest) => {
  return gaslessApprove(req.body as GaslessApproveRequest);
});

const postRelayGaslessPermit = nonceRoute<GaslessTransactionResponse>((req: FastifyRequest) => {
  return relayGaslessPermit(req.body as GaslessPermitRequest);
});

const postRelayGaslessTransfer = nonceRoute<GaslessTransactionResponse>((req: FastifyRequest) => {
  return relayGaslessTransfer(req.body as GaslessTransferRequest);
});

const postRelayGaslessTransferWithAuthorization = nonceRoute<GaslessTransactionResponse>((req: FastifyRequest) => {
  return relayGaslessTransferWithAuthorization(req.body as GaslessTransferWithAuthorizationRequest);
});

const registerGaslessRoutes = (server: FastifyInstance) => {
  server.get("/gasless/tankBalance", { schema: gaslessGetSchema }, getTankBalance);
  server.get("/gasless/tankAddress", { schema: gaslessGetSchema }, getTankAddress);
  server.post("/gasless/approve", { schema: relayGaslessApproveSchema }, postRelayGaslessApprove);
  server.post("/gasless/relayPermit", { schema: relayGaslessPermitSchema }, postRelayGaslessPermit);
  server.post("/gasless/relayTransfer", { schema: relayGaslessTransferSchema }, postRelayGaslessTransfer);
  server.post(
    "/gasless/relayTransferWithAuthorization",
    { schema: relayGaslessTransferWithAuthorizationSchema },
    postRelayGaslessTransferWithAuthorization
  );
};

const gaslessGetSchema: FastifySchema = {
  querystring: {
    type: "object",
    required: ["network"],
    properties: {
      network: { type: "string" },
    },
  },
};

const relayGaslessApproveSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["network", "contractAddress", "receiver"],
    properties: {
      network: { type: "string" },
      contractAddress: { type: "string", maxLength: 44, minLength: 20 },
      receiver: { type: "string", maxLength: 44, minLength: 40 },
    },
  },
};

const relayGaslessPermitSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["network", "contractAddress", "owner", "spender", "value", "deadline", "v", "r", "s"],
    properties: {
      network: { type: "string" },
      contractAddress: { type: "string", maxLength: 44, minLength: 20 },
      owner: { type: "string", maxLength: 44, minLength: 40 },
      spender: { type: "string", maxLength: 44, minLength: 40 },
      value: { type: "string" },
      deadline: { type: "number" },
      v: { type: "number" },
      r: { type: "string" },
      s: { type: "string" },
    },
  },
};

const relayGaslessTransferSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["network", "contractAddress", "from", "to", "value"],
    properties: {
      network: { type: "string" },
      contractAddress: { type: "string", maxLength: 44, minLength: 20 },
      from: { type: "string", maxLength: 44, minLength: 40 },
      to: { type: "string", maxLength: 44, minLength: 40 },
      value: { type: "string" },
    },
  },
};

const relayGaslessTransferWithAuthorizationSchema: FastifySchema = {
  body: {
    type: "object",
    required: [
      "network",
      "contractAddress",
      "from",
      "to",
      "value",
      "validAfter",
      "validBefore",
      "nonce",
      "v",
      "r",
      "s",
    ],
    properties: {
      network: { type: "string" },
      contractAddress: { type: "string", maxLength: 44, minLength: 20 },
      from: { type: "string", maxLength: 44, minLength: 40 },
      to: { type: "string", maxLength: 44, minLength: 40 },
      value: { type: "string" },
      validAfter: { type: "number" },
      validBefore: { type: "number" },
      nonce: { type: "string" },
      v: { type: "number" },
      r: { type: "string" },
      s: { type: "string" },
    },
  },
};

export default registerGaslessRoutes;
