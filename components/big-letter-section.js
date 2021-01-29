import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { DarkSmile, LightSmile } from './smiles'
import { Box } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  outlineCircle: {
    position: 'relative',
    '&::before': {
      content: '" "',
      position: 'absolute',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      border: '4px solid var(--colors-background-inverted)',
      bottom: '-65px',
      left: '430px',
    },
  },
  bigLetters: {
    position: 'relative',
    '&::before': {
      content: '" "',
      position: 'absolute',
      width: '1280px',
      height: '1280px',
      borderRadius: '50%',
      backgroundColor: 'var(--colors-bg-secodary)',
      top: '-60px',
      left: '-610px',
    },
  },
}))

export const BigLetterSection = ({ isDarkMode }) => {
  const classes = useStyles()
  return (
    <Box p={7} style={{ overflowX: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.bigLetters}
        >
          <Grid item>
            <Typography
              display="block"
              style={{
                position: 'relative',
                fontSize: '18.75rem',
                lineHeight: 1,
              }}
            >
              The
            </Typography>
          </Grid>
          <Grid item xs={5}>
            {isDarkMode ? (
              <LightSmile
                style={{ position: 'relative' }}
              />
            ) : (
              <DarkSmile style={{ position: 'relative' }} />
            )}
          </Grid>
        </Grid>
        <Typography
          display="block"
          style={{
            position: 'relative',
            fontSize: '18.75rem',
            lineHeight: 1,
            opacity: 0.8,
          }}
        >
          shades in
        </Typography>
        <Typography
          display="block"
          style={{
            position: 'relative',
            fontSize: '18.75rem',
            lineHeight: 1,
            opacity: 0.6,
          }}
        >
          dark /
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={6}>
            <Typography
              display="block"
              style={{
                position: 'relative',
                fontSize: '18.75rem',
                lineHeight: 1,
                opacity: 0.4,
              }}
            >
              light
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ position: 'relative' }}
            className={classes.outlineCircle}
          >
            <Typography
              variant="body1"
              style={{
                position: 'relative',
              }}
            >
              MUI is powerful in creating fast and
              functional themes. To control elements
              individually, we use CSS Variables.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          display="block"
          style={{
            position: 'relative',
            fontSize: '18.75rem',
            lineHeight: 1,
            opacity: 0.2,
          }}
        >
          mode
        </Typography>
      </Container>
    </Box>
  )
}
