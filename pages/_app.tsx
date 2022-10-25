import "../styles/Layout.scss";
import "../styles/NavBar.scss";
import "../styles/Footer.scss";
import "../styles/CRT.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
