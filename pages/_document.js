import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "@/lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script async src="https://cdn.splitbee.io/sb.js" />

          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* TODO */}
          {/* <meta
            content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
            name="google-site-verification"
          /> */}
        </Head>
        <body className="bg-white dark:bg-zinc-900 text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
