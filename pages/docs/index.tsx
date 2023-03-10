import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

const Documentation: NextPage = () => {
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

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      userAgent: context.req.headers['user-agent']
    }
  };
};

export default Documentation;
