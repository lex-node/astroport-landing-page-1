import React from "react";
import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  Heading,
  VStack,
  keyframes,
  AspectRatio,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import Lottie from "react-lottie";
import * as animationHero from "../public/hero.json";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;
const spinAnimation = `${spin} infinite 60s linear`;

const Carousel = () => {
  const heroOptions = {
    loop: true,
    autoplay: true,
    animationData: animationHero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box
      pt="6"
      pb={["16", null, null, "20"]}
      bg="linear-gradient(180deg, #3122AA 0%, #0C044A 100%)"
      minHeight={[null, null, null, "100vh", "0"]}
      position="relative"
      overflow="hidden"
      justify="center"
    >
      <Box
        bg="url('/bg-core-features.png')"
        bgRepeat="no-repeat"
        bgPosition="bottom"
        bgSize="cover"
        width="100%"
        height="100%"
        inset="0"
        position="absolute"
        zIndex="5"
      ></Box>
      <Box position="relative" zIndex="10">
        <HStack
          fontSize="28px"
          whiteSpace="nowrap"
          spacing="3"
          float="right"
          mb={["10", null, "16", "28"]}
          className="translate-carousel"
        >
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
          <Text textTransform="uppercase" color="white">
            Astroport Specs
          </Text>
        </HStack>
        <Container
          maxW="container.xl"
          px={["8", null, "12"]}
          color="white"
          className="wrapper-after-translate"
        >
          <Stack
            spacing={["8", null, "5%"]}
            direction={["column", null, null, "row"]}
            justify="space-between"
          >
            <VStack
              spacing={["4", null, "6"]}
              align="flex-start"
              width={["100%", null, null, "45%"]}
            >
              <Heading
                as="h2"
                fontSize={["32px", null, "64px"]}
                lineHeight="1.2"
                fontWeight="400"
                textTransform="uppercase"
                mb={["4", null, null, "0"]}
              >
                Core
                <br />
                Features
                <sup className="heading__sup">01</sup>
              </Heading>
              <UnorderedList
                fontSize="18px"
                pb={["10", null, "20"]}
                fontWeight="normal"
              >
                <ListItem>Programmable liquidity</ListItem>
                <ListItem>All-new Rust code</ListItem>
                <ListItem>Oracle integration</ListItem>
                <ListItem>Easy dapp integration</ListItem>
              </UnorderedList>
              <Box borderTop="1px" color="white" pr="10" pt="4">
                <Heading
                  as="h3"
                  fontSize="18px"
                  lineHeight="1.2"
                  fontWeight="400"
                  textTransform="uppercase"
                  mb={["10", null, null, "10"]}
                >
                  Liquidity pool options
                </Heading>
                <Text fontSize="18px">
                  x*y=k
                  <br />
                  Stableswap
                  <br />
                  Liquidity Bootstrapping Pools
                </Text>
              </Box>
            </VStack>
            <Box position="relative" w="100%" pt={["10", null, "0"]}>
              <Box
                position="absolute"
                top={["0", null, null, "5%", "10%"]}
                left={["0", null, null, "5%", "10%"]}
                width="230px"
                height="230px"
                zIndex="20"
              >
                <Box animation={spinAnimation}>
                  <svg fill="white" width="230" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circlePath"
                        d="M6,50a44,44 0 1,0 88,0a44,44 0 1,0 -88,0"
                        stroke="#fff"
                      ></path>
                    </defs>
                    <text>
                      <textPath
                        href="#circlePath"
                        letterSpacing="1px"
                        fontSize="9px"
                      >
                        AUTONOMOUS&nbsp;&nbsp;&nbsp;OPEN-SOURCE&nbsp;&nbsp;&nbsp;DECENTRALIZED
                      </textPath>
                    </text>
                  </svg>
                </Box>
              </Box>
              <AspectRatio ratio={1668 / 1406}>
                <Lottie options={heroOptions} />
              </AspectRatio>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Carousel;
