import React from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Layout from "components/Layout";
import theme from "../theme";
import "./styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
