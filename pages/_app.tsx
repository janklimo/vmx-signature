import "whatwg-fetch";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
