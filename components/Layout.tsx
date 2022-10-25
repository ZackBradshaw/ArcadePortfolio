import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CRT from "./CRT";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Zack Bradshaw" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="layout-container">
      <NavBar />
      <CRT>{children}</CRT>
      <Footer />
    </div>
  </div>
);

export default Layout;
