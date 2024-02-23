/** @jsxImportSource theme-ui */
// @ts-nocheck

import { motion, useScroll } from 'framer-motion';
import { Box, Flex, ToggleIcon, Container } from 'krado-react';
import Link from 'next/link';
import { MdChevronLeft } from 'react-icons/md';
import Navigation from './navigation';
import RightTriangle from '../public/right-triangle.svg';
import Text from './fixed-krado-components/Text';
import Switch from './projects/project-switch';
import { useState } from 'react';
import Image from 'next/image';

export default function Toolbar() {
  const { scrollYProgress } = useScroll();

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key='toolbar'
      sx={{
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 3,
        gap: [3, 4]
      }}
    >
      <Link href='#'>
        <Image
          src='/logo.svg'
          alt='Set Theory Logo'
          sx={{ width: '125px', height: '125px' }}
          width={100}
          height={100}
          priority
        />
      </Link>
      <Box
        as={motion.div}
        style={{ scaleX: scrollYProgress }}
        sx={{
          width: '100%',
          height: '4px',
          position: 'fixed',
          left: 0,
          top: 0,
          backgroundColor: 'secondary.light',
          transformOrigin: 'left'
        }}
      />
    </Flex>
  );
}
