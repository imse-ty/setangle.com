import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { Field, Input } from 'theme-ui';

export default function NewsletterSignup() {
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
          paddingY: 5,
          minHeight: '70vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ gap: 3, flexDirection: 'column', maxWidth: '1000px' }}>
          <Text variant='body.pretext'>Exclusive newsletter</Text>
          <Heading variant='display.h3'>
            You&apos;re invited to a world of exclusive agency updates
          </Heading>
          <Text variant='body.summary'>
            Join &apos;The Angle&apos; for curated insights, updates, future
            offerings, and behind-the-scenes access on what Set Angle is up too.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3 }}>
          <Input placeholder='Email address' sx={{ flex: 1 }} />
          <Button>Sign-up</Button>
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}