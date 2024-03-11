import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';

export default function FaqWhatWeDo() {
  return (
    <ScaleInEffect>
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          height: '80vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ maxWidth: '1000px', gap: 3, flexDirection: 'column' }}>
          <Heading>What we do</Heading>
          <Text sx={{}}>
            We blend animation, technology, and sound to transform ordinary
            stories into extraordinary digital experiences.
          </Text>
        </Flex>
        <Grid sx={{ gap: 3, gridTemplateColumns: '1fr 1fr 1fr' }}>
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts'
            isHeadingSmall
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
