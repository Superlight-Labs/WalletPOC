import { fetchFrom, HttpMethod } from "@lib/fetch";
import logger from "@lib/logger";
import { Amount } from "./envelope";

export const triggerPaymentToUser = async (cardId: string, amount: Amount): Promise<void> => {
  await fetchFrom(config.mainApiUrl + "/circle/trigger-payment", { method: HttpMethod.POST, body: { cardId, amount } })
    .then((result) => logger.info({ result }, "Api started final transfer to client"))
    .catch((err) => logger.error({ err }, "Error from Main API"));
};
