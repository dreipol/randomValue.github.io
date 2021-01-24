import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {
  RedFlower,
  GreenFlower,
  PurpleFlower,
} from './flowers'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = (flower) => {
  const bgColor = (flower) => {
    if (flower === 'red') {
      return 'var(--colors-red-100)'
    }
    if (flower === 'purple') {
      return 'var(--colors-purple-100)'
    }
    if (flower === 'green') {
      return 'var(--colors-green-100)'
    }
  }

  return makeStyles({
    flowerCircle: {
      position: 'relative',
      paddingTop: '100px',
      '&::before': {
        position: 'absolute',
        content: '" "',
        width: '413px',
        height: '413px',
        backgroundColor: bgColor(flower),
        borderRadius: '50%',
        right: '-256px',
        bottom: '-153px',
      },
    },
  })
}

export const FlowerCard = ({ flower, ...props }) => {
  const classes = useStyles(flower)()
  return (
    <Card elevation={0}>
      <Box px={3} pt={3}>
        {props.children}
        <Box pt={13} ml="auto" mr={0}>
          <Grid container justify="center">
            <Grid item className={classes.flowerCircle}>
              {flower === 'red' && (
                <RedFlower
                  style={{ position: 'relative' }}
                />
              )}
              {flower === 'green' && (
                <GreenFlower
                  style={{ position: 'relative' }}
                />
              )}
              {flower === 'purple' && (
                <PurpleFlower
                  style={{ position: 'relative' }}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  )
}
