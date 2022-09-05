import { fetchFromApi } from "lib/http";
import { getFromCircle } from "./circle-api-utils";

export const getCircleConfiguration = async () => {
  const configuration = await getFromCircle("configuration");
  console.log("Configuration: ", configuration);
};

export const createCircleWallet = async () => {
  const newCircleWallet = await fetchFromApi("/circle/create-wallet");
  console.log(newCircleWallet);
};
