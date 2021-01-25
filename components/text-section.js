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
              Vergiß, vergiß, und laß uns jetzt nur dies
              erleben, wie die Sterne durch geklärten
              Nachthimmel dringen, wie der Mond die Gärten
              voll übersteigt. Wir fühlten längst schon,
              wie's spiegelnder wird im Dunkeln; wie ein
              Schein entsteht, ein weißer Schatten in dem
              Glanz der Dunkelheit. Nun aber laß uns ganz
              hinübertreten in die Welt hinein die monden
              ist.
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
