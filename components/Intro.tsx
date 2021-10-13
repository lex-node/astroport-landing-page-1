import React, { FC } from "react";
import {
  Box,
  Heading,
  Container,
  HStack,
  VStack,
  Flex,
  Button,
  Image,
  keyframes,
} from "@chakra-ui/react";

import SocialsNav from "components/SocialsNav";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;
const spinAnimation = `${spin} infinite 60s linear`;

const Hero = () => {
  return (
    <Container
      maxW="container.xl"
      px={["6", null, "12"]}
      my="24"
      textAlign="center"
      position="relative"
      centerContent
    >
      <Flex
        position={["static", null, null, null, "absolute"]}
        top="0"
        right={["6", null, "12"]}
        mb="16"
        w={["100%", null, null, null, "auto"]}
        justifyContent={["center", null, null, "flex-end"]}
      >
        <Box position="relative" width="170px" height="170px">
          <Image
            src="/diamond.png"
            alt="Astro"
            width="48px"
            height="61px"
            position="absolute"
            left="50%"
            top="50%"
            transform="auto"
            translateX="-50%"
            translateY="-50%"
          />
          <Box animation={spinAnimation}>
            <svg fill="white" width="170" viewBox="0 0 100 100">
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
                  letterSpacing="4px"
                  fontSize="13px"
                >
                  Hyper Speed &nbsp;&nbsp; Explained
                </textPath>
              </text>
            </svg>
          </Box>
        </Box>
      </Flex>
      <VStack color="white" spacing="16" fontSize="20px" maxW="container.sm">
        <Box>
          Hovering above the
          <Box display="inline-block" px="3">
            <Image
              src="/terra.png"
              alt="Terra"
              width="36px"
              height="36px"
              display="inline"
            />
          </Box>
          <strong>Terra ecosystem</strong>, Astroport is a neutral marketplace
          where anyone, from anywhere in the galaxy
          <HStack display="inline-block" spacing="4" px="4">
            <Image
              src="/mirror.png"
              alt="Mirror"
              width="36px"
              height="36px"
              display="inline"
            />
            <Image
              src="/orion.png"
              alt="Orion"
              width="48px"
              height="48px"
              display="inline"
            />
            <Image
              src="/anchor.png"
              alt="Anchor"
              width="36px"
              height="36px"
              display="inline"
            />
          </HStack>
          can dock to trade their wares.
        </Box>
        <Box>
          <strong>Decentralized, permissionless and open-source</strong>,
          Astroport’s marketplace is a public good governed by governed by its
          community of
          <Box display="inline-block" px="3" py="1">
            <Image
              src="/astro.png"
              alt="Astro"
              width="36px"
              height="36px"
              display="inline"
            />
          </Box>
          token holders.
        </Box>
        <Button
          as="a"
          variant="primary"
          href="/"
          size="sm"
          target="_blank"
          rel="noreferrer"
          textTransform="uppercase"
          fontWeight="500"
        >
          Learn more
        </Button>
        <SocialsNav />
      </VStack>
    </Container>
  );
};

export default Hero;
