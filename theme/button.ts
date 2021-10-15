const button = {
  sizes: {
    lg: {
      fontSize: "sm",
    },
  },
  variants: {
    primary: {
      outline: "none",
      borderRadius: "full",
      fontWeight: "400",
      bg: "brand.purple",
      color: "white",
      px: "6",
      _hover: {
        bg: "white",
        color: "brand.purple",
      },
      _focus: {
        boxShadow: "none",
      },
    },
    mini: {
      outline: "none",
      borderRadius: "lg",
      color: "white.600",
      bg: "white.100",
      px: "4",
      minWidth: "32",
      fontSize: "xs",
      height: "7",
      letterSpacing: "0.15rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      _hover: {
        bg: "brand.purple",
        color: "white",
      },
      _focus: {
        boxShadow: "none",
      },
      _active: {
        bg: "brand.purple",
        color: "white",
      },
    },
    outline: {
      textTransform: "uppercase",
      borderRadius: "100px",
      color: "white",
      fontSize: "13px",
      px: "25px",
      fontWeight: "500",
      _hover: {
        color: "brand.darkBlue",
        bg: "white",
      }
    },
    secondary: {
      outline: "none",
      borderRadius: "none",
      bg: "#202232",
      color: "white",
      px: "6",
      _hover: {
        bg: "white",
        color: "brand.dark",
      },
      _active: {
        bg: "white",
        color: "brand.dark",
      },
      _focus: {
        boxShadow: "none",
      },
    },
    icon: {
      bg: "transparent",
      outline: "none",
      _hover: {
        color: "brand.purple",
        bg: "transparent",
      },
      _active: {
        bg: "transparent",
      },
      _focus: {
        boxShadow: "none",
      },
      color: "transparent",
    },
  },
};

export default button;
