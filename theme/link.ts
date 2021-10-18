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
    outline: {
      bg: "brand.darkBlue",
      border: "solid 1px white",
      borderRadius: "100px",
      color: "white",
      fontSize: "13px",
      px: "25px",
      _hover: {
        color: "brand.darkBlue",
        bg: "white",
        textDecoration: "none",
      }
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
