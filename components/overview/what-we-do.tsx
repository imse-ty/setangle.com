import { Flex, Grid, Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { OverviewCard } from './overview-card';
import { MdDesignServices } from 'react-icons/md';

export default function WhatWeDoSection() {
  return (
    <Container
      sx={{
        display: 'flex',
        gap: 5,
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 8,
        width: '100%'
      }}
    >
      <Flex sx={{ flexDirection: 'column', textAlign: 'center', gap: 3 }}>
        <Heading as='h2'>What we do</Heading>
        <Text>
          Your go-to solution for web and mobile apps, like many founders,
          startups, and agencies do.
        </Text>
      </Flex>
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: 3
        }}
      >
        <OverviewCard
          icon={<MdDesignServices />}
          heading='Animated explainer videos'
          text='Concisely communicate complex concepts or services.
          '
          isHeadingSmall={true}
        />
        <OverviewCard
          icon={<MdDesignServices />}
          heading='Animated explainer videos'
          text='Concisely communicate complex concepts or services.
          '
          isHeadingSmall={true}
        />
        <OverviewCard
          icon={<MdDesignServices />}
          heading='Animated explainer videos'
          text='Concisely communicate complex concepts or services.
          '
          isHeadingSmall={true}
        />
        <OverviewCard
          icon={<MdDesignServices />}
          heading='Animated explainer videos'
          text='Concisely communicate complex concepts or services.
          '
          isHeadingSmall={true}
        />
      </Grid>
    </Container>
  );
}
