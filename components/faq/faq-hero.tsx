import { Flex, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import VideoPlayer from '../video-player';

export default function FaqHero({ name }) {
  return (
    <Container
      sx={{
        marginTop: 7,
        marginBottom: 4,
        display: 'flex',
        gap: 4,
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Text variant='body.pretext' sx={{ marginBottom: 2 }}>
        Frequently asked questions
      </Text>
      <Heading as='h1' variant='display.h1'>
        Hello{name}, welcome to a space where creativity meets logic
      </Heading>
      <Text as='p' variant='body.summary' sx={{ maxWidth: '1000px' }}>
        We blend animation, technology, and sound to transform ordinary stories
        into soulful brand experiences that inspire the culture we live in
        today.
      </Text>
    </Container>
  );
}
