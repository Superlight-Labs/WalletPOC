import { FastifyInstance } from "fastify";
import registerAuthRoutes from "./auth/auth-routes";
import registerCircleRoutes from "./circle/circle-routes";
import registerGaslessRoutes from "./gasless/gasless-routes";
import registerMcpRoutes from "./mpc/mpc-routes";
import registerTatumRoutes from "./tatum/tatum-routes";
import registerUserRoutes from "./user/user-routes";

export const registerRoutes = (server: FastifyInstance): void => {
  registerUserRoutes(server);
  registerMcpRoutes(server);
  registerAuthRoutes(server);
  registerTatumRoutes(server);
  registerGaslessRoutes(server);
  registerCircleRoutes(server);
};
