import React from "react";
import { useTranslation } from "next-i18next";
import {
  Box,
  Container,
  Image,
  Flex,
  VStack,
  Stack,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";

const Collaborators = () => {
  const { t } = useTranslation();

  return (
    <Box
      pt={["10", null, "16", "28"]}
      pb={["16", null, null, "20"]}
      bg="brand.purple"
    >
      <Container maxW="container.xl" px={["8", null, "12"]} color="white">
        <Flex direction={["column", null, null, "row"]} justify="space-between">
          <Heading
            as="h2"
            fontSize={["48", null, "64px"]}
            lineHeight="1.2"
            fontWeight="400"
            textTransform="uppercase"
            mb={["10", null, null, "0"]}
          >
            {t("collaborators-title-a")}
            <br />
            {t("collaborators-title-b")}
          </Heading>
          <VStack spacing="50px" maxW="container.md">
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["3", null, "30px"]}
            >
              <Box flexShrink={0}>
                <Image
                  src="/delphi-labs.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">{t("collaborators-link-a")}</Link> {t("collaborators-desc-a")}
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["2", null, "30px"]}
            >
              <Box flexShrink={0} mb={["10px", null, "0"]}>
                <Image
                  src="/ideo-CoLab.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">{t("collaborators-link-b")}</Link> {t("collaborators-desc-b")}
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["0", null, "30px"]}
            >
              <Box flexShrink={0}>
                <Image
                  src="/terraform-labs.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">{t("collaborators-link-c")}</Link> {t("collaborators-desc-c")}
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Collaborators;
