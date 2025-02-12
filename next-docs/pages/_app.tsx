import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/themes.css';
import '../styles/custom.css';

import Layout from '../components/Layout';
import React from 'react';
import { DocsThemeProvider } from '../components/themes/DocsThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO Add favicon.ico*/}
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DocsThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DocsThemeProvider>
    </>
  );
}
export default MyApp;
