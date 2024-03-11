/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';

export default function FaqMotionSystem() {
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
        <Flex
          sx={{
            flexDirection: 'column'
          }}
        >
          <Heading as='h2'>
            Transforming the ordinary into the&nbsp;extraordinary
          </Heading>
          <Text as='p' variant='body.summary'>
            Crafting well-executed motion and high-quality websites to deliver
            soulful experiences that captivate and inspire.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: 'row' }}>
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts or services with eye-catching motion.'
            isHeadingSmall={true}
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts or services with eye-catching motion.'
            isHeadingSmall={true}
          />
          <OverviewCard
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts or services with eye-catching motion.'
            isHeadingSmall={true}
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
