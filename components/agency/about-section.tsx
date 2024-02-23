/** @jsxImportSource theme-ui */
//@ts-nocheck

import { MdDesignServices, MdTerminal } from 'react-icons/md';

import Text from '../fixed-krado-components/Text';
import { Container, Box, Flex, Grid } from 'krado-react';
import AboutHero from './about-hero';
import Tooltip from '../tooltip';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <section ref={container}>
      <Box
        id='about'
        sx={{
          backgroundColor: 'background'
        }}
      >
        <motion.div
          style={{ scale }}
          sx={{
            display: 'flex',
            minHeight: '100vh',
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'surface.black',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow: 'soft.highNorth'
          }}
        >
          <Box sx={{ margin: 'auto' }}>
            <AboutHero />
          </Box>
        </motion.div>
      </Box>
    </section>
  );
}
