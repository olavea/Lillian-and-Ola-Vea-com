import { red } from "@mui/material/colors";

const config = {
  palette: {
    primary: {
      main: red.A700,
    },
  },
  typography: {
    fontSize: 18,
  },
  components: {
    // Name of the component
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
      defaultProps: {
        disableElevation: true,
      },
    },
  },
};

export default config;
