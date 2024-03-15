import React from 'react';
import { Container } from 'krado-react';

export default function Wrapper({ children, ...rest }) {
  return (
    <Container
      sx={{
        display: 'flex',
        gap: 5,
        paddingY: [5, 7],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 6,
        borderRadius: 4,
        backgroundColor: 'surface.extralight'
      }}
      {...rest}
    >
      {children}
    </Container>
  );
}
