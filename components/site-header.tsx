/** @jsxImportSource theme-ui */
//@ts-nocheck

import Image from 'next/image';
import { Flex } from 'krado-react';
import Navigation from './navigation';
import Text from './fixed-krado-components/Text';

export default function SiteHeader() {
  return (
    <Flex
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: [4, 5],
        justifyContent: 'right'
      }}
    >
      <Text
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontStretch: 'expanded',
          fontSize: [5, 6]
        }}
      >
        Set Angle
      </Text>
    </Flex>
  );
}
