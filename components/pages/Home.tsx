import React from "react";
import { Box } from "@chakra-ui/react";

import Hero from "components/Hero";
import Intro from "components/Intro";

const Home = () => {
  return (
    <Box position="relative" zIndex="1">
      <Hero />
      <Intro />
    </Box>
  );
};

export default Home;
