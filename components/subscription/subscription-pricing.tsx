/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';
import { OfferCard } from './subscription-offer-card';
import { MdStar } from 'react-icons/md';

export default function SubscriptionPricing() {
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
          backgroundColor: 'surface.thin'
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
          <Heading as='h2'>Transparent pricing with exceptional value</Heading>
          <Text as='p' variant='body.summary'>
            Choose the plan that suits you best. Flexible monthly rates with the
            option to scale up as you grow. No surprises, just great design.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <OfferCard
            valueIcon={
              <MdStar sx={{ color: 'secondary.light', fontSize: 5 }} />
            }
            title='Standard'
            text='Continuous creative motion design support for each series, ensuring content remains fresh and engaging.'
            price='$5k'
            recurring='/mo'
            bulletPoints={[
              'Unlimited small requests',
              'Choose between unlimited small requests',
              'Pre-made assets for quick turnaround',
              'Additional work available in 4-hour increments'
            ]}
          />
          <OfferCard
            value='Best value'
            valueIcon={<MdStar sx={{ fontSize: 5 }} />}
            title='Pro'
            text='Continuous creative motion design support for each series, ensuring content remains fresh and engaging.'
            price='$7.5k'
            recurring='/mo'
            bulletPoints={[
              'Unlimited small requests',
              'One 20sec kinetic type video per month',
              'Pre-made assets for quick turnaround',
              'Additional work available in 4-hour increments'
            ]}
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
