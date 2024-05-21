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
  MdStadium,
  MdStar
} from 'react-icons/md';
import { OfferCardNew } from './subscription-offer-card-new';

export default function SubscriptionExample() {
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
          <Text variant='body.pretext'>Use cases and scenarios</Text>

          <Heading>Mix and match</Heading>
          <Text>
            Customize your design experience with our versatile credit-based
            system. Whether you need a focus on the small details, a balanced
            selection of tasks, or an extra boost for larger projects, its up to
            you how you spend your credits.
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: 3,
            flexWrap: 'wrap',
            flexDirection: ['column', null, null, 'row']
          }}
        >
          <OfferCardNew
            valueIcon={
              <MdStar sx={{ color: 'secondary.light', fontSize: 5 }} />
            }
            title='Example A'
            text='Focus on the small details. Perfect for small and medium tasks, for all of your essential design needs.'
            price='The little things'
            priceSubtitle='500 credits'
            bulletPoints={[
              { title: '3 medium tasks', text: '100 credits' },
              { title: '4 small tasks', text: '50 credits' }
            ]}
          />
          <OfferCardNew
            valueIcon={
              <MdStar sx={{ color: 'secondary.light', fontSize: 5 }} />
            }
            title='Example B'
            text='A well-rounded approach with a mix of large, medium, and small tasks. Perfect for addressing diverse project sizes within a single month.'
            price='Balanced mix'
            priceSubtitle='500 credits'
            bulletPoints={[
              { title: '1 large task', text: '300 credits' },
              { title: '1 medium task', text: '100 credits' },
              { title: '2 small tasks', text: '100 credits (50 each)' }
            ]}
          />
          <OfferCardNew
            valueIcon={
              <MdStar sx={{ color: 'secondary.light', fontSize: 5 }} />
            }
            title='Example C'
            text='Maximize your plan with more credits, providing an extra boost to your project capacity. Ideal for high-demand months with significant design needs.'
            price='Extra boost'
            priceSubtitle='500 credits + 250 add-on credits'
            bulletPoints={[
              { title: '2 large tasks', text: '600 credits (300 each)' },
              { title: '3 small tasks', text: '150 credits (50 each)' }
            ]}
          />
        </Flex>

        <Text sx={{ maxWidth: '1000px' }}>
          These are just examples. The choice is yours on how you mix and match!
        </Text>
      </Container>
    </ScaleInEffect>
  );
}
