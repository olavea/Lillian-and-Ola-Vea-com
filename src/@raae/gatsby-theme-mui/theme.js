import { createTheme } from "@mui/material/styles";

import themeConfig from "./config";
import themeComponents from "./components";
import themeTypography from "./typography";

// A custom theme for this app
let theme = createTheme(themeConfig);

const options = {
  typography: themeTypography(theme),
  components: themeComponents(theme),
};

theme = createTheme(theme, options);

export default theme;
