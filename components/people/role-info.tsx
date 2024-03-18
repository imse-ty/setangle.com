import { Flex } from 'krado-react';
import Text from '../fixed-krado-components/Text';

export default function RoleInfo({ label, text, title, email, biline }) {
  return (
    <Flex sx={{ gap: 2, flexDirection: 'column' }}>
      {label && (
        <Text variant='body.pretext' as='p'>
          {label}
        </Text>
      )}
      {text && (
        <Text variant='body.summary' as='p'>
          {text}
        </Text>
      )}
      {biline && (
        <Text as='p' variant='body.footnote' sx={{ letterSpacing: '0.2em' }}>
          {biline}
        </Text>
      )}
      <Text as='p'>{title}</Text>
      {email && (
        <Text as='a' href={`mailto:${email}`} variant='body.smallParagraph'>
          {email}
        </Text>
      )}
    </Flex>
  );
}
