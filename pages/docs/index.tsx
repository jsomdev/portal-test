import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
const Documentation: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Documentation</h1>
    </div>
  );
};

export default Documentation;
