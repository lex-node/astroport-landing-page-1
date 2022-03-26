import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Box, Heading, Stack, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NotFoundIllustration from "./NotFoundIllustration";

interface IProps {
  statusCode: number;
}

const IndexPageComponent: FC<IProps> = ({ statusCode }) => {
  const { t } = useTranslation();
  const heightOfNavbar: string = "74px";
  const containerPadding: string = "1rem";
  const notFoundError = statusCode && statusCode == 404;

  const signOutButtonNode = () => {
    return (
      <Box>
        <Link href="/" passHref>
          <Button variant="primary" as="a" textTransform="inherit">{t("error-return-home")}</Button>
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
        <Stack spacing={16} px={10} w="full" maxW="3xl" mx="auto">
          {notFoundError && <NotFoundIllustration width="100%" />}
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
