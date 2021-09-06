import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";

import TelegramIcon from "components/icons/TelegramIcon";
import TwitterIcon from "components/icons/TwitterIcon";

const Socials: FC = () => {
  return (
    <HStack spacing={["8", null, "4"]}>
      <a
        href="https://twitter.com/AstroportProtocol"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon width="1.25rem" height="1.25rem" />
      </a>
      {/* <a
        href="https://github.com/Astroport-Protocol"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon width="1.25rem" height="1.25rem" />
      </a> */}
      <a href="https://t.me/AstroportProtocol" target="_blank" rel="noreferrer">
        <TelegramIcon width="1.25rem" height="1.25rem" />
      </a>
      {/* <a href="https://google.com" target="_blank" rel="noreferrer">
        <DiscordIcon width="1.25rem" height="1.25rem" />
      </a> */}
    </HStack>
  );
};

export default Socials;
