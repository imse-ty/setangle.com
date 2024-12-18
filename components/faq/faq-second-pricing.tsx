/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../overview-card';
import ScaleInEffect from '../scale-in-effect';
import { OfferCard } from './offer-card';
import { SimpleOfferCard } from './simple-offer-card';

export default function FaqSecondPricing() {
  const classADeliverables = [
    'Concept development',
    'Storyboarding',
    'Animation',
    'Basic sound design',
    'Two rounds of revisions'
  ];

  const classBDeliverables = [
    'Concept development',
    'Storyboarding',
    'Animation',
    'Basic sound design',
    'Two rounds of revisions'
  ];

  const classCDeliverables = [
    'Concept development',
    'Storyboarding',
    'Animation',
    'Basic sound design',
    'Two rounds of revisions'
  ];

  return (
    <ScaleInEffect>
      <Container
        id='pricing'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          paddingY: 5,
          minHeight: '100vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 3,
            maxWidth: '1000px'
          }}
        >
          <Text variant='body.pretext' sx={{ color: 'accent.bold' }}>
            Pricing
          </Text>
          <Heading as='h2'>
            Estimates for a 15-30 second full-production video
          </Heading>
          <Text as='p' variant='body.summary' sx={{ color: 'text.secondary' }}>
            Our projects start at $5,000. This minimum engagement ensures we can
            dedicate the necessary time and resources to deliver high-quality
            motion design that meets your needs.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <SimpleOfferCard
            title='Simple'
            price='$5-8k'
            text='Basic animations, minimal complexity'
            priceSubtitle='Based on length, timeline, and scope'
            bulletPoints={[
              {
                title: '15 seconds',
                text: '$5,000, 1-2 weeks'
              },
              {
                title: '25 seconds',
                text: '$7,000, 2-3 weeks'
              },
              {
                title: '30 seconds',
                text: '$8,000, 2-3 weeks'
              }
            ]}
          />
          <SimpleOfferCard
            title='Enhanced'
            price='$8-15k'
            text='More detailed animations, moderate complexity'
            priceSubtitle='Based on length, timeline, and scope'
            bulletPoints={[
              {
                title: '15 seconds',
                text: '$8,000, 2-3 weeks'
              },
              {
                title: '25 seconds',
                text: '$13,000, 3-4 weeks'
              },
              {
                title: '30 seconds',
                text: '$15,000, 3-5 weeks'
              }
            ]}
          />
          <SimpleOfferCard
            title='Sophisticated'
            price='$12-23k'
            text='Complex animations, advanced techniques'
            priceSubtitle='Based on length, timeline, and scope'
            bulletPoints={[
              {
                title: '15 seconds',
                text: '$12,000, 2-3 weeks'
              },
              {
                title: '25 seconds',
                text: '$19,000, 3-5 weeks'
              },
              {
                title: '30 seconds',
                text: '$23,000, 4-6 weeks'
              }
            ]}
          />
        </Flex>
        <Text as='p' variant='body.summary' sx={{ color: 'text.secondary' }}>
          We&apos;re happy to provide a detailed quote after discussing your
          specific project requirements!
        </Text>
      </Container>
    </ScaleInEffect>
  );
}
