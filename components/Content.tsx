import React from "react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation();

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
                {t("content-desc-a")}
              </Heading>
              <Text>
                {t("content-desc-b")}
              </Text>
              <Text>{t("content-desc-c")}</Text>
              <UnorderedList>
                <ListItem>{t("content-desc-d")}</ListItem>
                <ListItem>{t("content-desc-e")}</ListItem>
                {/* <ListItem>
                  Balancer’s Liquidity Bootstrapping (LBP) pools.
                </ListItem> */}
              </UnorderedList>
              <Text>
                {t("content-desc-f")}
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
                  <Text lineHeight={"normal"}>{t("content-link-a")}</Text>
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
                {t("content-desc-g")}
              </Heading>
              <Text>
                {t("content-desc-h")}
              </Text>
              <Text>
                {t("content-desc-i")}
              </Text>
              <Text>
                {t("content-desc-j")}
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
                  <Text lineHeight={"normal"}>{t("content-link-b")}</Text>
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
                  <Text lineHeight={"normal"}>{t("content-link-c")}</Text>
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
