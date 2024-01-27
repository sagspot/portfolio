import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <React.Fragment>
      <Image
        src={'/logo.png'}
        alt="sagspot logo"
        width={150}
        height={41}
        className="dark:hidden"
      />
      <Image
        src={'/logo-white.png'}
        alt="sagspot logo"
        width={150}
        height={41}
        className="hidden dark:block"
      />
    </React.Fragment>
  );
}
