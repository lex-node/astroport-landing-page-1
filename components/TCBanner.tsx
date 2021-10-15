/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import useLocalStorage from "hooks/useLocalStorage";

const TCBanner = () => {
  const [hideBanner, setHideBanner] = useLocalStorage("displayBanner", false);

  const handleClick = () => {
    setHideBanner(true);
  };

  if (hideBanner) {
    return <Box></Box>;
  }

  return (
    <Box
      bg="brand.darkBlue"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
      zIndex="200"
      px={["6", null, "12", null, "135px"]}
      py={["6", null, "8", null, "35px"]}
    >
      <Flex
        direction={["column", null, null, "row"]}
        align={["stretch", null, null, "center"]}
        justify="space-between"
      >
        <Box maxW="835px">
          <Text color="white">
            Lorem ipsum. A cookie banner is a notice often displayed on a user's
            first visit to a website that informs them about the cookies and
            trackers the site uses and asks for the user's consent to store
            cookies on their devices
          </Text>
        </Box>
        <Box mt={["4", null, "6", "0"]} pl={[null, null, null, "12"]}>
          <Button variant="outline" w="100%" onClick={handleClick}>
            Accept terms of use
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default TCBanner;
