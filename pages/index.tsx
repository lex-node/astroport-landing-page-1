import React from "react";
import { NextSeo } from "next-seo";
import { NextPage } from "next";

import Home from "components/pages/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Astroport. The future of trading."
        description="Maximize your yields in the Terra ecosystem with Terra’s first yield optimizer and liquidation protector vaults "
        openGraph={{
          url: "https://website-iota-umber.vercel.app/",
          title: "Astroport. The future of trading.",
          description:
            "Maximize your yields in the Terra ecosystem with Terra’s first yield optimizer and liquidation protector vaults ",
          images: [
            {
              url: "https://website-iota-umber.vercel.app/banner.jpg",
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
