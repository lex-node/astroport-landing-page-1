import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Text, Heading } from "@chakra-ui/react";

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <Box pb={["16", null, "32"]} bg="#EEF1F5">
      <Box maxW="xl" margin="0 auto" textAlign="center" px={["6", null, "0"]}>
        <Heading
          fontSize={["3xl", null, "4xl"]}
          mb={["3", null, "6"]}
          textAlign="center"
        >
          {t("comingsoon-desc-a")}
        </Heading>
        <Text fontSize={["md", null, "lg"]} fontWeight="bold" mb="6">
          {t("comingsoon-desc-b")}
        </Text>
        <Text fontSize={["md", null, "lg"]}>
          {t("comingsoon-desc-c")}
        </Text>
      </Box>
    </Box>
  );
};

export default ComingSoon;
