const styles = {
  baseStyle: {
    list: {
      bg: "#EFF5FF",
      border: "none",
      boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.48)",
      borderRadius: "2xl",
      marginTop: "4",
      py: ".5rem",
    },
    item: {
      py: ".6rem",
      px: "1.2rem",
      color: "black",
      fontWeight: "500",
      fontSize: "md",
      _hover: {
        textDecoration: "underline",
      },
      _focus: {
        bg: "transparent",
      },
      _active: {
        bg: "transparent",
      },
      _expanded: {
        bg: "transparent",
      },
    },
  },
};

export default styles;
