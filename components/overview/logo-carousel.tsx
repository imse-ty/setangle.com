/** @jsxImportSource theme-ui */
//@ts-nocheck

import { motion } from 'framer-motion';
import { Flex } from 'krado-react';
import Image from 'next/image';

function Logo({ logoName, alt }) {
  return (
    <img
      src={`/logos/${logoName}.svg`}
      alt={alt}
      sx={{ width: '125px', height: '125px' }}
      width={100}
      height={100}
      priority
    />
  );
}

export default function LogoCarousel() {
  const logoVariants = {
    animate: {
      x: [-100, 100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10, // Adjust the duration for speed control
          ease: 'linear'
        }
      }
    }
  };

  return (
    <Flex
      as={motion.div}
      sx={{
        gap: 6,
        overflowX: 'hidden',
        width: '100%',
        backgroundColor: 'red'
      }}
      variants={logoVariants}
      animate='animate'
    >
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
      <Logo logoName='Chick-fil-A' alt='Chick-fil-A logo' />
    </Flex>
  );
}
