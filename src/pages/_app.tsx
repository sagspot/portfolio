import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import SEO from '../../next-seo.config';
import { GTM_ID } from '../lib/gtm';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Script
        id="gtag-dataLayer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: 'window.dataLayer = window.dataLayer || [];',
        }}
      />
      <DefaultSeo {...SEO} />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
