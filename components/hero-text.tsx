import React from 'react';
import { Flex } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';

export default function HeroText({ pretext, title, text }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 3,
        maxWidth: '1000px'
      }}
    >
      {pretext && (
        <Text variant='body.pretext' sx={{ color: 'accent.bold' }}>
          {pretext}
        </Text>
      )}
      {title && <Heading as='h2'>{title}</Heading>}
      {text && (
        <Text as='p' variant='body.summary' sx={{ color: 'text.secondary' }}>
          {text}
        </Text>
      )}
    </Flex>
  );
}
