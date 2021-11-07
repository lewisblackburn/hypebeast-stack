import { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "../styles/index.css";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

