/** @jsxImportSource theme-ui */
//@ts-nocheck

import { motion } from 'framer-motion';
import { Flex, Container } from 'krado-react';
import Image from 'next/image';
import Text from '../fixed-krado-components/Text';

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
  return (
    <Container sx={{ textAlign: 'center', marginTop: 5 }}>
      <Text>Collaborating with amazing brands such as...</Text>
      <Flex
        as={motion.div}
        sx={{
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Logo logoName='ford' alt='Ford logo' />
        <Logo logoName='beloved-benefit' alt='Beloved Benefit logo' />
        <Logo logoName='keller-williams' alt='Keller Williams logo' />
        <Logo logoName='fearless-fund' alt='Fearless Fund logo' />
        <Logo logoName='vmware' alt='VMware logo' />
        <Logo
          logoName='national-education-association'
          alt='National Education Association logo'
        />
        <Logo
          logoName='alabama-state-university'
          alt='Alabama State University logo'
        />
      </Flex>
    </Container>
  );
}
