import React, { FC } from "react";
import { Flex, Box, HStack, Image, Button } from "@chakra-ui/react";

import NavbarLink from "components/NavbarLink";

const Navbar: FC = () => {
  return (
    <Box
      maxW="container.xl"
      margin="0 auto"
      px={["6", null, "12"]}
      pt="8"
      position="relative"
      zIndex="1"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Image src="/logo.svg" alt="Logo" />
        </Box>
        <Box>
          <HStack spacing="16">
            <Box>
              <NavbarLink href="/" label="About" />
            </Box>
            <Box>
              <NavbarLink href="/" label="Support" />
            </Box>
            <Box>
              <NavbarLink href="/" label="Community" />
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
              Launch App
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
