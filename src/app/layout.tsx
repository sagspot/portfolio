// import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
// import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteConfig = {
  name: 'Oliver Sagala Portfolio',
  description:
    "Oliver Sagala's professional portfolio: Showcasing expertise in software development with NextJS, React, and ExpressJS. Simplifying life through technology",
  url: 'https://sagspot.co.ke',
  logo: {
    url: 'https://sagspot.co.ke/logo.png',
    width: 216,
    height: 72,
    alt: 'Sagspot Logo',
    type: 'image/png',
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'nextjs',
    'react',
    'expressjs',
    'software developer',
    'web developer',
    'backend developer',
    'frontend developer',
    'fullstack developer',
    'oliver sagala',
    'sagspot',
  ],
  authors: [{ name: 'Oliver Sagala', url: 'https://sagspot.co.ke' }],
  creator: 'Oliver Sagala',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en-KE',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.logo],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.logo],
    creator: '@sagspot',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
      {/* <GoogleTagManager gtmId={env.GTM_ID} /> */}
    </html>
  );
}
