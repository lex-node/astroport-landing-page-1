import React from "react";
import { Box, Text, Button, Link, HStack, VStack } from "@chakra-ui/react";

import NextLink from "next/link";

import useLocalStorage from "hooks/useLocalStorage";

const TCBanner = () => {
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
            This website (the “Site”) is an information aggregator relating to
            an Astroport smart contract system on Terra. By viewing, interacting
            with or otherwise using the Site, you are agreeing to the{" "}
            <NextLink href="/terms-and-conditions" passHref>
              <Link href="#" fontWeight="bold">
                Terms and Conditions for the Site
              </Link>
            </NextLink>
            . Please check below to certify you have read and understood and are
            agreeing to be bound by the Terms and Conditions in their entirety.
          </Text>
          <Text>
            I have read and agree to be bound by the Terms & Conditions.
          </Text>
        </VStack>
        <HStack spacing="6">
          <Button variant="primary" onClick={handleClick}>
            I agree
          </Button>
          <NextLink href="https://twitter.com/astroport_fi">
            <Button variant="outline">I disagree</Button>
          </NextLink>
        </HStack>
      </VStack>
    </Box>
  );
};

export default TCBanner;
