import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Box, makeStyles } from '@material-ui/core'
import { DarkSmile, LightSmile } from '../components/smiles'
import {
  BlueFlower,
  BlueFlowerBouguet,
  RedFlowers,
} from '../components/flowers'
import { Ellipse } from '../components/ellipse'
import Container from '@material-ui/core/Container'
import { FlowerCard } from '../components/flower-card'
import { BigLetterSection } from '../components/big-letter-section'

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

export default function Home() {
  const classes = useStyles()
  return (
    <div>
      <header style={{ width: '100%' }}>
        <Box mb={30} mt={21}>
          <Grid
            container
            alignItems="center"
            direction="column"
          >
            <Typography variant="h1">
              A short story about dark / light mode
            </Typography>
            <Box style={{ textAlign: 'center' }} mt={10}>
              <DarkSmile />
              <LightSmile
                style={{
                  marginLeft: '-75%',
                  order: '-1',
                }}
              />
            </Box>
            <Grid item xs={2}>
              <Box mt={5}>
                <Typography variant="body1" align="center">
                  Vergiß, vergiß, und laß uns jetzt nur dies
                  erleben, wie die Sterne durch geklärten
                  Nachthimmel dringen, wie der Mond die
                  Gärten voll übersteigt.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </header>
      <main />
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
      <Box
        pt={30}
        pb={30}
        px={11}
        style={{ position: 'relative' }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h2">
                The Cards
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
          <Box mt={11}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <FlowerCard flower="red">
                  <Typography variant="h3">
                    The colors in dark / light mode
                  </Typography>
                </FlowerCard>
              </Grid>
              <Grid item xs={4}>
                <FlowerCard flower="purple">
                  <Typography variant="h3">
                    The colors in dark / light mode
                  </Typography>
                </FlowerCard>
              </Grid>
              <Grid item xs={4}>
                <FlowerCard flower="green">
                  <Typography variant="h3">
                    The colors in dark / light mode
                  </Typography>
                </FlowerCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <BigLetterSection />
      <footer />
    </div>
  )
}
