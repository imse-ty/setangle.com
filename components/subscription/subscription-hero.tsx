/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Button } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import VideoPlayer from '../video-player';

export default function SubscriptionHero() {
  return (
    <Container
      sx={{
        marginTop: 7,
        marginBottom: 4,
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column'
      }}
    >
      <Text variant='body.pretext' sx={{ marginBottom: 2 }}>
        Motion design subscription
      </Text>
      <Heading as='h1' variant='display.h1' sx={{ marginBottom: 3 }}>
        Elevate your brand
        <br />
        with seamless motion design
      </Heading>
      <Text as='p' variant='body.summary' sx={{ maxWidth: '1000px' }}>
        Introducing The Subscription by Set Angle, your reliable pay-as-you-go
        design solution.
      </Text>
      <Button sx={{ marginTop: 4 }}>Learn more</Button>
    </Container>
  );
}
