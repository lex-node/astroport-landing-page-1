import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Box, Heading, Stack, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  statusCode: number;
}

const IndexPageComponent: FC<IProps> = ({ statusCode }) => {
  const heightOfNavbar: string = "74px";
  const containerPadding: string = "1rem";
  const { t } = useTranslation();

  const signOutButtonNode = () => {
    return (
      <Box>
        <Link href="/" passHref>
          <Button as="a">{t("error-return-home")}</Button>
        </Link>
      </Box>
    );
  };

  return (
    <Stack>
      <Flex
        minH={`calc(100vh - ${heightOfNavbar} - ${containerPadding}*2)`}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">Nextjs Hasura Boilerplate</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
