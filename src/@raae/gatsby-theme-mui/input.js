const themeInput = (theme) => {
  return {
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
  };
};

export default themeInput;
