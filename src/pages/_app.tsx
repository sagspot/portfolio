import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import store, { persistor } from '../app/store';
import theme from '../theme';
import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <NextNProgress color="#161612" />
            <DefaultSeo {...SEO} />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
