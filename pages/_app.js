import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import Banner from "@/components/Banner";
import { Hanken_Grotesk } from "next/font/google";

import MDXComponents from "@/components/MDXComponents";
import Chat from "@/components/Chat";

import { SessionProvider } from "next-auth/react";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <div className={hanken.variable}>
        <ThemeProvider attribute="class">
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
            <Chat />
          </MDXProvider>
        </ThemeProvider>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
