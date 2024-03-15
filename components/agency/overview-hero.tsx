import { Flex, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import VideoPlayer from '../video-player';

export default function OverviewHero() {
  return (
    <Container
      sx={{
        marginTop: 7,
        marginBottom: 4,
        display: 'flex',
        gap: 4,
        textAlign: 'center',
        flexDirection: 'column'
      }}
    >
      <Text variant='body.pretext' sx={{ marginBottom: 2 }}>
        A multidisciplinary digital creative agency
      </Text>
      <Heading as='h1' variant='display.h1'>
        Transforming the ordinary into the&nbsp;extraordinary
      </Heading>
      <Text as='p' variant='body.summary'>
        Crafting well-executed motion and high-quality websites to deliver
        soulful experiences that captivate and inspire.
      </Text>
    </Container>
  );
}
