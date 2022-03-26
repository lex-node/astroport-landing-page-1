import React from "react";
import Head from "next/head";
import Page from "components/pages/error";
import { NextPage } from "next";
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={404} />
    </>
  );
};

export default Custom404Page;

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }