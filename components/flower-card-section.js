import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import { FlowerCard } from './flower-card'

export const FlowerCardSection = () => {
  return (
    <Box
      pt={30}
      pb={30}
      px={11}
      style={{ position: 'relative' }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h2">The Cards</Typography>
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
  )
}
