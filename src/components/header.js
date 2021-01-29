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
          <Grid item xs={3}>
            <Box mt={5}>
              <Typography variant="body1" align="center">
                Hi. We are Fabrice Tobler and Thibault
                Badoux, frontend developers at dreipol. We
                have combined CSS Variables and Material-UI
                on this website to enhance the dark / light
                mode experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </header>
  )
}
