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

import Image from 'next/image';
import { useState } from 'react';
import Modal from './modal';
import CalEmbed from './cal-embed';

export default function Toolbar({ showFaqMenu, showPricing }) {
  const { scrollYProgress } = useScroll();
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)}>
        <CalEmbed />
      </Modal>
      <Box
        as={motion.div}
        style={{ scaleX: scrollYProgress }}
        sx={{
          width: '100%',
          height: '4px',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 4,
          backgroundColor: 'secondary.light',
          transformOrigin: 'left'
        }}
      />
      <Flex
        as={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key='toolbar'
        sx={{
          position: 'fixed',
          top: 0,
          backgroundColor: 'rgba(9, 3, 30,0.5)',
          backdropFilter: 'blur(32px)',
          width: '100%',
          zIndex: 3
        }}
      >
        <Container
          paddingX='none'
          sx={{
            paddingX: 4,
            paddingY: 3,

            alignItems: 'center',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Set Angle Logo'
              sx={{
                width: '48px',
                height: '48px'
              }}
              width={48}
              height={48}
              priority
            />
          </Link>

          <Navigation
            showPricing={showPricing}
            showFaqMenu={showFaqMenu}
            buttonOnClick={() => setIsCalModalOpen(true)}
          />
        </Container>
      </Flex>
    </>
  );
}
