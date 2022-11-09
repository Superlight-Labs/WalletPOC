import logger from "@lib/logger";
import fetch, { RequestInit } from "@lib/utils/fetch";
import { HttpParams } from "../endpoints";
import { CircleResponse } from "./circle";

export const cirlceKey =
  "QVBJX0tFWTpmZjUxMGE3ZWZjODk3ODhmNGQ1MDg0MGZkMDA1ZjdlMjo5MTJmZDIxNjJjOTg5ZWY3N2Y4YmFkZjY2ZjQ5N2EwMQ";

const baseUrl = "https://api-sandbox.circle.com/v1";

export const fetchFromCircle = async <T>(path: string, params?: HttpParams): Promise<T> => {
  const paramsWithApiKey: RequestInit = {
    ...params,
    headers: {
      ...params?.args?.headers,
      Authorization: "Bearer " + cirlceKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params?.body),
  };

  const res = await fetch(baseUrl + path, paramsWithApiKey);
  const content: CircleResponse<T> = await res.json();

  if (!res.ok) {
    logger.error({ error: content }, "Error from Circle API");
    throw new Error("Error from Circle Api");
  }

  return content.data;
};
