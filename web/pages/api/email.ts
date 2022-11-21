import { NextApiRequest, NextApiResponse } from "next";

const postEmail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400);
  }

  return res.status(200).json({ hello: "world" });
};

export default postEmail;
