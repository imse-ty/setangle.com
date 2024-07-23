/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../overview-card';
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
import { OfferCard } from './subscription-offer-card';
import { PromoOfferCard } from './promo-offer-card';

export default function StartupOffer() {
  return (
    <ScaleInEffect>
      <Container
        id='offer'
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
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <PromoOfferCard
            title='The launchpad package'
            text='Get your startup off the ground with our essential branding and design package.'
            bulletPoints={[
              'Custom logo and brand identity',
              'Sleek 3-page website',
              'Basic SEO',
              '15s hype video'
            ]}
          />
          <PromoOfferCard
            title='Marketing momentum support'
            text='Accelerate your growth with continuous content and web optimization, cancel anytime.'
            bulletPoints={[
              'Social media content',
              'Unlimited designs',
              'Website updates',
              'SEO optimization'
            ]}
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
