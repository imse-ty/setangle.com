import { Flex, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import VideoPlayer from '../video-player';

export default function PeopleHero() {
  return (
    <Container
      sx={{
        marginTop: 7,
        marginBottom: 4,
        display: 'flex',
        gap: 3,
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Text variant='body.pretext'>We are looking for</Text>
      <Heading as='h1' variant='display.display' sx={{ marginBottom: 3 }}>
        Good people
      </Heading>
      <Text as='p' variant='body.summary' sx={{ maxWidth: '1000px' }}>
        We blend animation, technology, and sound to transform ordinary stories
        into soulful brand experiences that inspire the culture we live in
        today.
      </Text>
    </Container>
  );
}
