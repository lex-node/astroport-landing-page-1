import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

import VaultItem from "components/VaultItem";
import AnchorCube from "components/AnchorCube";
import MirrorCube from "components/MirrorCube";

const Vaults = () => {
  return (
    <Box pb="36" bg="#EEF1F5">
      <Box maxW="container.lg" margin="0 auto" px={["6", null, "12"]}>
        <Heading
          fontSize={["3xl", null, "4xl"]}
          mb={["3", null, "6"]}
          textAlign="center"
        >
          Vaults
        </Heading>

        <Flex
          justify="center"
          flexDir={["column", null, null, "row"]}
          mt="32"
          style={{ gap: "2.25rem" }}
        >
          <Box>
            <VaultItem
              content={<AnchorCube />}
              title="bLuna/bETH Anchor"
              desc="Generates yield by maximizing Anchor Borrow loan-to-value (LTV)
              ratio to capture borrower incentive tokens while automatically
              protecting user from liquidation risk."
              status="Coming soon"
            />
          </Box>
          <Box mt={["32", null, null, "0"]}>
            <VaultItem
              content={<MirrorCube />}
              title="UST Mirror"
              desc="Generates yield by operating an automated delta neutral yield
            strategy for UST in Mirror Finance."
              status="Coming soon"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Vaults;
