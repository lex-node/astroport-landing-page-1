import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  value: string;
  label: string;
};

const HeroStat: FC<Props> = ({ value, label }) => {
  return (
    <Box color="white" flex="1" textAlign="center">
      <Text fontSize="3xl">{value}</Text>
      <Text textTransform="uppercase">{label}</Text>
    </Box>
  );
};

export default HeroStat;
