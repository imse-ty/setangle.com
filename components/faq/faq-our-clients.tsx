import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';

export default function FaqOurClients() {
  return (
    <ScaleInEffect>
      <Container
        sx={{
          display: 'flex',
          gap: 5,

          justifyContent: 'center',
          alignItems: 'center',

          marginBottom: 6,
          height: '100vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex
          sx={{
            flex: 3,
            maxWidth: '1000px',
            gap: 3,
            flexDirection: 'column'
          }}
        >
          <Heading>Who we serve</Heading>
          <Text sx={{}}>
            We blend animation, technology, and sound to transform ordinary.
          </Text>
        </Flex>
        <Grid
          sx={{
            flex: 4,
            gap: 3,
            gridTemplateColumns: '1fr 1fr'
          }}
        >
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts '
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts '
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts '
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
