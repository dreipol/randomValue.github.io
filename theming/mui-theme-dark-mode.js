import { createMuiTheme } from '@material-ui/core'
import CustomTheme from './custom-theme-dark-mode'

export const DarkMode = () => {
  return createMuiTheme(CustomTheme)
}
