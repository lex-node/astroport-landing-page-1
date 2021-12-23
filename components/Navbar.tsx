import React, { FC } from "react";
import {
  Link,
  Flex,
  Box,
  HStack,
  Image,
  Button,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { Link as SmoothLink } from "react-scroll";

import NextLink from "next/link";

import SocialsNav from "components/SocialsNav";
import BurgerIcon from "components/icons/BurgerIcon";
import CloseIcon from "components/icons/CloseIcon";
import AstroportLogo from "components/icons/AstroportLogo";

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container
      maxW="container.xl"
      px={["6", null, "12"]}
      pt="8"
      position="relative"
      centerContent
    >
      <Flex justify="space-between" width="100%" align="center">
        <Box>
          <NextLink href="/" passHref>
            <AstroportLogo width="41px" height="32px" color="white" />
          </NextLink>
        </Box>
        <HStack
          spacing={{ md: "12", lg: "16" }}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <HStack spacing="12">
              <Text color="white" _hover={{ textDecoration: "underline" }}>
                <SmoothLink
                  href="#"
                  to="about"
                  offset={-50}
                  smooth={true}
                  duration={200}
                >
                  About
                </SmoothLink>
              </Text>
              <Menu>
                <MenuButton as={Link} color="white">
                  Support
                </MenuButton>
                <MenuList zIndex={200}>
                  <MenuItem>
                    <Link
                      href="https://docs.astroport.fi/astroport/workstation/basics"
                      isExternal
                    >
                      Tutorials
                    </Link>
                  </MenuItem>
                  <MenuItem href="https://forum.astroport.fi/" isExternal>
                    <Link href="https://forum.astroport.fi/" isExternal>
                      Forum
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
          <Box>
            <SocialsNav />
          </Box>
          <Box>
            {/* <Button
              as="a"
              variant="primary"
              href="https://www.immunefi.com/bounty/astroport"
              size="sm"
              target="_blank"
              rel="noreferrer"
            >
              Bug Bounty
            </Button> */}
            <Button
              as="a"
              variant="primary"
              href="https://app.astroport.fi"
              size="sm"
              target="_blank"
              rel="noreferrer"
            >
              Enter app
            </Button>
          </Box>
        </HStack>
        <Box display={{ md: "none" }} mr="-4">
          <Button variant="icon" ref={btnRef} onClick={onOpen}>
            <BurgerIcon color="white" width="1.5rem" height="1.5rem" />
          </Button>
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="sm"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            height="100%"
            bg="brand.purple"
            zIndex="100"
            px={["6", null, "12"]}
            py="8"
            direction="column"
            justifyContent="space-between"
          >
            <Flex justify="space-between" width="100%" align="center">
              <Box>
                <Image
                  src="/logo-astroport.svg"
                  alt="Astroport. The future of trading."
                />
              </Box>
              <Button variant="icon" mr="-2" onClick={onClose}>
                <CloseIcon color="white" width="1.5rem" height="1.5rem" />
              </Button>
            </Flex>
            <Box>
              <VStack spacing="8" align="flex-start">
                <Link href="/" textTransform="uppercase" color="white">
                  About
                </Link>
                <Box>
                  <Link href="/" textTransform="uppercase" color="white">
                    Support
                  </Link>
                  <VStack spacing="0" align="flex-start" mt="1">
                    <Link
                      href="https://docs.astroport.fi/astroport/workstation/basics"
                      isExternal
                      color="white"
                    >
                      Tutorials
                    </Link>
                    <Link href="/" color="white">
                      Forum
                    </Link>
                  </VStack>
                </Box>
                <Box mt="4">
                  <Text
                    textTransform="uppercase"
                    color="white"
                    mb="4"
                    fontFamily=""
                  >
                    Community
                  </Text>
                  <SocialsNav />
                </Box>
              </VStack>
            </Box>
            <VStack spacing="10" align="flex-start">
              <Button
                as="a"
                variant="primary"
                href="/"
                size="sm"
                target="_blank"
                rel="noreferrer"
                textTransform="uppercase"
                fontWeight="500"
                bg="rgba(255,255,255,0.2)"
                border="1px"
                borderStyle="solid"
                borderColor="rgba(255,255,255,0.2)"
              >
                Launch App
              </Button>
              <HStack spacing="12" align="flex-start">
                <Link
                  href="/"
                  textTransform="uppercase"
                  color="white"
                  opacity="0.7"
                >
                  Terms of use
                </Link>
                <Link
                  href="/"
                  textTransform="uppercase"
                  color="white"
                  opacity="0.7"
                >
                  Privacy Policy
                </Link>
              </HStack>
            </VStack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Navbar;
