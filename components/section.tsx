/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box, Container } from 'krado-react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Section({
  children,
  backgroundColor,
  foregroundColor
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
      <Box
        sx={{
          backgroundColor: foregroundColor
        }}
      >
        <motion.div
          style={{ scale }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: backgroundColor,
            borderRadius: 4,
            justifyContent: 'center',
            minHeight: '70vh',
            boxShadow: 'soft.highNorth'
          }}
        >
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginY: 'auto',
              gap: 5,
              width: '100%'
            }}
          >
            {children}
          </Container>
        </motion.div>
      </Box>
    </section>
  );
}
