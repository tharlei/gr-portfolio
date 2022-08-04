import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fonts } from '../components/Head/Fonts';

export default class NextDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Fonts />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
