import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Box pb={["16", null, "32"]} bg="#EEF1F5">
      <Box maxW="xl" margin="0 auto" textAlign="center" px={["6", null, "0"]}>
        <Heading
          fontSize={["3xl", null, "4xl"]}
          mb={["3", null, "6"]}
          textAlign="center"
        >
          Our Mission
        </Heading>
        <Text fontSize={["md", null, "lg"]} fontWeight="bold" mb="6">
          Astroport removes the complexity of advanced yield farming strategies
          to deliver optimized, sustainable yield for users
        </Text>
        <Text fontSize={["md", null, "lg"]}>
          Astroport&apos;s first product will be focus on borrow strategies
          which are available within the Terra ecosystem. The protocol will
          evolve and develop new vault strategies through community governance
          proposals and grants over time
        </Text>
      </Box>
    </Box>
  );
};

export default ComingSoon;
