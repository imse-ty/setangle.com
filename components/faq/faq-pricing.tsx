/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';
import { OfferCard } from './offer-card';

export default function FaqMotionSystem() {
  const classADeliverables = [
    'Pre-show videos for events',
    'Music videos',
    'Abstract trailers & teasers',
    'Title sequences',
    'Kinetic typography pieces'
  ];

  const classBDeliverables = [
    'Product ads',
    'Explainer videos',
    'Advertising campaigns',
    'Educational content',
    'Short documentaries'
  ];

  const classCDeliverables = [
    'Infographics & slideshows',
    'Animated presentations',
    'Data visualizations',
    'Logo animations',
    'Product walkthroughs'
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
          <Heading as='h2'>Estimates for a 30 second video</Heading>
          <Text as='p' variant='body.summary'>
            Tranparent pricing{' '}
            <strong>based on content length and level of effort</strong> for
            unparalleled quality. Choose your class that best fits your
            project&apos;s goals.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <OfferCard
            title='30-second Class A video'
            text='High-energy, abstract visuals for an engaging, fast-paced experience where motion takes center stage over information, ideal for captivating content and capturing the attention of the viewer.'
            price={process.env.NEXT_PUBLIC_CALVIN_CLASS_A}
            bulletPoints={classADeliverables}
          />
          <OfferCard
            title='30-second Class B video'
            text='Mixes informative content with eye-catching visuals at a slower pace than Type A, emphasizing detailed storytelling suited for projects needing both information delivery and visual appeal.'
            price={process.env.NEXT_PUBLIC_CALVIN_CLASS_B}
            bulletPoints={classBDeliverables}
          />
          <OfferCard
            title='30-second Class C video'
            text='Simplified and clear storytelling to support information delivery with straightforward, well-executed motion and type.'
            price={process.env.NEXT_PUBLIC_CALVIN_CLASS_C}
            bulletPoints={classCDeliverables}
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
