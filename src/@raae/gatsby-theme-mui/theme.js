import { createTheme } from "@mui/material/styles";

import themeConfig from "./config";
import themeButton from "./button";
import themeAppBar from "./app-bar";
import themeTypography from "./typography";
import themeInput from "./input";

// A custom theme for this app
let theme = createTheme(themeConfig);

const options = {
  typography: themeTypography(theme),
  components: {
    ...themeAppBar(theme),
    ...themeButton(theme),
    ...themeInput(theme),
  },
};

theme = createTheme(theme, options);

export default theme;
