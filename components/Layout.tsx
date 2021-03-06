import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const Layout: FC = ({ children }) => {
  return (
    <Box overflowX="hidden" position="relative">
      <Global
        styles={{
          "html,body": {
            background: "#000D37",
            height: "100%",
            width: "100%",
          },
          "@font-face": {
            fontFamily: "WhyteInktrap",
            src: "url('/WhyteInktrap-Regular.woff') format('woff')",
          },
        }}
      />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
