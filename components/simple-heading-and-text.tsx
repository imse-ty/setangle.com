import { Flex } from 'krado-react';

export default function SimpleHeadingAndText({ children }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 3,
        maxWidth: '900px'
      }}
    >
      {children}
    </Flex>
  );
}
