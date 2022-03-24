import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Heading, Flex } from "@chakra-ui/react";

import VaultItem from "components/VaultItem";
import AnchorCube from "components/AnchorCube";
import MirrorCube from "components/MirrorCube";

const Vaults = () => {
  const { t } = useTranslation();

  return (
    <Box pb="36" bg="#EEF1F5">
      <Box maxW="container.lg" margin="0 auto" px={["6", null, "12"]}>
        <Heading
          fontSize={["3xl", null, "4xl"]}
          mb={["3", null, "6"]}
          textAlign="center"
        >
          {t('vaults-header')}
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
              title={t('vaults-title-a')}
              desc={t('vaults-desc-a')}
              status={t('vaults-status-a')}
            />
          </Box>
          <Box mt={["32", null, null, "0"]}>
            <VaultItem
              content={<MirrorCube />}
              title={t('vaults-title-b')}
              desc={t('vaults-desc-b')}
              status={t('vaults-status-b')}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Vaults;
