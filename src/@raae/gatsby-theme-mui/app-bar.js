const themeAppBar = (theme) => {
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "sticky",
        color: "transparent",
      },
      styleOverrides: {
        colorTransparent: {
          backgroundColor: "#ffffffb3",
          backdropFilter: "blur(20px)",
          borderBottom: "thin",
          borderColorBottom: "#fff",
        },
      },
    },
  };
};

export default themeAppBar;
