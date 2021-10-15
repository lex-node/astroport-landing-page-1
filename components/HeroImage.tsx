import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./hero.json";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const HeroImage = () => {
  const child = {
    normal: false,
    hover: { y: [0, 15, 0] },
  };

  return (
    <MotionBox
      position="absolute"
      h="560px"
      w="1200px"
      display={["none", "none", "none", "block"]}
      initial="normal"
      whileHover="hover"
      right={["-250px", null, null, null, null, "0"]}
      top="350px"
    >
      <Box position="absolute" top="0">
        <Image src="/home-bg.png" alt="Screenshot" w="full" />
      </Box>
      <Box position="absolute" zIndex="2" top="215px" right="455px" w="41%">
        <MotionImage
          src="/1.png"
          alt="Screenshot"
          variants={child}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </Box>
      <Box position="absolute" zIndex="2" top="55px" right="180px" w="41%">
        <MotionImage
          src="/2.png"
          alt="Screenshot"
          variants={child}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </Box>
      <Box position="absolute" zIndex="2" top="315px" right="285px" w="41%">
        <MotionImage
          src="/3.png"
          alt="Screenshot"
          variants={child}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </Box>
      <Box position="absolute" zIndex="2" top="155px" right="10px" w="41%">
        <MotionImage
          src="/4.png"
          alt="Screenshot"
          variants={child}
          transition={{
            duration: 3,
            ease: "easeInOut",

            delay: 2,
          }}
        />
      </Box>
    </MotionBox>
  );
};

export default HeroImage;
