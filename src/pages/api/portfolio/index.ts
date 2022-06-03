import fs from 'fs';
import AWS from 'aws-sdk';
import formidable from 'formidable-serverless';
import { NextApiRequest, NextApiResponse } from 'next';
import { PortfolioValues } from '../../../components/modal/portfolio/PortfolioModal';
import connectDB from '../../../lib/connectDB';
import { Portfolio } from '../../../models';

export interface ImageType extends File {
  path: string;
}

export interface FormFiles {
  image: ImageType;
}

export interface FormPromise {
  fields: PortfolioValues;
  files: FormFiles;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new AWS.S3({
  //   credentials: {
  accessKeyId: process.env.SAGSPOT_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SAGSPOT_AWS_SECRET_ACCESS_KEY,
  //   },
  region: process.env.SAGSPOT_AWS_REGION,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  switch (req.method) {
    case 'POST':
      const data = new Promise<FormPromise>((resolve, reject) => {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);

          resolve({ fields, files });
        });
      });

      try {
        const { fields, files } = await data;

        const fileName = `${Date.now()}-${files?.image.name}`;

        await Portfolio.create({
          ...fields,
          img: await uploadImage(fileName, files?.image.path),
        });

        res.status(200).json({ message: 'Portfolio added successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
      }

      break;

    default:
      res.status(405).json({
        message: `${req.method} requests not allowed for this endpoint.`,
      });
      break;
  }
}

const uploadImage = async (fileName: string, file: string) => {
  const params = { Bucket: process.env.SAGSPOT_AWS_BUCKET, Key: fileName };

  try {
    const { Location } = await s3
    .upload({ ...params, Body: fs.readFileSync(file) })
    .promise();
    
    // .upload({ ...params, Body: fs.createReadStream(file) })
    // const url = s3.getSignedUrl('getObject', params);

    return Location;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
