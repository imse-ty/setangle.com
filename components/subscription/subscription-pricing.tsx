/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../overview-card';
import ScaleInEffect from '../scale-in-effect';
import { OfferCard } from './subscription-offer-card';
import { MdLightbulb, MdStar } from 'react-icons/md';
import { MiniOfferCard } from './subscription-mini-offer-card';
import { OfferCardNew } from './subscription-offer-card-new';

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
          minHeight: '120vh',
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
        <Flex sx={{ gap: 3, flexDirection: 'column' }}>
          <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
            <OfferCard
              valueIcon={
                <MdStar sx={{ color: 'secondary.light', fontSize: 5 }} />
              }
              title='The Subscription'
              text='Continuous creative motion design support, ensuring content remains fresh and engaging.'
              price='$5k'
              priceSubtitle='500 credits'
              recurring='/mo'
              bulletPoints={[
                {
                  title: 'Small tasks (unlimited revisions)',
                  text: '50 credits'
                },
                {
                  title: 'Medium tasks (2 rounds of revisions)',
                  text: '100 credits'
                },
                {
                  title: 'Large tasks (2 rounds of revisions)',
                  text: '300 credits'
                },
                'Unlimited revisions for small tasks',
                'Up to two rounds of revisions for medium and large tasks',
                'Allocate credits as per your project needs',
                'Pre-made assets for quick turnaround',
                'Tasks acknowledged within 1 business day',
                'Average turnaround time of 3-7 business days per tasks',
                'Average turnaround time of 1-2 weeks for large tasks',
                'Professional designers allocated to your project',
                'Consistent quality and communication',
                'Up to 5 medium tasks per month',
                'Up to 2 large tasks per month'
              ]}
            />
            {/* <OfferCard
              value='Best value'
              valueIcon={<MdStar sx={{ fontSize: 5 }} />}
              title='Pro'
              text='Continuous creative motion design support for each series, ensuring content remains fresh and engaging.'
              price='$7.5k'
              priceSubtitle='750 credits'
              recurring='/mo'
              bulletPoints={[
                '5 small tasks (25 credits each)',
                '2 medium tasks (75 credits each)',
                '1 large task (250 credits)',
                'Pre-made assets for quick turnaround'
              ]}
            /> */}
          </Flex>
          <MiniOfferCard
            value='Additional work'
            valueIcon={<MdStar sx={{ fontSize: 5 }} />}
            title='Additional work'
            subtitle='If you need more, simply purchase additional work in increments as&nbsp;credits.'
            price='$2.5k increments'
            priceSubtitle='250 credits'
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
