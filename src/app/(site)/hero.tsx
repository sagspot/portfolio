import HeroBg from '@/../public/forest.jpg';
import ProfilePic from '@/../public/sagala.jpg';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      //   backgroundColor={useColorModeValue('brand.100', 'brand.300')}

      className="flex w-full h-[90vh] relative bg-cover bg-no-repeat bg-blend-multiply bg-primary-foreground dark:bg-primary isolate"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-[1] bg-sky-800">
        <Image
          src={HeroBg}
          alt="hero background"
          fill
          className="object-fill"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 px-4 md:py-8 bg-gradient-to-r from-black/60 from-40% to-transparent dark:to-black/20">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-2 border-whiteAlpha.800">
          <Image
            src={ProfilePic}
            alt="Oliver Sagala portrait"
            style={{ objectFit: 'contain' }}
            placeholder="blur"
          />
        </div>

        <p className="text-3xl font-bold text-center text-white md:text-4xl">
          Hi, I&apos;m Oliver Sagala
        </p>

        <p className="text-base text-center text-white uppercase md:text-lg">
          I&apos;m a Software Developer
        </p>

        <Link
          href="/#about"
          className={buttonVariants({ className: 'uppercase min-w-[200px]' })}
        >
          More
        </Link>
      </div>
    </section>
  );
}
