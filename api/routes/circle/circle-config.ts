import fetch, { RequestInit } from "node-fetch";

export const cirlceKey =
  "QVBJX0tFWTpmZjUxMGE3ZWZjODk3ODhmNGQ1MDg0MGZkMDA1ZjdlMjo5MTJmZDIxNjJjOTg5ZWY3N2Y4YmFkZjY2ZjQ5N2EwMQ";

const baseUrl = "https://api-sandbox.circle.com/v1/";

export const fetchFromCircle = async <T>(path: string, params?: HttpParams): Promise<T> => {
  const paramsWithApiKey = {
    ...params,
    headers: {
      ...params?.args?.headers,
      Authorization: "Bearer " + cirlceKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(baseUrl + path, paramsWithApiKey);
  console.log("params ", paramsWithApiKey);
  const content: T = await res.json();
  if (!res.ok) {
    console.error("Error from Circle API, possibly show snackbar", content);
  }

  return content.data;
};

export type HttpParams = {
  args?: RequestInit;
  method?: HttpMethod;
  body?: any;
};

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
}
