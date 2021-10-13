import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

const RadialGradient: FC = () => {
  return (
    <chakra.div
      position="absolute"
      zIndex="5"
      width="100%"
      height="100%"
      left="0"
      top="0"
      backgroundImage="url('/grain pattern_200px.png')"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      display={["none", null, "block"]}
    />
  );
};

export default RadialGradient;
