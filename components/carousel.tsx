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
} from "@chakra-ui/react";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";

import Lottie from "react-lottie";
import * as animationHero from "../public/hero.json";

const MotionHStack = motion(HStack);

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;
const spinAnimation = `${spin} infinite 60s linear`;

const Carousel = () => {
  const { scrollY } = useViewportScroll();
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
      pt="4"
      pb={["16", null, null, "20"]}
      bg="linear-gradient(180deg, #3122AA 0%, #0C044A 100%)"
      minHeight={[null, null, null, "100vh"]}
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
        <MotionHStack
          fontSize="28px"
          whiteSpace="nowrap"
          spacing="3"
          mb={["10", null, "16", "28"]}
          style={{
            x: useTransform(scrollY, [1000, 2000], [-100, 50]),
          }}
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
        </MotionHStack>
        <Container maxW="container.xl" px={["8", null, "12"]} color="white">
          <Stack
            spacing={["8", null, "5%"]}
            direction={["column", null, null, "row"]}
            justify="space-between"
          >
            <VStack spacing={["4", null, "6"]} align="flex-start" width="45%">
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
              <Text fontSize="18px" pb={["10", null, "20"]}>
                Programmable liquidity
                <br />
                All-new Rust code
                <br />
                Oracle integration
                <br />
                Easy dapp integration
              </Text>
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
                  LBPs
                </Text>
              </Box>
            </VStack>
            <Box position="relative" w="100%" pt={["10", null, "0"]}>
              <Box
                position="absolute"
                top={["0", null, "10%"]}
                left={["0", null, "10%"]}
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
