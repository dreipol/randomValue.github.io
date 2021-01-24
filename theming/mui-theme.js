import { createMuiTheme } from "@material-ui/core";
import CustomTheme from "./custom-theme";
import darkColors from "./colors-dark.json";
import lightColors from "./colors-light.json";

export const Theme = (isDarkmode) => {
  return createMuiTheme({
    ...CustomTheme(
      isDarkmode
        ? { ...lightColors.colors, ...darkColors.colors }
        : lightColors.colors,
      isDarkmode
    )
  });
};
