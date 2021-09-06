import React, { FC } from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

import IntroItem from "components/IntroItem";

const Hero = () => {
  return (
    <Box
      maxW="container.md"
      margin="0 auto"
      px={["6", null, "12"]}
      py="24"
      textAlign="center"
    >
      <Box color="white" mx="auto" maxW="lg">
        <IntroItem
          title="✦ what is astroport? ✦"
          body="An automated, decentralized liquidity protocol on the Terra
            blockchain where anyone can trade any Terra-based asset 24/7."
          cta="Learn more"
          mb="12"
        />
        <IntroItem
          title="✦ how does it work? ✦"
          body="Fund your Terra Station wallet with Terra-based tokens and connect
          with Astroport to start swapping LUNA and CW20 tokens now."
          cta="Trade now"
          mb="12"
        />
        <IntroItem
          title="✦ what is $astro? ✦"
          body="Astroport’s native token rewards liquidity providers (LPs), gives you voting power on the Astral Council and entitles stakers to a cut of fees."
          cta="Learn more"
        />
      </Box>
    </Box>
  );
};

export default Hero;
