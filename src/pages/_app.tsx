import { AppProps } from 'next/app';
import '../assets/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
