import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// import LiveBanner from "components/liveBanner";
import Hero from "components/Hero";
import Intro from "components/Intro";
import NoisePattern from "components/Noisepattern";
import RadialGradient from "components/RadialGradient";
import Navbar from "components/Navbar";
import Carousel from "components/carousel";
import Content from "components/Content";
import Footer from "components/Footer";

const TCBanner = dynamic(() => import("components/TCBanner"), {
  ssr: false,
});

const Home = () => {
  return (
    <Box>
      <RadialGradient />
      <NoisePattern />
      <TCBanner />
      <Box position="relative" zIndex="10">
        <Navbar />
        {/* <LiveBanner /> */}
        <Hero />
        <Intro />
        <Carousel />
        <Content />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
