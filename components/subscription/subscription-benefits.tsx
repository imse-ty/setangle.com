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
          <Text variant='body.pretext'>Benefits</Text>

          <Heading>Why choose The Subscription?</Heading>
          <Text>
            Whether you need ongoing support for small tasks or periodic larger
            projects, The Subscription provides a seamless off-the-rack solution
            just for you.
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: 3,
            flexWrap: 'wrap',
            flexDirection: ['column', null, null, 'row']
          }}
        >
          <OverviewCard
            icon={<MdStadium />}
            heading='Flexibility'
            text='With small and medium tasks and the ability to tackle larger projects, you get exactly what you need, when you need it. No need to define work every month.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Efficiency'
            text='Quick turnaround times mean you won’t be waiting long for your projects to be completed.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Cost-effective'
            text='Our subscription model provides high-quality motion design at a predictable monthly cost. Costing less than one freelancer or a large agency, you get three designers on your team for the price of one.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Scalable'
            text='Easily purchase additional work through our credit system, ensuring you can scale up when necessary.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdStadium />}
            heading='Professional quality'
            text='Benefit from the expertise of our skilled designers who deliver top-notch work every time.'
            isHeadingSmall
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
