import NoImage from '@/../public/no-image.jpg';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IPortfolio } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';
import { VscGithubAlt } from 'react-icons/vsc';

type Props = {
  projects: IPortfolio[];
};

export default function Portfolio({ projects }: Props) {
  return (
    <section
      id="portfolio"
      className="py-4 sm:py-6 md:py-10 bg-sky-50 dark:bg-sky-800"
    >
      <div className="container max-w-7xl">
        <h2 className="text-center">My Portfolio</h2>

        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ _id, title, description, github, mainImage, previewUrl }) => (
              <div className="flex items-center justify-center" key={_id}>
                <Card className="group flex p-6 mt-16 w-full max-w-full sm:max-w-[352px] flex-col rounded-xl items-center border-1 border-gray-100 dark:border-gray-600 shadow-xl bg-white dark:bg-blue-700">
                  <Card className="w-[80%] h-[135px] -mt-16 rounded-base border-8 border-gray-50 dark:border-blue-700 bg-gray-50 dark:bg-blue-700 overflow-hidden shadow-[0_0_8px_1px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-150 group-hover:border-2">
                    <div className="relative w-full h-full overflow-hidden transition-all duration-150 ease-in-out scale-110 rounded-md group-hover:scale-105">
                      <Image
                        src={mainImage || NoImage}
                        alt={title || 'Project Image'}
                        fill
                        draggable={false}
                        sizes="(max-width: 352px) 80vw, 352px"
                        className="object-cover"
                      />
                    </div>
                  </Card>

                  <CardContent className="w-full pt-6">
                    <h3>{title}</h3>

                    <p className="mt-1 text-sm">{description}</p>
                  </CardContent>

                  <CardFooter className="flex items-center justify-center w-full gap-2">
                    {!!github ? (
                      <Link
                        href={github}
                        aria-label={`View source code for ${title}`}
                        className={buttonVariants({ className: '' })}
                        target="_blank"
                      >
                        <VscGithubAlt className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    ) : (
                      <Button disabled aria-disabled>
                        <VscGithubAlt className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}

                    {!!previewUrl ? (
                      <Link
                        href={previewUrl}
                        aria-label={`Preview ${title}`}
                        className={buttonVariants({ className: '' })}
                        target="_blank"
                      >
                        <TbExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Link>
                    ) : (
                      <Button
                        disabled
                        aria-disabled
                        aria-label={`Preview ${title}`}
                      >
                        <TbExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
