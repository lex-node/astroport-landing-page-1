import React from "react";
import Head from "next/head";
import Page from "components/pages/error";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Custom404Page;
