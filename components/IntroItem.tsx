import React, { FC } from "react";
import { Box, Text, BoxProps } from "@chakra-ui/react";

type Props = {
  title: string;
  body: string;
  cta: string;
} & BoxProps;

const IntroItem: FC<Props> = ({ title, body, cta, ...props }) => {
  return (
    <Box {...props}>
      <Text textTransform="uppercase" fontSize="sm" mb="2">
        {title}
      </Text>
      <Text mb="4">{body}</Text>
      <Text fontWeight="700">{cta}</Text>
    </Box>
  );
};

export default IntroItem;
