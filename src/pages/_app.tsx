import { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/global.scss';

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Giovanna Ramaldo</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio Giovanna Ramaldo"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
