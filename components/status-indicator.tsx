// @ts-nocheck
/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { Flex, Box, colors } from 'krado-react';

const pulseVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0, 1, 0],

    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }
};

const AvailabilityIndicator = ({ ...rest }) => (
  <Flex
    sx={{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    {...rest}
  >
    <Box
      variants={pulseVariants}
      animate='pulse'
      style={{
        position: 'absolute',
        borderRadius: 5,
        height: '6px',
        width: '6px',
        backgroundColor: colors.sobek400
      }}
    />
    <motion.div
      variants={pulseVariants}
      animate='pulse'
      style={{
        position: 'absolute',
        borderRadius: 5,
        height: '12px',
        width: '12px',
        backgroundColor: colors.sobek400
      }}
    />
  </Flex>
);

export default AvailabilityIndicator;
