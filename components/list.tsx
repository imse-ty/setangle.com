import { Box } from 'krado-react';

export function UnorderedList({ children }) {
  return (
    <Box
      as='ul'
      sx={{
        marginY: 3,
        listStyleType: 'disc',
        'li::marker': { color: 'secondary.regular' }
      }}
    >
      {children}
    </Box>
  );
}

export function OrderedList({ children }) {
  return (
    <Box
      as='ol'
      sx={{
        marginY: 3,
        listStyleType: 'number',
        'li::marker': { color: 'secondary.regular' }
      }}
    >
      {children}
    </Box>
  );
}
