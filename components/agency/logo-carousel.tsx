/** @jsxImportSource theme-ui */
//@ts-nocheck

import { motion } from 'framer-motion';
import { Flex, Container } from 'krado-react';
import Image from 'next/image';
import Text from '../fixed-krado-components/Text';
import { useColorMode } from 'theme-ui';

function Logo({ logoName, alt }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Image
      src={`/logos/${logoName}.svg`}
      alt={alt}
      sx={{
        width: ['100px', '125px'],
        height: 'auto',
        filter:
          'brightness(0) saturate(100%) invert(8%) sepia(55%) saturate(3456%) hue-rotate(249deg) brightness(85%) contrast(112%)'
      }}
      width={100}
      height={100}
    />
  );
}

export default function LogoCarousel() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 6
      }}
    >
      <Text as='p'>Collaborating with amazing brands such as...</Text>
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
        <Logo logoName='ford' alt='Ford logo' />
        <Logo logoName='beloved-benefit' alt='Beloved Benefit logo' />
        <Logo logoName='chick-fil-a' alt='Chick-fil-A logo' />
        <Logo logoName='keller-williams' alt='Keller Williams logo' />
        <Logo logoName='fearless-fund' alt='Fearless Fund logo' />
        <Logo logoName='vmware' alt='VMware logo' />
      </Flex>
    </Container>
  );
}
