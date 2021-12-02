import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

import EdgeCornerIcon from "components/icons/EdgeCornerIcon";

const ImmunefiBanner = () => {
  return (
    <Box pt="24">
      <Link
        href="https://www.immunefi.com/bounty/astroport"
        isExternal
        _hover={{ textDecoration: "none" }}
      >
        <Box
          bg="linear-gradient(90deg, rgba(146,120,255,1) 0%, rgba(86,67,242,1) 100%);"
          maxW="845px"
          position="relative"
        >
          <EdgeCornerIcon
            w="14px"
            h="14px"
            color="white"
            position="absolute"
            left="0"
            top="0"
            m="3"
          />
          <EdgeCornerIcon
            w="14px"
            h="14px"
            color="white"
            position="absolute"
            right="0"
            top="0"
            transform="rotate(90deg)"
            m="3"
          />
          <EdgeCornerIcon
            w="14px"
            h="14px"
            color="white"
            position="absolute"
            left="0"
            bottom="0"
            transform="rotate(-90deg)"
            m="3"
          />
          <EdgeCornerIcon
            w="14px"
            h="14px"
            color="white"
            position="absolute"
            right="0"
            bottom="0"
            transform="rotate(180deg)"
            m="3"
          />
          <Flex h="100%" justify="space-between" pt="6" px={[8, null, 20]}>
            <Flex align="center" textAlign="left" pt="4">
              <Box pb="8">
                <Heading as="h2" color="#1AFAB7" fontWeight="400">
                  Get paid up to $1,000,000
                </Heading>
                <Text color="white" fontSize="1.25rem">
                  if you discover bugs and vulnerabilities on Astroport.
                </Text>
                <Box mt={[6, null, 7]} w={["60%", null, "auto"]}>
                  <HStack
                    spacing="0"
                    flexWrap="wrap"
                    my={[-3, null, -4]}
                    py={[3, null, 4]}
                  >
                    <Box py={[3, null, 4]} mr="4">
                      <Button
                        variant="primary"
                        size="sm"
                        bg="white"
                        color="brand.purple"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Report Bug
                      </Button>
                    </Box>
                    <HStack py={[3, null, 4]} spacing="4">
                      <Text
                        as="span"
                        textTransform="uppercase"
                        color="white"
                        fontSize="0.8125rem"
                      >
                        with
                      </Text>
                      <Image
                        src="/immunefi-logo.svg"
                        alt="Immunefi"
                        w={["92px", "109px", "127px"]}
                      />
                    </HStack>
                  </HStack>
                </Box>
              </Box>
            </Flex>
            <Flex
              pl="8"
              align="self-end"
              flexShrink={0}
              w={["35%", "25%", "auto"]}
              bottom="0"
              right={["12", "20", "12"]}
              position={["absolute", null, "static"]}
            >
              <Image src="/immunefi-find-bug-glass.svg" alt="" />
            </Flex>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default ImmunefiBanner;
