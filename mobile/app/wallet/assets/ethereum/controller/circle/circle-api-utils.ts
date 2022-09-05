import { cirlceKey } from "./circle-config";

export const getFromCircle = async (endpoint: string) => {
  const res = await fetch("https://api-sandbox.circle.com/v1/" + endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cirlceKey,
    },
  });
  return res.json();
};

export const postToCircle = async (endpoint: string, params: string) => {
  const res = await fetch("https://api-sandbox.circle.com/v1/" + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + cirlceKey,
    },
    body: JSON.stringify({ params }),
  });
  return res.json();
};
