import React, { FC } from "react";
import { HStack, Link } from "@chakra-ui/react";

import TelegramIcon from "components/icons/TelegramIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import DiscordIcon from "components/icons/DiscordIcon";
import MediumIcon from "components/icons/MediumIcon";

const Socials: FC = () => {
  return (
    <HStack spacing={["9", null, "4"]}>
      <Link href="https://twitter.com/astroport_fi" isExternal={true}>
        <TwitterIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </Link>
      <Link href="https://t.me/astroport_fi" isExternal={true}>
        <TelegramIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </Link>
      <Link href="https://discord.gg/astroport" isExternal={true}>
        <DiscordIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </Link>
      <Link href="https://astroport.medium.com" isExternal={true}>
        <MediumIcon
          width={{ base: "1.5rem", lg: "2rem" }}
          height={{ base: "1.5rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </Link>
    </HStack>
  );
};

export default Socials;
