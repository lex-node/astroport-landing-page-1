import React from "react";
import Head from "next/head";
import Page from "components/pages/error";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface iProps {
  statusCode: number;
}

const Error: NextPage<iProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Error;
