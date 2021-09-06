import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

import HeroStat from "components/HeroStat";

const Hero = () => {
  return (
    <Box maxW="container.xl" margin="0 auto" px={["6", null, "12"]} mt="12">
      <Box borderWidth="1px" borderColor="white">
        <Flex align="center" justify="space-between">
          <Box
            px="6"
            py="4"
            pr="24"
            borderRightWidth="1px"
            borderRightColor="white"
          >
            <Heading
              fontSize={["5xl", null, "5xl"]}
              fontWeight="500"
              color="white"
            >
              Astroport. The future of trading.
            </Heading>
          </Box>
          <Box px="6" py="4" flex="1">
            <Text
              fontSize={["lg", null, "xl"]}
              textTransform="uppercase"
              textAlign="center"
              color="white"
            >
              Start trading
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image src="/home.jpg" alt="Illustration" />
        </Box>
        <Flex>
          <HeroStat label="Liquidity" value="$1.6B" />
          <HeroStat label="24-hour trading volume" value="$203 million" />
          <HeroStat label="Tradable tokens" value="44" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
