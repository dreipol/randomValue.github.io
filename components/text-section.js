import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Box, makeStyles } from '@material-ui/core'
import { Ellipse } from './ellipse'
import {
  BlueFlower,
  BlueFlowerBouguet,
  RedFlowers,
} from './flowers'

const useStyles = makeStyles((theme) => ({
  ellipseBG: {
    position: 'absolute',
    bottom: '-5px',
    right: 0,
  },
  flowers: {
    position: 'absolute',
    right: '132px',
    bottom: '80px',
  },
  paperBG: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export const TextSection = () => {
  const classes = useStyles()

  return (
    <Box
      pt={30}
      pb={76}
      px={11}
      style={{ position: 'relative' }}
      className={classes.paperBG}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h2">
              The colors in dark / light mode
            </Typography>
            <Typography variant="body1">
              To display colors in the two different modes,
              CSS Variables are in combination with MUI
              themes. The MUI themes control the background.
              The flowers are controlled by CSS Variables.
              To share the color values with MUI and CSS
              Variables, we saved them in a JSON file. From
              this file, we assigned them either to MUI or
              the variables.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.ellipseBG}>
        <Ellipse />
      </Box>
      <Box className={classes.flowers}>
        <Box display="inline-block" mr={-15}>
          <BlueFlower />
        </Box>
        <Box display="inline-block">
          <BlueFlowerBouguet />
        </Box>
        <Box display="inline-block">
          <RedFlowers />
        </Box>
      </Box>
    </Box>
  )
}
