import React from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "components/Navbar";
import TCContent from "components/TCContent";

const TC = () => {
  return (
    <Box bg="brand.darkBlue">
      <Box position="relative" zIndex="10">
        <Navbar />
        <TCContent />
      </Box>
    </Box>
  );
};

export default TC;
