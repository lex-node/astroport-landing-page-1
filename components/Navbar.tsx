import React, { FC } from "react";
import {
  Link,
  Flex,
  Box,
  HStack,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  VStack,
} from "@chakra-ui/react";

import NavbarLink from "components/NavbarLink";
import SocialsNav from "components/SocialsNav";
import BurgerIcon from "components/icons/BurgerIcon";
import CloseIcon from "components/icons/CloseIcon";

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
          <Image src="/logo.svg" alt="Astroport. The future of trading." />
        </Box>
        <HStack
          spacing={{ md: "12", lg: "16" }}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <HStack spacing="12">
              <NavbarLink href="/" label="About" />
              <Menu>
                <MenuButton as={Link} color="white">
                  Support
                </MenuButton>
                <MenuList zIndex={200}>
                  <MenuItem>Tutorials</MenuItem>
                  <MenuItem>Forum</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
          <Box>
            <SocialsNav />
          </Box>
          <Box>
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
                  src="/logo.svg"
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
                    <Link href="/" color="white">
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
