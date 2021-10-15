import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  StackDivider,
  AspectRatio,
  Link,
} from "@chakra-ui/react";

import ReactPlayer from "react-player/lazy";

import HeroStat from "components/HeroStat";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

const Hero = () => {
  return (
    <Container maxW="container.xl" px={["6", null, "12"]} mt="12">
      <Box borderWidth="1px" borderColor="white">
        <Stack
          direction={{ base: "column", md: "row" }}
          divider={<StackDivider borderColor="white" />}
          spacing="0"
        >
          <Box px="6" py="4" pr="24" flex="1">
            <Heading
              fontSize={["5xl", null, "5xl"]}
              fontWeight="500"
              variant="brand"
            >
              Astroport. The future of trading.
            </Heading>
          </Box>
          <Link variant="cta" flex="0">
            <Flex align="center" height="100%">
              <Flex
                px={["6", null, "12", "20"]}
                py="4"
                align="flex-end"
                flex="1"
              >
                <ArrowRightIcon
                  width="1.25rem"
                  height="1.25rem"
                  mb="1"
                  mr="1"
                />
                <Text whiteSpace="nowrap">Start trading</Text>
              </Flex>
            </Flex>
          </Link>
        </Stack>
        <Box borderTop="1px" borderBottom="1px" color="white">
          <AspectRatio display="none" ratio={1920 / 1020}>
            <ReactPlayer
              url="/home.mp4"
              light="/home.jpg"
              width="100%"
              height="100%"
              loop
              muted
              controls={false}
              autoPlay={true}
            />
          </AspectRatio>
          <AspectRatio ratio={1920 / 1020}>
            <video loop autoPlay muted poster="/home.jpg">
              <source src="/home.mp4"></source>
            </video>
          </AspectRatio>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "6", md: "0" }}
          align="center"
          justifyContent="center"
          py="6"
          bg="brand.purple"
          divider={
            <StackDivider
              borderColor="white"
              width={{ base: "85px", md: "1px" }}
              alignSelf={{ base: "center", md: "stretch" }}
            />
          }
        >
          <HeroStat label="Liquidity" value="$1.6B" />
          <HeroStat label="24-hour trading volume" value="$203 million" />
        </Stack>
      </Box>
    </Container>
  );
};

export default Hero;
