import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Container, VStack } from "@chakra-ui/react";

import markdownTC from "docs/tc.md";

const TCContent = () => {
  return (
    <Box pt={["10", null, "16", "28"]} pb={["16", null, null, "20"]}>
      <Container
        maxW="container.xl"
        px={["8", null, "12"]}
        color="white"
        className="prose"
      >
        <ReactMarkdown>{markdownTC}</ReactMarkdown>
      </Container>
    </Box>
  );
};

export default TCContent;
