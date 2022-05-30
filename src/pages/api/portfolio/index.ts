import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../lib/connectDB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  await connectDB();

  switch (method) {
    case 'POST':
      try {
        res.status(200).json({ message: 'Portfolio', body });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }

      break;

    default:
      res
        .status(405)
        .json({ message: `${method} requests not allowed for this endpoint.` });
      break;
  }
}
