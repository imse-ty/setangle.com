import { Flex, Button, Container } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import VideoPlayer from './video-player';
import CalEmbed from './cal-embed';
import Modal from './modal';
import { useState } from 'react';
import AvailabilityIndicator from './status-indicator';

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
          maxWidth: '1400px',
          alignItems: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}
      >
        <Text
          variant='body.pretext'
          sx={{ color: 'accent.bold', marginBottom: 2 }}
        >
          A digital creative agency
        </Text>
        <Heading as='h1' variant='display.h1' sx={{ marginBottom: 3 }}>
          Your starter kit for starter&nbsp;companies
        </Heading>
        <Text
          as='p'
          variant='body.summary'
          sx={{ color: 'text.secondary', maxWidth: '1000px' }}
        >
          We help tech and IT startups like yours comminute complex ideas in a
          simple way. Ready to make something cool with us?
        </Text>

        <Flex sx={{ marginTop: 4, flexDirection: ['column', 'row'], gap: 3 }}>
          <Button onClick={() => setIsCalModalOpen(true)}>Get a quote</Button>
          <Button variant='ghost' onClick={() => setIsCalModalOpen(true)}>
            Play reel
          </Button>
        </Flex>
      </Container>
    </>
  );
}
