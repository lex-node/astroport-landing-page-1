import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Layout from "components/Layout";
import theme from "../theme";
import "./styles.css";

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

export default App;
