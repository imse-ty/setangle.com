/** @jsxImportSource theme-ui */
//@ts-nocheck

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container } from 'krado-react';
import ProjectCard from '../project-card';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
          color={project.pageColor}
          tags={project.tags}
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

export default function AllWorkSection({
  projects,
  onViewportEnter,
  onViewportLeave
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <section ref={container}>
      <Box id='work'>
        <motion.div
          style={{ scale }}
          sx={{
            marginTop: 4,
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'background'
          }}
        >
          <motion.div
            onViewportLeave={onViewportLeave}
            sx={{
              top: 0,
              position: 'absolute',
              backgroundColor: 'red',
              height: '700vh'
            }}
          />
          <Container sx={{ textAlign: 'center' }}>
            <Heading
              as={motion.h2}
              variant='display.h1'
              sx={{ marginBottom: 2 }}
              onViewportEnter={onViewportEnter}
            >
              Work
            </Heading>

            <Text as='p' variant='body.summary'>
              Latest projects ranging from event openers, tech product ads, and
              social media graphics.
            </Text>
          </Container>
          <ProjectsSection projects={projects} />
        </motion.div>
      </Box>
    </section>
  );
}
