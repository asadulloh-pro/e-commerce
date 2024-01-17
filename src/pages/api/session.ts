import { NextApiRequest, NextApiResponse } from "next";
import { getIronSession } from "iron-session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getIronSession<{ info: Record<string, string> }>(
    req,
    res,
    {
      password: "qwer1234",
      cookieName: "default_name",
    }
  );
  session.info = { name: "Asadulloh" };
  await session.save();
  res.status(200).json({});
}
