import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { stacks } from '@/data/stacks';
import { ResponseType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

type Props = { resume: ResponseType<string>; about: ResponseType<string> };

export default function About({ resume, about }: Props) {
  return (
    <section
      id="about"
      className="container py-4 my-6 max-w-7xl sm:my-8 md:my-10 sm:py-6 md:py-8"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-32">
        <div className="flex flex-col">
          <h2>About Me</h2>

          <Suspense
            fallback={
              <div className="space-y-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-3/5 h-4" />
              </div>
            }
          >
            {about.success === 'false' ? (
              <p className="mt-6 text-destructive">{about.error}</p>
            ) : (
              <p className="mt-6">{about.data}</p>
            )}
          </Suspense>

          {resume.success === 'true' && (
            <div>
              <Button asChild className="mt-4">
                <Link href={resume.data} download target="_blank">
                  <AiOutlineFilePdf className="w-4 h-4 mr-2" />
                  Download my Resume
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-5 gap-3">
          {stacks.map((stack) => (
            <Image
              key={stack.name}
              src={stack.icon}
              alt={stack.name}
              width={50}
              height={50}
              className="object-contain w-auto h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
