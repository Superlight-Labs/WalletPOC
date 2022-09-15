import logger from "@lib/logger";
import request from "request";
import MessageValidator from "sns-validator";
const validator = new MessageValidator();

const circleArn = /^arn:aws:sns:.*:908968368384:(sandbox|prod)_platform-notifications-topic$/;

export const handleEnvelopePost = async (envelope: any): Promise<void> => {
  validator.validate(envelope, (err) => {
    if (err) {
      logger.error({ err }, "Invalid Request Body");
      throw { code: 400, message: "Invalid Request body", type: "CircleServiceError" };
    }

    logger.info({ envelope }, "Envelope validated successfully");

    switch (envelope.Type) {
      case "SubscriptionConfirmation": {
        processSubscriptionConfirmation(envelope);
        break;
      }
      case "Notification": {
        console.log(`Received message ${envelope.Message}`);
        break;
      }
      default: {
        console.error(`Message of type ${envelope.Type} not supported`);
      }
    }
  });
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
