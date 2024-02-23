/** @jsxImportSource theme-ui */
//@ts-nocheck

import Image from 'next/image';
import { Flex } from 'krado-react';
import Navigation from './navigation';

export default function SiteHeader() {
  return (
    <Flex
      sx={{
        top: 0,
        position: 'fixed',
        width: '100%',
        zIndex: 2
      }}
    >
      <Image
        src='/logo.svg'
        alt='Set Theory Logo'
        sx={{ width: '125px', height: '125px' }}
        width={100}
        height={100}
        priority
      />
    </Flex>
  );
}
