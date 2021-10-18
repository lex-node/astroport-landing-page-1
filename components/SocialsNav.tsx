import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";

import TelegramIcon from "components/icons/TelegramIcon";
import TwitterIcon from "components/icons/TwitterIcon";
import DiscordIcon from "components/icons/DiscordIcon";
import MediumIcon from "components/icons/MediumIcon";

const Socials: FC = () => {
  return (
    <HStack spacing={["9", null, "4"]}>
      <a
        href="https://twitter.com/AstroportProtocol"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </a>
      <a href="https://t.me/AstroportProtocol" target="_blank" rel="noreferrer">
        <TelegramIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </a>
      <a href="https://t.me/AstroportProtocol" target="_blank" rel="noreferrer">
        <DiscordIcon
          width={{ base: "1.75rem", lg: "2rem" }}
          height={{ base: "1.75rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </a>
      <a href="https://t.me/AstroportProtocol" target="_blank" rel="noreferrer">
        <MediumIcon
          width={{ base: "1.5rem", lg: "2rem" }}
          height={{ base: "1.5rem", lg: "2rem" }}
          color="white"
          transition="all ease-in-out .1s"
          _hover={{ color: "#83FFCB" }}
        />
      </a>
    </HStack>
  );
};

export default Socials;
