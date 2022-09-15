import logger from "@lib/logger";
import request from "request";
import MessageValidator from "sns-validator";
import { Amount, CircleNotification, Settlement } from "./envelope";
import { triggerPaymentToUser } from "./envelope.endpoint";
const validator = new MessageValidator();

const circleArn = /^arn:aws:sns:.*:908968368384:(sandbox|prod)_platform-notifications-topic$/;

export const handleEnvelopePost = async (envelope: any): Promise<void> => {
  validator.validate(envelope, async (err) => {
    if (err) {
      logger.error({ err }, "Invalid Request Body");
      throw { code: 400, message: "Invalid Request body", type: "CircleServiceError" };
    }

    logger.info({ envelope }, "Message validated successfully");

    switch (envelope.Type) {
      case "SubscriptionConfirmation": {
        processSubscriptionConfirmation(envelope);
        break;
      }
      case "Notification": {
        await processNotification(JSON.parse(envelope.Message));
        break;
      }
      default: {
        console.error(`Message of type ${envelope.Type} not supported`);
      }
    }
  });
};

const processNotification = async (message: CircleNotification) => {
  logger.info({ message }, "Recieved message");

  if (message.settlement === undefined) return;

  await triggerPaymentToUser(message.settlement.id, calculateAmount(message.settlement));
};

const calculateAmount = (settlement: Settlement): Amount => {
  const { totalCredits, paymentFees } = settlement;

  const brutto = Number.parseFloat(totalCredits.amount);
  const fees = Number.parseFloat(paymentFees.amount);
  const netto = brutto - fees;

  return { amount: netto.toFixed(2), currency: totalCredits.currency };
};

const processSubscriptionConfirmation = (envelope: any) => {
  if (!circleArn.test(envelope.TopicArn)) {
    logger.error(
      { envelope },
      `Unable to confirm the subscription as the topic arn is not expected ${envelope.TopicArn}. Valid topic arn must match ${circleArn}.`
    );
    return;
  }

  request(envelope.SubscribeURL, (err) => {
    if (err) {
      logger.error({ err }, "Subscription NOT confirmed.");
    } else {
      logger.info("Subscription confirmed.");
    }
  });
};
