/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';

export default function FaqAbout() {
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
          height: '80vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex sx={{ maxWidth: '1000px', gap: 3, flexDirection: 'column' }}>
          <Heading>About</Heading>
          <Text sx={{}}>
            We blend animation, technology, and sound to transform ordinary
            stories into extraordinary digital experiences. <br />
            <br />
            Spotlighting brands like Ford, Chick-fil-A, and Keller Williams, we
            specialize in creating captivating visuals for events, music, and
            advertising that resonate deeply with audiences.
            <br />
            <br />
            Based in Atlanta, our passion lies in crafting soulful brand
            experiences that inspire the culture we live in today.
          </Text>
        </Flex>
        <Button>Sign-up</Button>
      </Container>
    </ScaleInEffect>
  );
}
