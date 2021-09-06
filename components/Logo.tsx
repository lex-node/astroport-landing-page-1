import React from "react";
import { chakra, Box } from "@chakra-ui/react";

import { motion } from "framer-motion";

const SvgMotion = motion(chakra.svg);

export default function Logo(props) {
  return (
    <Box style={{ perspective: 400 }}>
      <SvgMotion
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotateY: [-15, 15, -15],
          rotateX: [5, 10, 5],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
        {...props}
      >
        <rect width="100" height="100" rx="50" fill="white" />
        <path
          d="M59.75 27.95V16.4L49.5 14V25.55L39.25 23.15V34.73L29 32.33V69.62L39.25 72.05V83.6L49.5 86V74.45L59.75 76.85V65.27L70 67.67V30.38L59.75 27.95ZM51.5378 67.22L37.2122 63.86V41.93L51.5378 45.32V67.22Z"
          fill="#232C45"
        />
      </SvgMotion>
    </Box>
  );
}
