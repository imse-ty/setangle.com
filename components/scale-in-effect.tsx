/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Box, Container } from 'krado-react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScaleInEffect({
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
    <div ref={container}>
      <Box
        sx={{
          backgroundColor: foregroundColor
        }}
      >
        <motion.div
          style={{ scale }}
          sx={{
            backgroundColor: backgroundColor
          }}
        >
          {children}
        </motion.div>
      </Box>
    </div>
  );
}
