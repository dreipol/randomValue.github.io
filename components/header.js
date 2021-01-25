import { Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { DarkSmile, LightSmile } from './smiles'
import { useState } from 'react'

export const Header = ({ isDarkMode }) => {
  const [
    animationIsFinished,
    setAnimationIsFinished,
  ] = useState(false)
  return (
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
            <DarkSmile
              style={{
                position: 'relative',
                zIndex: isDarkMode ? 1 : 0,
                transform: isDarkMode
                  ? 'translateX(-50.2%)'
                  : 'translateX(0)',
                transition: 'transform 250ms ease-in-out',
              }}
            />
            <LightSmile
              style={{
                marginLeft: '-75%',
                order: '-1',
                transform: isDarkMode
                  ? 'translateX(50.2%)'
                  : 'translateX(0)',
                transition: 'transform 250ms ease-in-out',
              }}
            />
          </Box>
          <Grid item xs={2}>
            <Box mt={5}>
              <Typography variant="body1" align="center">
                Vergiß, vergiß, und laß uns jetzt nur dies
                erleben, wie die Sterne durch geklärten
                Nachthimmel dringen, wie der Mond die Gärten
                voll übersteigt.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </header>
  )
}
