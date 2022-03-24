import React from "react";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "components/pages/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Astroport. The future of trading."
        description="An intergalactic AMM/DEX where adventurers can dock, swap and provide liquidity. Powered by the Terra blockchain."
        openGraph={{
          url: "https://astroport.fi.vercel.app/",
          title: "Astroport. The future of trading.",
          description:
            "An intergalactic AMM/DEX where adventurers can dock, swap and provide liquidity. Powered by the Terra blockchain.",
          images: [
            {
              url: "https://astroport.fi/banner.jpg",
            },
          ],
          site_name: "AstroportProtocol",
        }}
        twitter={{
          handle: "@astroport_fi",
          site: "@astroport_fi",
          cardType: "summary_large_image",
        }}
      />
      <Home />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default HomePage;
