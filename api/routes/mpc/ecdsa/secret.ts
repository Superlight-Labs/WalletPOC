import { Context } from "@crypto-mpc";
import { SocketStream } from "@fastify/websocket";
import { db } from "@lib/dev-db";
import logger from "@lib/logger";
import { ActionStatus } from "../mpc-routes";
import { step } from "../step";

export const importGenericSecret = (connection: SocketStream) => {
  let context: Context;
  let status: ActionStatus = "Init";

  connection.socket.on("message", (message) => {
    switch (status) {
      case "Init":
        context = Context.createImportGenericSecretContext(2, 256, message);
        status = "Stepping";
        connection.socket.send(JSON.stringify({ value: "Start" }));
        break;

      case "Stepping":
        stepWithMessage(connection, message, context);
        break;
    }
  });

  connection.socket.on("error", (err) => {
    logger.error({ err }, "error");
  });
};

const stepWithMessage = (connection, message, context): void => {
  const stepOutput = step(message.toString(), context);

  if (stepOutput === true) {
    // TODO: Remove this in favor of real database
    db.shareBuf = context.getNewShare();

    connection.socket.close();
    return;
  }

  connection.socket.send(stepOutput);
};
