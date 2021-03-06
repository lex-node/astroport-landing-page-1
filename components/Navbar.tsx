import React, { FC } from "react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenMenu,  onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenMenuB,  onOpen: onOpenMenuB, onClose: onCloseMenuB } = useDisclosure();
  const btnRef = React.useRef();
  const TUTORIALS_LINK = "https://docs.astroport.fi/astroport/workstation/basics";
  const DISCORD_LINK = 'https://discord.gg/astroport'
  const FORUM_LINK = "https://forum.astroport.fi/";

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
                  {t("navbar-about")}
                </SmoothLink>
              </Text>
              <Menu isOpen={isOpenMenu} gutter={0}>
                <MenuButton as={Link} color="white" py="2" onMouseEnter={onOpenMenu} onMouseLeave={onCloseMenu}>
                  {t("navbar-support")}
                </MenuButton>
                <MenuList zIndex={200} m="0" onMouseEnter={onOpenMenu} onMouseLeave={onCloseMenu}>
                  <MenuItem>
                    <Link
                      href={TUTORIALS_LINK}
                      isExternal
                    >
                      {t("navbar-tutorials")}
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={DISCORD_LINK} isExternal>
                      {t("navbar-discord")}
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenMenuB} gutter={0}>
                <MenuButton as={Link} color="white" py="2" onMouseEnter={onOpenMenuB} onMouseLeave={onCloseMenuB}>
                  {t("navbar-governance")}
                </MenuButton>
                <MenuList zIndex={200} m="0" onMouseEnter={onOpenMenuB} onMouseLeave={onCloseMenuB}>
                  <MenuItem>
                    <Link href={FORUM_LINK} isExternal>
                      {t("navbar-forum")}
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
              {t("navbar-enter")}
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
            <Box mt="10">
              <VStack spacing="8" align="flex-start">
                <Box>
                  <VStack spacing="4" align="flex-start" mt="1">
                    <Link
                      href={TUTORIALS_LINK}
                      isExternal
                      color="white"
                      fontSize="lg"
                    >
                      {t("navbar-tutorials")}
                    </Link>
                    <Link href={FORUM_LINK} color="white" fontSize="lg">
                      {t("navbar-forum")}
                    </Link>
                    <Link href={DISCORD_LINK} color="white" fontSize="lg">
                      {t("navbar-discord")}
                    </Link>
                  </VStack>
                </Box>
                <Box mt="4">
                  <SocialsNav />
                </Box>
              </VStack>
            </Box>
            <VStack spacing="10" align="flex-start" mt="auto">
              <Button
                as="a"
                variant="primary"
                href="https://app.astroport.fi"
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
                {t("navbar-launch")}
              </Button>
              <HStack spacing="12" align="flex-start">
                <Link
                  href="/terms-and-conditions"
                  textTransform="uppercase"
                  color="white"
                  opacity="0.7"
                >
                  {t("navbar-terms")}
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
