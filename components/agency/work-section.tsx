/** @jsxImportSource theme-ui */
//@ts-nocheck

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container, Button } from 'krado-react';
import ProjectCard from './project-card';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdLightbulb, MdMood, MdMovie, MdNorthEast } from 'react-icons/md';
import ScaleInEffect from '../scale-in-effect';

function ProjectsSection() {
  return (
    <Container
      sx={{
        display: 'grid',
        marginTop: 5,
        gap: [3, 4],
        gridTemplateColumns: ['1fr', null, '1fr 1fr']
      }}
    >
      <ProjectCard
        motionTypeIcon={<MdMood sx={{ fontSize: 5 }} />}
        motionType='Class A'
        tags={['Non-profit', 'Event']}
        color='taweret'
        title='Beloved Benefit'
        subtitle='Helping bring Beloved Benefit to life, an annual charity fundraiser event in Atlanta founded by The Same House.'
        href='/work/beloved-benefit-2023'
        src='/work/beloved-benefit.jpg'
      />
      <ProjectCard
        motionTypeIcon={<MdMovie sx={{ fontSize: 5 }} />}
        motionType='Class B'
        tags={['Corporate', 'Event']}
        color='sekmet'
        title='Chick-fil-A'
        subtitle="Innovating at Chick-fil-A's annual meetings NEXT and Spark 2023"
        href='/work/chick-fil-a'
        src='/work/chick-fil-a.png'
      />
      <ProjectCard
        motionTypeIcon={<MdMovie sx={{ fontSize: 5 }} />}
        motionType='Class B'
        tags={['Startup', 'Product ad']}
        color='taweret'
        title='Space and Time'
        subtitle="Leading creation direction for Space and Time's AI tool Houston and creating a stunning 3D galaxy scene."
        href='/work/space-and-time'
        src='/work/space-and-time.png'
      />
      <ProjectCard
        motionTypeIcon={<MdLightbulb sx={{ fontSize: 5 }} />}
        motionType='Class C'
        tags={['Venture capital', 'Infographic']}
        color='asset'
        title='Fearless Fund'
        subtitle="Animating infographics for the Fearless Fund's annual event, a venture capital firm empowering women of color-led businesses."
        href='/work/fearless-fund'
        src='/work/fearless-fund.png'
      />
    </Container>
  );
}

export default function WorkSection({ onViewportEnter, onViewportLeave }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <ScaleInEffect>
      <Container
        id='work'
        sx={{
          textAlign: 'center',
          backgroundColor: 'surface.black',
          borderRadius: 4,
          paddingY: 6,
          marginBottom: 6
        }}
      >
        <Text variant='body.pretext'>Examples</Text>
        <Heading
          as={motion.h2}
          sx={{ marginTop: 3, marginBottom: 2 }}
          onViewportEnter={onViewportEnter}
        >
          Selected work
        </Heading>

        <Text as='p'>
          Example work ranging from event openers, tech product ads, social
          media graphics, and non-profit organizations.
        </Text>
        <ProjectsSection />
        <a
          href='https://imsety.com/#work'
          target='_blank'
          rel='noindex nofollow'
          sx={{ textDecoration: 'none' }}
          data-umami-event='view-more-work-button'
        >
          <Button leftIcon={<MdNorthEast />} sx={{ marginTop: 5 }}>
            View more work
          </Button>
        </a>
      </Container>
    </ScaleInEffect>
  );
}
