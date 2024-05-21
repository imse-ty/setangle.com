/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Flex, Container, Button } from 'krado-react';
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
      <Text variant='body.pretext'>Looking for good people</Text>
      <Heading as='h1' variant='display.display' sx={{ marginBottom: 3 }}>
        Work with us
      </Heading>
      <Text
        as='p'
        variant='body.summary'
        sx={{ maxWidth: '1000px', color: 'secondary.light' }}
      >
        We’re always looking to expand our talent network with skilled
        freelancers ready to tackle exciting projects. Join us, and we&apos;ll
        link you with opportunities that align with your skills
        and&nbsp;passions.
      </Text>
      <Flex sx={{ flexDirection: ['column', 'row'], marginTop: 4, gap: 3 }}>
        <a href='#roles'>
          <Button>Browse opportunities</Button>
        </a>
        <a
          href='https://tally.so/r/w8KKKO'
          target='_blank'
          rel='noindex nofollow'
        >
          <Button variant='ghost'>Join our network</Button>
        </a>
      </Flex>
    </Container>
  );
}
