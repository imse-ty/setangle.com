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

function ProjectsSection({ projects }) {
  return (
    <Container
      sx={{
        display: 'grid',
        marginTop: 5,
        gap: [3, 4],
        gridTemplateColumns: ['1fr', null, '1fr 1fr']
      }}
    >
      {projects.map(({ project }) => (
        <ProjectCard
          tags={project.tags}
          color={project.pageColor}
          title={project.title}
          subtitle={project.subtitle}
          href={`/work/${project._sys.filename}`}
          src={project.coverImage}
          key={project._sys.filename}
        />
      ))}
    </Container>
  );
}

export default function HomeWorkSection({
  onViewportEnter,
  onViewportLeave,
  projects
}) {
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
        <Container sx={{ maxWidth: '1000px', textAlign: 'center' }}>
          <Heading
            as={motion.h2}
            sx={{ marginBottom: 2 }}
            onViewportEnter={onViewportEnter}
          >
            Selected work
          </Heading>

          <Text as='p' sx={{ color: 'text.secondary' }}>
            Selected ranging from event openers, tech product ads, social media
            graphics, and non-profit organizations collaborating with brand and
            agencies alike.
          </Text>
        </Container>
        <ProjectsSection projects={projects} />
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
