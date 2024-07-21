/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Grid } from 'krado-react';
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
import { OfferCardNew } from './subscription-offer-card-new';

export default function SubscriptionTaskSize() {
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
          <Text variant='body.pretext'>Credit system</Text>

          <Heading>Allocate your credits according to your needs</Heading>
          <Text>
            Each plan includes a set number of credits. You can use these
            credits to request different types of design tasks to help manage
            your subscription. This quick guide helps you determine which task
            fits your needs.
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
            heading='Small tasks - 50 credits'
            text='Quick and simple projects like basic logo animations, infographics, and social media&nbsp;templates.'
            isHeadingSmall
          />
          <OverviewCard
            heading='Medium tasks - 100 credits'
            text='Moderately detailed work such as intricate text animations, pitch decks, stream packages, and short animated segments (less than 10 seconds).'
            isHeadingSmall
          />
          <OverviewCard
            heading='Large tasks - 300 credits'
            text='Extensive projects including full 20-second kinetic type explainer videos, complex animations, and extensive video edits.'
            isHeadingSmall
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
