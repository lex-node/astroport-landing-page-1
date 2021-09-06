import React, { FC, ReactNode } from "react";
import { Box, Heading, Text, HStack, Flex } from "@chakra-ui/react";

import ArrowRightIcon from "components/icons/ArrowRightIcon";

type Props = {
  content: ReactNode;
  title: string;
  desc: string;
  status: string;
};

const VaultItem: FC<Props> = ({ content, title, desc, status }) => {
  return (
    <Box
      position="relative"
      bg="white"
      p="8"
      pt="32"
      borderRadius="2xl"
      minH="26rem"
    >
      <Box
        h={[150, null, null, 225]}
        w={[150, null, null, 225]}
        position="absolute"
        top="-80px"
        right="25px"
      >
        {content}
      </Box>
      <Box
        textAlign={["center", null, null, "left"]}
        mt={["6", null, null, "0"]}
      >
        <Box
          display="inline-block"
          borderRadius="full"
          py="3"
          px="4"
          fontWeight="bold"
          bg="#EEF1F5"
        >
          {status}
        </Box>
        <Heading fontSize="3xl" my={["3", null, null, "6"]}>
          {title}{" "}
          <Text as="span" fontWeight="normal">
            Vault
          </Text>
        </Heading>
        <Text
          maxW="lg"
          lineHeight="tall"
          fontSize={["md", null, "lg"]}
          mx="auto"
        >
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

export default VaultItem;
