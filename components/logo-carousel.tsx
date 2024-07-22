/** @jsxImportSource theme-ui */
//@ts-nocheck

import { motion } from 'framer-motion';
import { Flex, Container } from 'krado-react';
import Image from 'next/image';
import Text from './fixed-krado-components/Text';
import { useColorMode } from 'theme-ui';

function Logo({ logoName, alt, isLight }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Image
      src={`/logos/${logoName}.svg`}
      alt={alt}
      sx={{
        width: ['100px', '125px'],
        height: 'auto',
        filter: [
          isLight
            ? 'brightness(0) saturate(100%) invert(8%) sepia(55%) saturate(3456%) hue-rotate(249deg) brightness(85%) contrast(112%)'
            : 'brightness(0) saturate(100%) invert(84%) sepia(97%) saturate(2024%) hue-rotate(180deg) brightness(108%) contrast(97%)'
        ]
      }}
      width={100}
      height={100}
    />
  );
}

export default function LogoCarousel({ isLight }) {
  return (
    <Container
      sx={{
        position: 'relative',
        zIndex: -1,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 6
      }}
    >
      <Text as='p' sx={{ color: 'text.secondary' }}>
        Collaborating with amazing brands such as...
      </Text>
      <Flex
        as={motion.div}
        sx={{
          display: ['grid', 'flex'],
          gridTemplateColumns: '1fr 1fr',
          gap: [5, null, null, null, 6],
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: ['column', 'row'],
          flexWrap: ['none', 'wrap']
        }}
      >
        <Logo logoName='ford' alt='Ford logo' isLight={isLight} />
        <Logo logoName='vmware' alt='VMware logo' isLight={isLight} />
        <Logo logoName='chick-fil-a' alt='Chick-fil-A logo' isLight={isLight} />
        <Logo
          logoName='beloved-benefit'
          alt='Beloved Benefit logo'
          isLight={isLight}
        />
        <Logo
          logoName='keller-williams'
          alt='Keller Williams logo'
          isLight={isLight}
        />
        <Logo
          logoName='fearless-fund'
          alt='Fearless Fund logo'
          isLight={isLight}
        />{' '}
      </Flex>
    </Container>
  );
}
