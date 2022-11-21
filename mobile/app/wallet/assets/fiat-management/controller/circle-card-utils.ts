import { User } from "api-types/user";
import { fetchFromApiAuthenticated } from "lib/http";

export const getPublicKey = (user: User) => {
  fetchFromApiAuthenticated<string>("/circle/get-public-key", user);
};
