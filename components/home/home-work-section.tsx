/** @jsxImportSource theme-ui */
//@ts-nocheck

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container, Button } from 'krado-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdNorthEast } from 'react-icons/md';
import ProjectCard from '../agency/project-card';
import Link from 'next/link';
import ScaleInEffect from '../scale-in-effect';
import Wrapper from '../wrapper';

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
        color='oshun'
        tags={['Music visuals']}
        title='ABSTRACT'
        subtitle='A music video inspired by the beats, the rhythms, and sample artistry of the classic mixtape "The [Abstract] Best" by J.PERIOD.'
        href='/work/abstract-jperiod-q-tip'
        src='/work/abstract.jpg'
      />
      <ProjectCard
        color='hetHeru'
        tags={['Music visuals', 'Event']}
        title='Beeple Studios'
        subtitle='A definitive musical piece for Beeple Studios and Gibbes Museum of Art named "The Breakdown." Influenced by turntablism, jazz, hip-hop, and punchy motion.'
        href='/work/the-breakdown-beeple'
        src='/work/beeple-studios.jpg'
      />
      <ProjectCard
        color='taweret'
        tags={['Startup', 'Campaign']}
        title='SANSHU!'
        subtitle='SANSHU! is a blockchain-enabled Web3 community focused around community finance. They needed a fresh brand identity and kinetic explainer.'
        href='/work/sanshu'
        src='/work/sanshu.png'
      />
      <ProjectCard
        color='taweret'
        tags={['Non-profit', 'Event']}
        title='Beloved Benefit'
        subtitle='Helping bring Beloved Benefit to life, an annual charity fundraiser event in Atlanta founded by The Same House.'
        href='/work/beloved-benefit-2023'
        src='/work/beloved-benefit.jpg'
      />
      <ProjectCard
        color='taweret'
        title='Space and Time'
        tags={['Startup', 'Product ad']}
        subtitle="Leading creation direction for Space and Time's AI tool Houston and creating a stunning 3D galaxy scene."
        href='/work/space-and-time'
        src='/work/space-and-time.png'
      />
      <ProjectCard
        color='asset'
        title='Splice'
        tags={['Tech', 'Social campaign']}
        subtitle="Developing Splice's social campaign for 'Create a Stack,' an AI tool for generating genre-specific music sample tracks."
        href='/work/splice'
        src='/projects/splice/splice-cover.png'
      />
      <ProjectCard
        color='sekmet'
        title='Chick-fil-A'
        tags={['Corporate', 'Event']}
        subtitle="Innovating at Chick-fil-A's annual meetings NEXT and Spark 2023"
        href='/work/chick-fil-a'
        src='/work/chick-fil-a.png'
      />
      <ProjectCard
        color='ptah'
        title='Rock the Bells X Ford'
        tags={['Music', 'Campaign']}
        subtitle="Animated dynamic graphics for the 'Rock The Campus' series, spotlighting 2 Chainz and college culture in a vibrant narrative collaboration."
        href='/work/rock-the-campus'
        src='/work/ford.jpg'
      />
    </Container>
  );
}

export default function HomeWorkSection({ onViewportEnter, onViewportLeave }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <ScaleInEffect>
      <Wrapper id='work' sx={{ backgroundColor: 'surface.black' }}>
        <Container sx={{ textAlign: 'center' }}>
          <Heading
            as={motion.h2}
            sx={{ marginBottom: 2 }}
            onViewportEnter={onViewportEnter}
          >
            Selected work
          </Heading>

          <Text as='p'>
            Selected ranging from event openers, tech product ads, social media
            graphics, and non-profit organizations collaborating with brand and
            agencies alike.
          </Text>
        </Container>
        <ProjectsSection />
        <Link
          href='/work'
          sx={{ textDecoration: 'none' }}
          data-umami-event='view-more-work-button'
        >
          <Button leftIcon={<MdNorthEast />} sx={{ marginTop: 5 }}>
            View more work
          </Button>
        </Link>
      </Wrapper>
    </ScaleInEffect>
  );
}
