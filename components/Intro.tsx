import React, { FC } from "react";
import {
  Box,
  Container,
  HStack,
  VStack,
  Flex,
  Button,
  Image,
  keyframes,
  AspectRatio,
} from "@chakra-ui/react";

import Lottie from "react-lottie";
import * as animationTerra from "../public/terra.json";
import * as animationAstro from "../public/astro.json";

import SocialsNav from "components/SocialsNav";
import ImmunefiBanner from "components/ImmunefiBanner";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;
const spinAnimation = `${spin} infinite 60s linear`;

const Hero = () => {
  const terraOptions = {
    loop: true,
    autoplay: true,
    animationData: animationTerra,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const astroOptions = {
    loop: true,
    autoplay: true,
    animationData: animationAstro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
                  fontSize="12px"
                >
                  HYPER SPEED &nbsp; EXPLAINED
                </textPath>
              </text>
            </svg>
          </Box>
        </Box>
      </Flex>
      <VStack
        color="white"
        spacing="16"
        fontSize="20px"
        maxW="container.sm"
        id="about"
      >
        <Box>
          Hovering above the
          <Box display="inline-block" px="2" mb="-3">
            <AspectRatio ratio={1} width="50px">
              <Lottie options={terraOptions} />
            </AspectRatio>
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
          Astroport’s marketplace is a public good governed by its community of
          <br />
          <Box display="inline-block" px="1" mb="-5">
            <AspectRatio ratio={1} width="64px">
              <Lottie options={astroOptions} />
            </AspectRatio>
          </Box>
          token holders.
        </Box>
        <Button
          as="a"
          variant="primary"
          href="https://astroport.medium.com/astroport-litepaper-1fab783b77b5"
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
      <ImmunefiBanner />
    </Container>
  );
};

export default Hero;
