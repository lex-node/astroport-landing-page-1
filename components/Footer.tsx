import React from "react";
import {
  Box,
  Container,
  Image,
  Flex,
  VStack,
  Link,
  Text,
  StackDivider,
  Stack,
} from "@chakra-ui/react";

import Socials from "components/Socials";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

const Footer = () => {
  return (
    <Box>
      <Box
        bgImage="url('/bg-supfooter.svg')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        pt={["20", null, "28"]}
        pb="20"
      >
        <Container maxW="container.lg" px={["8", null, "12"]}>
          <Box border="1px" color="white">
            <VStack
              spacing="0"
              align="stretch"
              justifyContent="center"
              divider={<StackDivider borderColor="white" />}
            >
              <Flex py="18px" justify="center">
                <Image
                  src="/logo.svg"
                  alt="Astroport. The future of trading."
                />
              </Flex>
              <Text
                fontSize={["26px", null, "48px"]}
                align="center"
                p={["4", null, "12"]}
                fontFamily="WhyteInktrap"
              >
                Astroport brings liquidity to Terra tokens from all parts of the
                galaxy.
              </Text>
              <Link variant="cta" flex="0">
                <Flex align="center" height="100%">
                  <Flex
                    px={["6", null, "12", "20"]}
                    py="4"
                    align="flex-end"
                    justify="center"
                    flex="1"
                  >
                    <ArrowRightIcon
                      width="1.25rem"
                      height="1.25rem"
                      mb="1"
                      mr="1"
                      display={[null, null, "none"]}
                    />
                    <Text whiteSpace="nowrap">Enter Astroport</Text>
                  </Flex>
                </Flex>
              </Link>
            </VStack>
          </Box>
        </Container>
      </Box>
      <Box
        py={["10", null, "20"]}
        bg="brands.darkBlue"
        color="white"
        borderTop="1px"
      >
        <Container maxW="container.xl" px={["8", null, "12"]}>
          <Flex
            direction={["column-reverse", null, null, "row"]}
            justifyContent="space-between"
          >
            <Box
              pr={[null, null, null, "20"]}
              my={["20", null, "0"]}
              alignSelf={["center", null, "flex-end", "center"]}
            >
              <Image
                src="/astroport-logo-footer.svg"
                alt="Astroport. The future of trading."
              />
            </Box>
            <Box whiteSpace="nowrap">
              <Stack
                spacing={["34px", null, "110px"]}
                direction={["column", null, "row"]}
              >
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  fontFamily="WhyteInktrap"
                >
                  <Box>
                    <Text fontSize="24px" mb={["4", null, "6"]}>
                      Astroport
                    </Text>
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link>Trade / Swap</Link>
                      <Link>liquidity pools</Link>
                      <Link>Pre-launches</Link>
                      <Link>Docs</Link>
                      <Link>Governance</Link>
                    </VStack>
                  </Box>
                  <Box mt="20" display={["none", null, "block"]}>
                    <Link
                      textTransform="uppercase"
                      opacity="0.7"
                      fontSize="12px"
                    >
                      Terms of Use
                    </Link>
                  </Box>
                </Flex>
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  fontFamily="WhyteInktrap"
                >
                  <Box>
                    <Text fontSize="24px" mb={["4", null, "6"]}>
                      Support
                    </Text>
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link>Tutorials</Link>
                      <Link>Forum</Link>
                    </VStack>
                  </Box>
                  <Box mt="20" display={["none", null, "block"]}>
                    <Link
                      textTransform="uppercase"
                      opacity="0.7"
                      fontSize="12px"
                    >
                      Privacy Policy
                    </Link>
                  </Box>
                </Flex>
                <Flex direction="column" flex="1" fontFamily="WhyteInktrap">
                  <Box>
                    <Text fontSize="24px" mb={["4", null, "6"]}>
                      Community
                    </Text>
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link>Discord</Link>
                      <Link>Medium</Link>
                      <Link>Substack</Link>
                      <Link>Telegram</Link>
                      <Link>Twitter</Link>
                    </VStack>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
          <Flex display={["flex", null, "none"]} justifyContent="space-between">
            <Link textTransform="uppercase" opacity="0.7" fontSize="12px">
              Terms of Use
            </Link>
            <Link textTransform="uppercase" opacity="0.7" fontSize="12px">
              Privacy Policy
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
