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
  MdStadium
} from 'react-icons/md';

export default function OfferMission() {
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
          minHeight: '50vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ maxWidth: '1000px', gap: 3, flexDirection: 'column' }}>
          <Text variant='body.pretext' sx={{ color: 'accent.bold' }}>
            Our mission
          </Text>

          <Heading>We want to see you grow</Heading>
          <Text sx={{ color: 'text.secondary' }}>
            At Set Angle, we believe in the power of great design to drive
            success. Our mission is to help tech and IT startups tell their
            story and reach their full potential.
          </Text>
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
