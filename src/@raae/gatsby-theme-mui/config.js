import { purple, red } from "@mui/material/colors";

const themeConfig = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightRegular: 400,
    fontWeightExtraBold: 900,
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "content"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      content: 700,
    },
  },
  palette: {
    brand: red["A700"],
    primary: { main: red["A700"] },
    secondary: { main: purple["600"] },
  },
};

export default themeConfig;
