/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';

export default function FaqBookCall() {
  return (
    <ScaleInEffect>
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          height: '50vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ gap: 3, flexDirection: 'column' }}>
          <Heading>Book A call</Heading>
          <Text>
            Exclusive insights, trends, and behind-the-scenes access await. Dive
            in with just a click!
          </Text>
        </Flex>
        <Button>Sign-up</Button>
      </Container>
    </ScaleInEffect>
  );
}
