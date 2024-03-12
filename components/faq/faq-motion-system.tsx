/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';
import {
  MdBook,
  MdLightbulb,
  MdMovie,
  MdSentimentVerySatisfied
} from 'react-icons/md';

export default function FaqMotionSystem() {
  return (
    <ScaleInEffect>
      <Container
        id='approach'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,
          paddingY: 5,
          minHeight: '100vh',
          borderRadius: 4,
          backgroundColor: 'surface.black'
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Text variant='body.pretext'>Motion design approach</Text>
          <Heading as='h2'>From subtle to striking</Heading>
          <Text as='p' variant='body.summary'>
            Our Class A, B, and C services are tailored to match your narrative
            needs and budget.
          </Text>
        </Flex>
        <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
          <OverviewCard
            icon={<MdSentimentVerySatisfied />}
            heading='Class A motion'
            text='High-energy, abstract visuals for an engaging, fast-paced experience where motion takes center stage over information, ideal for captivating content and capturing the attention of the viewer'
            buttonLabel='Watch example'
          />
          <OverviewCard
            icon={<MdMovie />}
            heading='Class B motion'
            text='Mixes informative content with eye-catching visuals at a slower pace than Type A, emphasizing detailed storytelling suited for projects needing both information delivery and visual appeal. '
            buttonLabel='Watch example'
          />
          <OverviewCard
            icon={<MdLightbulb />}
            heading='Class C motion'
            text='Simplified and clear storytelling to support information delivery with straightforward, well-executed motion and type.'
            buttonLabel='Watch example'
          />
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
