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
import { useEffect, useState } from 'react';
import Modal from './modal';
import CalEmbed from './cal-embed';
import { useRouter } from 'next/router';

export default function Toolbar({
  showFaqMenu,
  showPricing,
  showBack,
  formLink,
  showPeopleContactButton,
  backLink
}) {
  const { scrollYProgress } = useScroll();
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  const router = useRouter();

  console.log(router.asPath);

  const handleBack = () => {
    if (router.asPath !== router.basePath) {
      router.back();
    } else {
      router.push(backLink);
    }
  };

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
          {backLink ? (
            <ToggleIcon
              onClick={handleBack}
              sx={{
                borderRadius: 2,
                width: '48px',
                height: '48px',
                boxShadow: 'hard.high',
                backgroundColor: 'primary.regular',
                color: 'primary.contrast'
              }}
            >
              <MdChevronLeft />
            </ToggleIcon>
          ) : (
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='Set Angle Logo'
                sx={{
                  width: '48px',
                  height: '48px',
                  mixBlendMode: 'exclusion'
                }}
                width={48}
                height={48}
                priority
              />
            </Link>
          )}

          <Navigation
            showPricing={showPricing}
            showFaqMenu={showFaqMenu}
            buttonOnClick={() => setIsCalModalOpen(true)}
            formLink={formLink}
            showPeopleContactButton={showPeopleContactButton}
          />
        </Container>
      </Flex>
    </>
  );
}
