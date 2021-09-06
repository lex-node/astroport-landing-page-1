import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import Socials from "components/Socials";

const Footer = () => {
  return (
    <Box bg="#EEF1F5">
      <Box maxW="container.xl" m="0 auto" pb="12" px={["6", null, "12"]}>
        <Flex
          align="center"
          justify={["center", "space-between"]}
          flexDir={["column", "row"]}
          pt="8"
        >
          <Box color="black">
            <Image src="/logo.svg" alt="Logo" />
          </Box>
          <Socials />
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
