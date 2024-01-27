import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';

const contacts = [
  {
    content: '+254 703 215 696',
    href: 'tel:+254703215696',
    icon: BsTelephoneOutboundFill,
  },
  {
    content: 'hello@sagspot.co.ke',
    href: 'mailto:hello@sagspot.co.ke',
    icon: MdMarkEmailUnread,
  },
];

export default function Contact() {
  return (
    <section className="container max-w-7xl" id="contact">
      <div className="flex flex-col gap-6 py-4 sm:py-6 md:py-16">
        <h2 className="text-center">Get in Touch</h2>

        <div className="flex flex-col items-center gap-2 sm:flex-row justify-evenly">
          {contacts.map(({ content, href, ...rest }) => (
            <Link href={href} key={href} target="_blank">
              <Card className="shadow-lg bg-primary/80 hover:shadow-[0_2px_7px_4px_rgba(0,0,0,0.1)] hover:bg-primary/90 transition-all hover:text-white">
                <CardContent className="flex items-center gap-2 pt-6">
                  <rest.icon className="w-12 h-12 p-3 text-white rounded-full shadow-md bg-primary" />
                  <p className="">{content}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
