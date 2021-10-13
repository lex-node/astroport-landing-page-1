import React, { FC, ReactNode } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

type Props = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const HeroItem: FC<Props> = ({ icon, title, desc }) => {
  return (
    <HStack
      spacing="6"
      bg={["#353549", "transparent"]}
      borderRadius={["lg", "none"]}
      p={["4", "0"]}
      align={["flex-start", "center"]}
    >
      <Box>{icon}</Box>
      <Box>
        <Text fontWeight="bold" mb="2">
          {title}
        </Text>
        <Text variant="light">{desc}</Text>
      </Box>
    </HStack>
  );
};

export default HeroItem;
