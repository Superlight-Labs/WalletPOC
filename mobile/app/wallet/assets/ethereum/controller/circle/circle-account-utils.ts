import { getFromCircle } from "./circle-api-utils";

export const getCircleConfiguration = async () => {
  const configuration = await getFromCircle("configuration");
  console.log("Configuration: ", configuration);
};
