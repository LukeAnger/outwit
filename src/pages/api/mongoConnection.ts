import dbConnect from "@/utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function mongoConnection(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        // what to do on GET request
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    case "POST":
      try {
        // what to do on POST request
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    default:
      res.status(400).json({ success: false })
      break;
  }
}