import { createMuiTheme } from '@material-ui/core'
import CustomTheme from './custom-theme'
import darkColors from './colors-dark.json'
import lightColors from './colors-light.json'
export const Theme = () => {
  return createMuiTheme({
    ...CustomTheme(lightColors.colors),
    palette: {
      ...CustomTheme(lightColors.colors).palette,
    },
  })
}