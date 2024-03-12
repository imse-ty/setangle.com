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
import Modal from '../modal';
import { useState } from 'react';
import { ProjectVimeo } from '../projects/project-embed';

export default function FaqMotionSystem() {
  const [isClassAVideoOpen, setIsClassAVideoOpen] = useState(false);
  const [isClassBVideoOpen, setIsClassBVideoOpen] = useState(false);
  const [isClassCVideoOpen, setIsClassCVideoOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isClassAVideoOpen}
        onClose={() => setIsClassAVideoOpen(false)}
      >
        <ProjectVimeo url='https://vimeo.com/918370231?share=copy' autoplay />
      </Modal>
      <Modal
        isOpen={isClassBVideoOpen}
        onClose={() => setIsClassBVideoOpen(false)}
      >
        <ProjectVimeo url='https://vimeo.com/918370247?share=copy' autoplay />
      </Modal>
      <Modal
        isOpen={isClassCVideoOpen}
        onClose={() => setIsClassCVideoOpen(false)}
      >
        <ProjectVimeo url='https://vimeo.com/918370257?share=copy' autoplay />
      </Modal>
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
            <Text as='p' variant='body.summary' sx={{ maxWidth: '1000px' }}>
              Watch this series of examples for a{' '}
              <strong>fictional healthcare company</strong> called &quot;Set
              Care&quot; that showcases our Class A, B, and C services. Each
              class tailored to match your narrative needs and&nbsp;budget.
            </Text>
          </Flex>
          <Flex sx={{ gap: 3, flexDirection: ['column', 'row'] }}>
            <OverviewCard
              icon={<MdSentimentVerySatisfied />}
              heading='Class A motion'
              text='High-energy, abstract visuals for an engaging, fast-paced experience where motion takes center stage over information, ideal for captivating content and capturing the attention of the viewer'
              buttonLabel='Watch example'
              buttonOnClick={() => setIsClassAVideoOpen(true)}
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdMovie />}
              heading='Class B motion'
              text='Mixes informative content with eye-catching visuals at a slower pace than Type A, emphasizing detailed storytelling suited for projects needing both information delivery and visual appeal. '
              buttonLabel='Watch example'
              buttonOnClick={() => setIsClassBVideoOpen(true)}
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdLightbulb />}
              heading='Class C motion'
              text='Simplified and clear storytelling to support information delivery with straightforward, well-executed motion and type.'
              buttonLabel='Watch example'
              buttonOnClick={() => setIsClassCVideoOpen(true)}
              isHeadingSmall
            />
          </Flex>
        </Container>
      </ScaleInEffect>
    </>
  );
}
