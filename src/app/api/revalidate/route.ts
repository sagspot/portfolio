// ./src/app/api/revalidate/route.ts
import { parseBody } from 'next-sanity/webhook';
import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  try {
    /**
       *  if (req.headers['x-validation-secret'] !== process.env.REVALIDATE_TOKEN)
          return res.status(401).json({ message: 'Invalid token' });
       */
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      revalidateSecret
    );

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      const message = 'Bad Request';
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    revalidateTag(body._type);

    return NextResponse.json({ revalidated: true, now: Date.now(), body });
  } catch (err) {
    console.error(err);
    const error = err instanceof Error ? err.message : 'Something went wrong';
    return new Response(error, { status: 500 });
  }
}
