const styles = {
  variants: {
    cta: {
      textTransform: "uppercase",
      color: "white",
      whitespace: "nowrap",
      textAlign: "center",
      fontSize: ["lg", null, "xl"],
      _hover: {
        bg: "brand.purple",
        textDecoration: "none",
      },
    },
    animated: {
      position: "relative",
      pb: "1px",
      fontWeight: "bold",
      _after: {
        content: '""',
        position: "absolute",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "1px",
        bg: "white",
        transition: "all ease-in-out .2s",
      },
      _hover: {
        textDecoration: "none",
        _after : {
          width: "0",
        }
      },
    },
  },
};

export default styles;
