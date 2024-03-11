/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';

export default function FaqProcess() {
  return (
    <ScaleInEffect>
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          marginBottom: 6,
          height: '150vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ gap: 4, height: '100%', paddingY: 6 }}>
          <Flex
            sx={{
              position: 'sticky',
              height: '25%',
              top: 8,
              flexDirection: 'column',
              flex: 4
            }}
          >
            <ScaleInEffect>
              <Heading as='h2'>
                Transforming the ordinary into the&nbsp;extraordinary
              </Heading>
              <Text as='p' variant='body.summary'>
                Crafting well-executed motion and high-quality websites to
                deliver soulful experiences that captivate and inspire.
              </Text>
            </ScaleInEffect>
          </Flex>
          <Flex
            sx={{
              maxWidth: '1000px',
              gap: 3,
              flexDirection: 'column',
              flex: 3
            }}
          >
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
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
