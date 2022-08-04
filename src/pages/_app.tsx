import { AppProps } from 'next/app';
import '../assets/global.scss';

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
