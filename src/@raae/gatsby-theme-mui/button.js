const themeButton = (theme) => {
  return {
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
  };
};

export default themeButton;
