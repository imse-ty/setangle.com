/** @jsxImportSource theme-ui */
//@ts-nocheck

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
          <Text variant='body.pretext' sx={{ color: 'accent.bold' }}>
            Our clientele
          </Text>
          <Heading>Who we serve</Heading>
          <Text variant='body.summary' sx={{ color: 'text.secondary' }}>
            As experts in both design and engineering, we&apos;re more than just
            animators—we&apos;re technologists who blend aesthetic and
            functional aspects seamlessly. Our dual-brained approach delivers
            solutions that are as innovative as they are visually stunning.
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
            text='Startups pushing the boundaries of technology and design, seeking a partner who understands both their creative vision and technical needs to bring their innovative products or services to life.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdVolunteerActivism />}
            heading='Non-profit and social impact ventures'
            text='Groups focused on social causes, in need of a partner who can blend compelling storytelling with strategic insights to amplify  their mission.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdLocationCity />}
            heading='Innovative enterprises and brands'
            text='Industry leaders aiming to refresh their image or launch new campaigns, looking for a collaborator who excels in blending artistic flair with technological expertise.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdMood />}
            heading='Entertainment and music industry'
            text='Entertainment and music visionaries looking for visually engaging content that enhances their digital or live presence through animation, tech, and sound design.'
            isHeadingSmall
          />
        </Grid>
      </Container>
    </ScaleInEffect>
  );
}
