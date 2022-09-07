import { User } from "api-types/user";
import { fetchFromApiAuthenticated, HttpMethod } from "lib/http";

export const createCircleWallet = async (user: User) => {
  const newCircleWallet = await fetchFromApiAuthenticated("/circle/create-wallet", user, {
    method: HttpMethod.POST,
    body: JSON.stringify({ test: "Test" }),
  });
  console.log(newCircleWallet);
};

export const createCircleAddress = async (user: User) => {
  const newCircleAddress = await fetchFromApiAuthenticated("/circle/create-address", user, {
    method: HttpMethod.POST,
    body: { currency: "USD", chain: "MATIC" },
  });
  console.log(newCircleAddress);
};
