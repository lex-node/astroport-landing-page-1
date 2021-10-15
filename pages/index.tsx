import React from "react";
import { NextSeo } from "next-seo";
import { NextPage } from "next";

import Home from "components/pages/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Astroport. The future of trading."
        description="An intergalactic AMM/DEX where adventurers can dock, swap and provide liquidity. Powered by the Terra blockchain."
        openGraph={{
          url: "https://website-ten-navy.vercel.app/",
          title: "Astroport. The future of trading.",
          description:
            "An intergalactic AMM/DEX where adventurers can dock, swap and provide liquidity. Powered by the Terra blockchain.",
          images: [
            {
              url: "https://website-ten-navy.vercel.app/banner.jpg",
            },
          ],
          site_name: "AstroportProtocol",
        }}
        twitter={{
          handle: "@AstroportProtocol",
          site: "@AstroportProtocol",
          cardType: "summary_large_image",
        }}
      />
      <Home />
    </>
  );
};

export default HomePage;
