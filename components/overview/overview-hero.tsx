import { Flex, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import VideoPlayer from '../video-player';

export default function OverviewHero() {
  return (
    <Container
      sx={{
        marginTop: 7,
        marginBottom: 6,
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
      }}
    >
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
