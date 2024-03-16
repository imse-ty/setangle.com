/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import RoleCard from '@/components/roles/role-card';
import ScaleInEffect from '@/components/scale-in-effect';
import Wrapper from '@/components/wrapper';

import { Container, Button, Flex, Box } from 'krado-react';

export default function Role() {
  return (
    <Layout>
      <Container
        sx={{
          marginTop: 7,
          marginBottom: 4,
          display: 'flex',
          gap: 3,
          textAlign: 'center',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'center'
        }}
      >
        <Text variant='body.pretext'>We are looking for a good</Text>
        <Heading as='h1' variant='display.display'>
          Assistant
        </Heading>
        <Text
          as='p'
          variant='body.summary'
          sx={{ maxWidth: '1000px', marginBottom: 3 }}
        >
          We blend animation, technology, and sound to transform ordinary
          stories into soulful brand experiences that inspire the culture we
          live in today.
        </Text>
        <Button sx={{ marginBottom: 5 }}>Apply now</Button>
      </Container>
      <ScaleInEffect>
        <Wrapper
          sx={{
            height: '500vh',
            backgroundColor: 'surface.black'
          }}
        >
          <Flex sx={{ width: '100%', height: '100%' }}>
            <Box
              sx={{
                position: 'sticky',
                flex: 1,
                top: 7,
                height: '25%'
              }}
            >
              <ScaleInEffect>
                <RoleCard
                  title='Assistant'
                  rate='$15 to $20'
                  frequency='hour'
                  tags={['Sales', 'Marketing', 'Retail']}
                />
              </ScaleInEffect>
            </Box>
            <Box sx={{ flex: 4 }}>
              <Heading>Hello</Heading>
            </Box>
          </Flex>
        </Wrapper>
      </ScaleInEffect>
    </Layout>
  );
}
