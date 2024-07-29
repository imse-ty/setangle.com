/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../overview-card';
import ScaleInEffect from '../scale-in-effect';
import { OfferCard } from './offer-card';

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
          <Text variant='body.pretext'>Pricing</Text>
          <Heading as='h2'>
            Estimates for a 15-30 second full-production video
          </Heading>
          <Text as='p' variant='body.summary'>
            Our projects start at $5,000. This minimum engagement ensures we can
            dedicate the necessary time and resources to deliver high-quality
            motion design that meets your needs.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <OfferCard
            title='Simple'
            text='High-energy, abstract visuals for an engaging, fast-paced experience where motion takes center stage over information, ideal for captivating content and capturing the attention of the viewer.'
            price={process.env.NEXT_PUBLIC_SECOND_SIMPLE}
            bulletPoints={'2-3 weeks'}
          />
          <OfferCard
            title='Standard'
            text='Mixes informative content with eye-catching visuals at a slower pace than Type A, emphasizing detailed storytelling suited for projects needing both information delivery and visual appeal.'
            price={process.env.NEXT_PUBLIC_SECOND_STANDARD}
            bulletPoints={'3-4 weeks'}
          />
          <OfferCard
            title='Sophisticated'
            text='Complex animations, advanced techniques'
            price={process.env.NEXT_PUBLIC_SECOND_SOPHISTICATED}
            bulletPoints={('3-5 weeks', '3-5 weeks')}
          />
        </Flex>
      </Container>

      <Text as='p' variant='body.summary'>
        We&apos;re happy to provide a detailed quote after discussing your
        specific project requirements.
      </Text>
    </ScaleInEffect>
  );
}
