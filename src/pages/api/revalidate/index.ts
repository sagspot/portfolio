import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  switch (method) {
    case 'POST':
      try {
        if (req.headers['x-validation-secret'] !== process.env.REVALIDATE_TOKEN)
          return res.status(401).json({ message: 'Invalid token' });

        await res.revalidate('/');
        return res.json({ revalidated: true });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }

    default:
      res
        .status(405)
        .json({ message: `${method} requests not allowed for this endpoint.` });
      break;
  }
}
