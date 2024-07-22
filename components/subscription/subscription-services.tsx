/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../overview-card';
import {
  MdCampaign,
  MdLightbulb,
  MdMovie,
  MdPhone,
  MdRocket,
  MdSchool,
  MdShoppingBag,
  MdSlideshow,
  MdSmartScreen,
  MdSmartphone,
  MdStadium
} from 'react-icons/md';

export default function SubscriptionBenefits() {
  return (
    <ScaleInEffect>
      <Container
        id='services'
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
          backgroundColor: 'surface.thin'
        }}
      >
        <Flex sx={{ maxWidth: '1000px', gap: 3, flexDirection: 'column' }}>
          <Text variant='body.pretext'>Service offering</Text>

          <Heading>Plans that meet your creative needs</Heading>
          <Text>
            Whether you need ongoing support for small tasks or periodic larger
            projects, The Subscription provides a seamless off-the-rack solution
            just for you.
          </Text>
        </Flex>
        <Grid
          sx={{
            gap: 3,
            gridTemplateColumns: ['1fr', '1fr 1fr', null, null, '1fr 1fr 1fr']
          }}
        >
          <OverviewCard
            icon={<MdLightbulb />}
            heading='Infographics'
            text='Simple animated posters that gives an easy-to-understand overview of a topic or data visualization.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdRocket />}
            heading='Kinetic type videos'
            text='Concisely communicate complex concepts or services.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdSchool />}
            heading='Educational content'
            text='Animated infographics and videos for educational purposes or tutorials.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdSmartphone />}
            heading='Social media content'
            text='Engaging animations or motion graphics for platforms like Instagram, LinkedIn, or YouTube.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdSlideshow />}
            heading='Pitch decks'
            text='A brief presentation that gives potential investors or clients an overview of your business plan, products, and services.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Product demos'
            text='Walkthroughs designed to highlight features and benefits of your app or service.'
            isHeadingSmall
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
