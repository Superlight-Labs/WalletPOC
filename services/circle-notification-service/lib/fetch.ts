import { RequestInfo, RequestInit, Response } from "node-fetch";
import logger from "./logger";

export type { RequestInfo, RequestInit, Response };
export type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

// Workaround for typescript to accept global fetch
const fetch = (global as any).fetch as Fetch;

export type HttpParams = {
  args?: RequestInit;
  method?: HttpMethod;
  body?: any;
};

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
}

export const fetchFrom = async <T>(url: string, params?: HttpParams): Promise<T> => {
  const paramsWithApiKey: RequestInit = {
    ...params,
    headers: {
      ...params?.args?.headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params?.body),
  };

  const res = await fetch(url, paramsWithApiKey);
  const content: T = await res.json();

  if (!res.ok) {
    logger.error({ error: content }, "Error from Circle API");
    throw new Error("Error from Circle Api");
  }

  return content;
};
