import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';
import {
  MdLaptop,
  MdLocationCity,
  MdMood,
  MdTerminal,
  MdVolunteerActivism
} from 'react-icons/md';

export default function FaqOurClients() {
  return (
    <ScaleInEffect>
      <Container
        id='clientele'
        sx={{
          display: 'flex',
          gap: 5,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          paddingY: 5,
          minHeight: '70vh',
          borderRadius: 4,
          flexDirection: ['column', 'row'],
          backgroundColor: 'surface.black'
        }}
      >
        <Flex
          sx={{
            flex: 3,
            maxWidth: '1000px',
            gap: 3,
            flexDirection: 'column'
          }}
        >
          <Text variant='body.pretext'>Our clientele</Text>
          <Heading>Who we serve</Heading>
          <Text variant='body.summary'>
            Crafting dynamic digital experiences for brands and visionaries.
          </Text>
        </Flex>
        <Grid
          sx={{
            flex: 4,
            gap: 3,
            gridTemplateColumns: ['1fr', '1fr 1fr']
          }}
        >
          <OverviewCard
            icon={<MdTerminal />}
            heading='Emerging startups'
            text='Innovative companies exploring new technologies who value cutting-edge design to showcase their new product or service.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdVolunteerActivism />}
            heading='Non-profit and social impact ventures'
            text='Groups focused on social causes, seeking to communicate their mission and impact effectively to a wider audience.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdLocationCity />}
            heading='Innovative enterprises and brands'
            text='Industry leaders aiming to refresh their image or launch new campaigns that stand out and captivate their target audience.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdMood />}
            heading='Entertainment and music industry'
            text='Artists, labels, and producers looking for visually engaging content that enhances their online or stage presence and connects with fans.'
            isHeadingSmall
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
