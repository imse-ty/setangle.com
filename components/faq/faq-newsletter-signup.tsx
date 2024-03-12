/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Box } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import NewsletterEmbed from '../newsletter-embed';

export default function FaqNewsletter() {
  return (
    <ScaleInEffect>
      <Container
        id='newsletter'
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
        <Flex sx={{ gap: 3, flexDirection: 'column' }}>
          <Text variant='body.pretext'>Exclusive newsletter</Text>
          <Heading>Get exclusive agency updates</Heading>
          <Text>
            Join &apos;The Angle&apos; for curated insights, updates, future
            offerings, and behind-the-scenes access on what Set Angle is up too.
          </Text>
        </Flex>
        <Box sx={{ width: [null, null, '700px'] }}>
          <NewsletterEmbed />
        </Box>
      </Container>
    </ScaleInEffect>
  );
}
