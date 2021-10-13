import React from "react";
import {
  Box,
  Container,
  Image,
  Flex,
  VStack,
  Stack,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";

const Collaborators = () => {
  return (
    <Box
      pt={["10", null, "16", "28"]}
      pb={["16", null, null, "20"]}
      bg="brand.purple"
    >
      <Container maxW="container.xl" px={["8", null, "12"]} color="white">
        <Flex direction={["column", null, null, "row"]} justify="space-between">
          <Heading
            as="h2"
            fontSize={["48", null, "64px"]}
            lineHeight="1.2"
            fontWeight="400"
            textTransform="uppercase"
            mb={["10", null, null, "0"]}
          >
            Collab
            <br />
            orators
          </Heading>
          <VStack spacing="50px" maxW="container.md">
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["3", null, "30px"]}
            >
              <Box flexShrink={0}>
                <Image
                  src="/delphi-labs.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">The Delphi Labs</Link> team has
                  extensive experience working with a wide array of token-based
                  projects to engineer rational and balanced network economies
                  that promote organic ecosystem growth. Clients include Axie
                  Infinity (AXS), Synthetix (SNX), Aave (AAVE), Nervos (CKB) and
                  Skale (SKL).
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["2", null, "30px"]}
            >
              <Box flexShrink={0} mb={["10px", null, "0"]}>
                <Image
                  src="/ideo-CoLab.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">IDEO CoLab</Link> invests in
                  early-stage distributed web startups and co-create with them
                  to launch new products and protocols. Partners include
                  Handshake (HNS), PoolTogether (POOL), Instadapp (INST), Near
                  (NEAR) and Optimism.
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={["column", null, "row"]}
              align={["flex-start", null, "center"]}
              spacing={["0", null, "30px"]}
            >
              <Box flexShrink={0}>
                <Image
                  src="/terraform-labs.png"
                  alt=""
                  width="104"
                  height="104"
                ></Image>
              </Box>
              <Box>
                <Text>
                  <Link variant="animated">Terraform Labs</Link> incubates
                  foundational protocols on the Terra blockchain including
                  Mirror (MIR), Anchor (ANC) and Chai.
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Collaborators;
