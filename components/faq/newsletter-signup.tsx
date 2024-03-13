/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button, Box } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { Field, Input } from 'theme-ui';
import Modal from '../modal';
import { useState } from 'react';
import NewsletterEmbed from '../newsletter-embed';

export default function NewsletterSignup() {
  const [isNewsletterSignupOpen, setIsNewsletterSignupOpen] = useState(false);

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
          <Text variant="body.pretext">Private newsletter</Text>
          <Heading variant="display.h3">
            You&apos;re invited to a world of exclusive agency updates
          </Heading>
          <Text variant="body.summary">
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
