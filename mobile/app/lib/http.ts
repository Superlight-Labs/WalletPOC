import { CreateNonceResponse } from "api-types/auth";
import { User } from "api-types/user";
import { Platform } from "react-native";
import { apiKeys } from "../wallet/assets/bitcoin/blockchain/endpoints";
import { signWithDeviceKeyNoAuth } from "./auth";

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
}

export const fetchFromApi = async <T>(path: string, params?: HttpParams): Promise<T> => {
  const { nonce } = await fetchFrom<CreateNonceResponse>(getApiUrl("http") + "/getNonce");
  const deviceSignature = await signWithDeviceKeyNoAuth(nonce);

  const paramsWithSignature = {
    ...params,
    args: {
      ...params?.args,
      headers: {
        ...params?.args?.headers,
        deviceSignature,
      },
    },
  };

  return fetchFrom(getApiUrl("http") + path, paramsWithSignature);
};

export const fetchFromApiAuthenticated = async <T>(path: string, user: User, params?: HttpParams): Promise<T> => {
  const { id: userId, devicePublicKey } = user;
  const { nonce } = await fetchFrom<CreateNonceResponse>(getApiUrl("http") + "/getNonce");
  const deviceSignature = await signWithDeviceKeyNoAuth(nonce);

  const paramsWithSignature = {
    ...params,
    args: {
      ...params?.args,
      headers: {
        ...params?.args?.headers,
        deviceSignature,
        userId,
        devicePublicKey,
      },
    },
  };

  return fetchFrom(getApiUrl("http") + path, paramsWithSignature);
};

export const fetchFromTatum = async <T>(url: string, params?: HttpParams): Promise<T> => {
  return fetchFrom(url, {
    ...params,
    args: {
      ...params?.args,
      headers: {
        ...params?.args?.headers,
        "x-api-key": apiKeys.tatum,
      },
    },
  });
};

const fetchFrom = async <T>(url: string, params?: HttpParams): Promise<T> => {
  const { body, method, args } = params || {};

  const response = await fetch(url, {
    method: determineMethod(body, method),
    body: JSON.stringify(body),
    headers: {
      ...args?.headers,
      "Content-Type": "application/json",
    },
  });

  const content: T = await response.json();

  if (!response.ok) {
    console.error("Error from API, possibly show snackbar", content);
  }

  return content;
};

const determineMethod = (body?: any, method?: HttpMethod): HttpMethod => {
  if (!!method) return method;

  if (body) return HttpMethod.POST;

  return HttpMethod.GET;
};

export const getApiUrl = (protocol: "ws" | "http"): string => {
  const localIp = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";

  return `${protocol}://${localIp}:8080`;
};

export type HttpParams = {
  args?: RequestInit;
  method?: HttpMethod;
  body?: any;
};
