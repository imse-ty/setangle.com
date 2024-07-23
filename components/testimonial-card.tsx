import { Avatar, Box, Flex } from 'krado-react';
import { Card } from './card';
import Text from './fixed-krado-components/Text';

export default function TestimonialCard({
  name,
  company,
  title,
  quote,
  avatarSrc
}) {
  return (
    <Card>
      <Box sx={{ maxWidth: '400px' }}>
        <Text sx={{ marginBottom: 3 }}>
          <p>
            <em>&quot;{quote}&quot;</em>
          </p>
        </Text>
        <Flex sx={{ gap: 3 }}>
          <Avatar src={avatarSrc} />
          <Flex sx={{ flexDirection: 'column', gap: 1 }}>
            <Text variant='body.callout'>{name}</Text>
            <Text
              variant='body.smallParagraph'
              sx={{ color: 'text.secondary' }}
            >
              {title} at {company}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
}
