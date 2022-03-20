const themeComponents = (theme) => {
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiLink: {
      defaultProps: {
        color: "secondary",
      },
    },
  };
};

export default themeComponents;
