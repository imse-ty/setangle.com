import { Box } from 'krado-react';

export default function Layout({ children }) {
  return (
    <Box as='main' sx={{ position: 'relative' }}>
      {children}
    </Box>
  );
}
