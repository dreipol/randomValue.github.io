import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'

export const AppBarWrapper = ({ toggleDarkMode }) => (
  <AppBar position="sticky" color="inherit" elevation={0}>
    <Toolbar>
      <Grid
        justify="center"
        container
        alignItems="center"
        style={{
          paddingTop: '10px',
          paddingBottom: '12px',
        }}
      >
        <Typography
          style={{
            fontSize: '1.5rem',
            lineHeight: '2.1',
          }}
        >
          light
        </Typography>
        <Switch color="default" onChange={toggleDarkMode} />
        <Typography
          style={{
            fontSize: '1.5rem',
            lineHeight: '2.1',
          }}
        >
          dark
        </Typography>
      </Grid>
    </Toolbar>
    <Divider />
  </AppBar>
)
