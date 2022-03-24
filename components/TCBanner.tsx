import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Text, Button, Link, HStack, VStack } from "@chakra-ui/react";

import NextLink from "next/link";

import useLocalStorage from "hooks/useLocalStorage";

const TCBanner = () => {
  const { t } = useTranslation();
  const [hideBanner, setHideBanner] = useLocalStorage(
    "astroport:hideBanner",
    false
  );

  const handleClick = () => {
    setHideBanner(true);
  };

  if (hideBanner) {
    return null;
  }

  return (
    <Box
      bg="brand.darkBlue"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
      zIndex="200"
      px={["6", null, "12", null, "135px"]}
      py={["6", null, "8", null, "35px"]}
    >
      <VStack spacing="8" align="flex-start">
        <VStack spacing="3" color="white" align="flex-start">
          <Text>
            {t("tcbanner-header")}{" "}
            <NextLink href="/terms-and-conditions" passHref>
              <Link href="#" fontWeight="bold">
                {t("tcbanner-header-link")}
              </Link>
            </NextLink>
            {t("tcbanner-header-end")}
          </Text>
          <Text>
            {t("tcbanner-body")}
          </Text>
        </VStack>
        <HStack spacing="6">
          <Button variant="primary" onClick={handleClick}>
            {t("tcbanner-link-agree")}
          </Button>
          <NextLink href="https://twitter.com/astroport_fi">
            <Button variant="outline">{t("tcbanner-link-disagree")}</Button>
          </NextLink>
        </HStack>
      </VStack>
    </Box>
  );
};

export default TCBanner;
