/** @jsxImportSource theme-ui */
//@ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex, Box } from 'krado-react';
import VideoSection from '../video-section';
import { useState } from 'react';

export default function AboutHero() {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <>
      <Box
        sx={{
          aspectRatio: '16/9',
          width: '100%',
          marginTop: 5,
          marginBottom: 6
        }}
      >
        <VideoSection
          isPlayButtonHidden={false}
          isVideoActive={isVideoActive}
          url='https://vimeo.com/910900048?share=copy'
          previewSrc='walter-preview.webm'
          poster='walter-thumbnail.jpg'
          setIsVideoActive={() => setIsVideoActive(!isVideoActive)}
        />
      </Box>
      <Container
        sx={{
          maxWidth: '1000px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          marginBottom: 5
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: 4, textAlign: 'center' }}>
          <Heading
            as='h2'
            variant='display.h1'
            sx={{ marginBottom: 3, color: 'surface.thin' }}
          >
            Meet the founder
          </Heading>

          <Text
            as='p'
            variant='body.summary'
            sx={{ color: 'surface.extralight' }}
          >
            Imsety is motion designer and developer, and founder of Set Angle.
            Based in Atlanta, he blends his knowledge of design and technology
            to tell good stories.
          </Text>
          <Text
            as='p'
            variant='body.summary'
            sx={{ color: 'surface.extralight' }}
          >
            Since he was six years old, he fell in love with creativity and has
            been learning motion design, coding, and beat-making since he was
            eight years old, which led him to his vibe of crafting stories with
            a blend of animation, tech, and sound.
          </Text>
          <Text
            as='p'
            variant='body.summary'
            sx={{ color: 'surface.extralight' }}
          >
            He partners with creative individuals to create meaningful
            experiences, and has collaborated with Ford, Chick-fil-A, and Keller
            Williams, crafting soulful experiences that range from event
            visuals, advertisements, music videos, to websites.
          </Text>
          <Text
            as='p'
            variant='body.summary'
            sx={{ color: 'surface.extralight' }}
          >
            Let&apos;s connect and make something amazing.
          </Text>
        </Flex>
      </Container>
    </>
  );
}
