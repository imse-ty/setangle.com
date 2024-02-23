/** @jsxImportSource theme-ui */
//@ts-nocheck

import Image from 'next/image';
import { Flex } from 'krado-react';

export default function SiteHeader() {
  return (
    <Flex sx={{ width: '100%' }}>
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
