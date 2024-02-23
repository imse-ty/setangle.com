/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Flex, Grid, Box, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { OverviewCard } from './overview-card';
import {
  MdDashboard,
  MdDesignServices,
  MdLanguage,
  MdLightbulb,
  MdSchool,
  MdStadium
} from 'react-icons/md';

import ProjectCard from './project-card';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdNorthEast } from 'react-icons/md';

export default function WhatWeDoSection({ onViewportEnter, onViewportLeave }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <section ref={container}>
      <Box id='services'>
        <motion.div
          style={{ scale }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'surface.thin',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4
            // boxShadow: 'soft.highNorth'
          }}
        >
          <Container
            sx={{
              display: 'flex',

              marginTop: 5,
              marginBottom: 4,
              width: '100%',
              minHeight: '70vh'
            }}
          >
            <Flex sx={{ gap: 5, flexDirection: 'column', margin: 'auto' }}>
              <Flex
                sx={{ flexDirection: 'column', textAlign: 'center', gap: 3 }}
              >
                <Heading as='h2'>What we do</Heading>
                <Text>
                  Your go-to vender for captivating motion design and web
                  solutions, trusted by brands, creatives, and agencies alike.
                </Text>
              </Flex>
              <Grid
                sx={{
                  display: 'flex',
                  maxWidth: '1105px',
                  flexDirection: ['column', 'row'],
                  flexWrap: ['none', 'wrap'],
                  gap: 3
                }}
              >
                <OverviewCard
                  icon={<MdLightbulb />}
                  heading='Animated explainer videos'
                  text='Concisely communicate complex concepts or services with eye-catching motion.
            '
                  isHeadingSmall={true}
                />
                <OverviewCard
                  icon={<MdDashboard />}
                  heading='Custom websites'
                  text='Campaign-specific sites or landing pages designed to promote a product, event, or initiative.
            '
                  isHeadingSmall={true}
                />
                <OverviewCard
                  icon={<MdSchool />}
                  heading='Educational content'
                  text='Animated infographics and videos for educational purposes or tutorials.
            '
                  isHeadingSmall={true}
                />
                <OverviewCard
                  icon={<MdLanguage />}
                  heading='Social media content'
                  text='Engaging animations or motion graphics for platforms like Instagram, LinkedIn, or Facebook.
            '
                  isHeadingSmall={true}
                />
                <OverviewCard
                  icon={<MdStadium />}
                  heading='Event visuals'
                  text='High-impact animations to kick off or wrap up corporate events, conferences, or webinars.
            '
                  isHeadingSmall={true}
                />
              </Grid>
            </Flex>
          </Container>
        </motion.div>
      </Box>
    </section>
  );
}
