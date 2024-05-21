/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';
import {
  MdLightbulb,
  MdMovie,
  MdPhone,
  MdSchool,
  MdShoppingBag,
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
            icon={<MdStadium />}
            heading='Pitch decks'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Infographics'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Kinetic type videos'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Educational content'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Social media content'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Product demos'
            isHeadingSmall
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
