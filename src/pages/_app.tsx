import { AppProps } from 'next/app';
import '../assets/global.scss';

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
