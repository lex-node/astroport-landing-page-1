import React from "react";
import { useTranslation } from "next-i18next";
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
  AspectRatio,
} from "@chakra-ui/react";

import NextLink from "next/link";

import ArrowRightIcon from "components/icons/ArrowRightIcon";

import Lottie from "react-lottie";
import * as animationAstro from "../public/astro_A.json";

const Footer = () => {
  const { t } = useTranslation();
  const astroOptions = {
    loop: true,
    autoplay: true,
    animationData: animationAstro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
                <AspectRatio ratio={1} width="45px">
                  <Lottie options={astroOptions} />
                </AspectRatio>
              </Flex>
              <Text
                fontSize={["26px", null, "48px"]}
                align="center"
                p={["4", null, "12"]}
                fontFamily="WhyteInktrap"
              >
                {t("footer-desc-a")}
              </Text>
              <Link
                variant="cta"
                flex="0"
                href="https://app.astroport.fi"
                isExternal
              >
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
                      // display={[null, null, "none"]}
                    />
                    <Text whiteSpace="nowrap">{t("footer-desc-b")}</Text>
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
                      {t("footer-desc-c")}
                    </Text>
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link href="https://app.astroport.fi" isExternal>
                        {t("footer-link-a")}
                      </Link>
                      <Link href="http://app.astroport.fi/pools" isExternal>
                        {t("footer-link-b")}
                      </Link>
                      <NextLink href="/terms-and-conditions" passHref>
                        <Link>{t("footer-link-e")}</Link>
                      </NextLink>
                      <Link href="https://forum.astroport.fi/" isExternal>
                        {t("footer-link-d")}
                      </Link>
                    </VStack>
                  </Box>
                </Flex>
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  fontFamily="WhyteInktrap"
                >
                  <Box>
                    <Text fontSize="24px" mb={["4", null, "6"]}>
                      {t("footer-desc-d")}
                    </Text>
                    {/* <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link>Tutorials</Link>
                      <Link>Forum</Link>
                    </VStack>
                    <Divider my="4" width="6" /> */}
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link href="https://docs.astroport.fi/" isExternal>
                        {t("footer-link-c")}
                      </Link>
                      <Link
                        href="https://www.immunefi.com/bounty/astroport"
                        isExternal
                      >
                        {t("footer-link-f")}
                      </Link>

                      {/* <Link>Privacy policy</Link> */}
                    </VStack>
                  </Box>
                </Flex>
                <Flex direction="column" flex="1" fontFamily="WhyteInktrap">
                  <Box>
                    <Text fontSize="24px" mb={["4", null, "6"]}>
                    {t("footer-desc-e")}
                    </Text>
                    <VStack
                      align="flex-start"
                      spacing="1"
                      flex="1"
                      textTransform="uppercase"
                      fontSize={["14px", null, "1rem"]}
                    >
                      <Link
                        href="https://discord.gg/astroport"
                        isExternal={true}
                      >
                        {t("footer-link-g")}
                      </Link>
                      <Link
                        href="https://astroport.medium.com/"
                        isExternal={true}
                      >
                        {t("footer-link-h")}
                      </Link>
                      <Link href="https://t.me/astroport_fi" isExternal={true}>
                        {t("footer-link-i")}
                      </Link>
                      <Link
                        href="https://twitter.com/astroport_fi"
                        isExternal={true}
                      >
                        {t("footer-link-j")}
                      </Link>
                    </VStack>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
