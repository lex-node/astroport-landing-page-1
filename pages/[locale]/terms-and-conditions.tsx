import React from "react";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import TC from "components/pages/TC";

const TCPage: NextPage = () => {
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
      <TC />
    </>
  );
};

export default TCPage;

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
