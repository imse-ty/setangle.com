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
        id="newsletter"
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
          <Text variant="body.pretext">Private newsletter</Text>
          <Heading>Get insider agency updates</Heading>
          <Text>
            Sign-up to &apos;The Angle&apos; for a behind-the-scenes glimpse of
            what Set Angle is doing, updates on upcoming services, and to read
            insightful whitepapers about our projects.
          </Text>
        </Flex>
        <Box sx={{ width: [null, null, '700px'] }}>
          <NewsletterEmbed />
        </Box>
      </Container>
    </ScaleInEffect>
  );
}
