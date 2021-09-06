import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

const RadialGradient: FC = () => {
  return (
    <chakra.div
      position="absolute"
      zIndex="0"
      width="1500px"
      height="1500px"
      left="50%"
      ml="-750px"
      top="-150px"
      bg="radial-gradient(50% 50% at 50% 50%, #5643F2 0%, #83B3FD 58.33%, #2CA4D6 73.44%, #1629E6 100%)"
      filter="blur(300px)"
      display={["none", null, "block"]}
    />
  );
};

export default RadialGradient;
