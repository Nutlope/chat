import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="AI Chat powered by Mixtral MOE and Together.ai."
          />
          <meta property="og:site_name" content="simple-ai-chat.vercel.app" />
          <meta
            property="og:description"
            content="AI Chat powered by Mixtral MOE and Together.ai."
          />
          <meta property="og:title" content="Twitter Bio Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Twitter Bio Generator" />
          <meta
            name="twitter:description"
            content="AI Chat powered by Mixtral MOE and Together.ai."
          />
          <meta
            property="og:image"
            content="https://simple-ai-chat.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://simple-ai-chat.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
