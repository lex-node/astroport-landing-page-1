import React from "react";
import {
  Box,
  Container,
  HStack,
  Button,
  Stack,
  Text,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";

const Content = () => {
  return (
    <Box pt={["10", null, "16", "28"]} pb={["16", null, null, "20"]}>
      <Container maxW="container.xl" px={["8", null, "12"]} color="white">
        <VStack spacing="34">
          <Stack
            spacing={["30px", null, "5%"]}
            direction={["column", null, "row"]}
            align="center"
            justify="space-between"
          >
            <VStack
              spacing="6"
              align="flex-start"
              width={["100%", null, "45%"]}
            >
              <Heading
                as="h2"
                fontSize={["32px", null, "40px"]}
                lineHeight="1.2"
                fontWeight="400"
              >
                The next evolution in DEXes
              </Heading>
              <Text>
                Written from scratch in Rust, Astroport combines the best pieces
                of six years of development on the Ethereum blockchain and
                delivers it on Terra.
              </Text>
              <Text>It supports two liquidity pool types:</Text>
              <UnorderedList>
                <ListItem>Uniswap’s Constant Product formula pools</ListItem>
                <ListItem>Curve’s StableSwap Invariant formula pools </ListItem>
                {/* <ListItem>
                  Balancer’s Liquidity Bootstrapping (LBP) pools.
                </ListItem> */}
              </UnorderedList>
              <Text>
                It’s backwards compatible with Terraswap message formats and
                features and a next-generation user interface.
              </Text>
              <HStack pt="4" spacing="6">
                <Button
                  as="a"
                  variant="primary"
                  href="https://app.astroport.fi"
                  size="sm"
                  target="_blank"
                  rel="noreferrer"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  Launch app
                </Button>
              </HStack>
            </VStack>
            <AspectRatio
              position="relative"
              width={["100%", null, "50%"]}
              ratio={1}
            >
              <Box position="relative" width="100%" height="100%">
                <Image
                  src="/next-evolution-dex-1.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="1"
                  alt=""
                  className="dex-1"
                ></Image>
                <Image
                  src="/next-evolution-dex-2.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="2"
                  alt=""
                  className="dex-2"
                ></Image>
                <Image
                  src="/next-evolution-dex-3.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="3"
                  alt=""
                  className="dex-3"
                ></Image>
              </Box>
            </AspectRatio>
          </Stack>
          <Stack
            spacing="5%"
            direction={["column", null, "row-reverse"]}
            align="center"
            justify="space-between"
          >
            <VStack
              spacing="6"
              align="flex-start"
              width={["100%", null, "45%"]}
            >
              <Heading
                as="h2"
                fontSize={["32px", null, "40px"]}
                lineHeight="1.2"
                fontWeight="400"
              >
                Where traders and LPs meet
              </Heading>
              <Text>
                The marketplace never closes on Astroport. Anyone can set up a
                merchant stall by supplying liquidity in one of two pools. Then,
                anyone else can trade against those tokens at any time.
              </Text>
              <Text>
                LPs earn fees. And at launch, they can provide liquidity to earn
                ASTRO, too. Since all of Astroport’s liquidity lives in smart
                contracts, it’s programmable.
              </Text>
              <Text>
                Other Terra-based dapps can integrate Astroport liquidity
                directly into their platforms. That means traders throughout the
                Terra ecosystem always have access to your liquidity.
              </Text>
              <HStack pt="4" spacing="6">
                <Button
                  as="a"
                  variant="primary"
                  href="https://app.astroport.fi"
                  size="sm"
                  target="_blank"
                  rel="noreferrer"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  Trade now
                </Button>
                <Button
                  as="a"
                  variant="primary"
                  href="https://app.astroport.fi"
                  size="sm"
                  target="_blank"
                  rel="noreferrer"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  Provide liquidity
                </Button>
              </HStack>
            </VStack>
            <AspectRatio
              position="relative"
              width={["100%", null, "50%"]}
              ratio={1}
            >
              <Box position="relative" width="100%" height="100%">
                <Image
                  src="/traders-lp-meet-1.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="1"
                  alt=""
                  className="lp-1"
                ></Image>
                <Image
                  src="/traders-lp-meet-2.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="2"
                  alt=""
                  className="lp-2"
                ></Image>
                <Image
                  src="/traders-lp-meet-3.png"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  zIndex="3"
                  alt=""
                  className="lp-3"
                ></Image>
              </Box>
            </AspectRatio>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Content;
