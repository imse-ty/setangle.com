import { Flex } from 'krado-react';

export function UnorderedList({ children }) {
  return (
    <Flex
      as='ul'
      sx={{
        flexDirection: 'column',
        gap: 3,
        paddingLeft: '24px',
        marginY: 3,
        listStyleType: 'disc',
        'li::marker': { color: 'secondary.regular' }
      }}
    >
      {children}
    </Flex>
  );
}

export function OrderedList({ children }) {
  return (
    <Flex
      as='ol'
      sx={{
        flexDirection: 'column',
        gap: 3,
        marginY: 3,
        listStyleType: 'number',
        'li::marker': { color: 'secondary.regular' }
      }}
    >
      {children}
    </Flex>
  );
}
