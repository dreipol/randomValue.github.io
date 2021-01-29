import { createMuiTheme } from '@material-ui/core'
import CustomTheme from './custom-theme-no-dark-mode'

export const Theme = () => {
  return createMuiTheme(CustomTheme)
}
