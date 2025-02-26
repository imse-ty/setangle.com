/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Flex, Button, Container } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import VideoPlayer from './video-player';
import CalEmbed from './cal-embed';
import Modal from './modal';
import { useState } from 'react';
import AvailabilityIndicator from './status-indicator';
import Link from 'next/link';

export default function OverviewHero() {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)}>
        <CalEmbed />
      </Modal>
      <Container
        sx={{
          marginTop: [6, 7],
          marginBottom: 4,
          display: 'flex',
          gap: 3,
          alignItems: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        <Text
          variant="body.pretext"
          sx={{ color: 'accent.bold', marginBottom: 2 }}
        >
          A digital creative agency
        </Text>
        <Heading as="h1" variant="display.h1" sx={{ marginBottom: 3 }}>
          Transforming the ordinary into the&nbsp;extraordinary
        </Heading>
        <Text
          as="p"
          variant="body.summary"
          sx={{ color: 'text.secondary', maxWidth: '1000px' }}
        >
          We help brands shine by creating soulful animated visuals for
          marketing campaigns and events.
        </Text>
        <Flex
          sx={{
            display: 'flex',
            marginLeft: 2,
            gap: '12px',
            marginTop: 4,
            position: 'relative',
            alignItems: 'center',
            marginBottom: -1
          }}
        >
          <AvailabilityIndicator />
          <Text variant="body.footnote" sx={{ color: 'accent.light' }}>
            We&apos;re looking for an assistant!{' '}
            <Link
              href="/work-with-us/assistant"
              sx={{ color: 'primary.regular' }}
            >
              Click here
            </Link>{' '}
            to learn more.
          </Text>
        </Flex>
        <Flex sx={{ flexDirection: ['column', 'row'], gap: 3 }}>
          <Button onClick={() => setIsCalModalOpen(true)}>
            Let&apos;s book a call
          </Button>
        </Flex>
      </Container>
    </>
  );
}
