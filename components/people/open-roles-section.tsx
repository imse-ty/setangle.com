/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button, Grid } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import ScaleInEffect from '../scale-in-effect';
import { OverviewCard } from '../agency/overview-card';
import {
  MdLightbulb,
  MdMovie,
  MdPhone,
  MdSchool,
  MdShoppingBag,
  MdSmartphone,
  MdStadium
} from 'react-icons/md';
import Wrapper from '../wrapper';

export default function OpenRolesSection() {
  return (
    <ScaleInEffect>
      <Wrapper sx={{ backgroundColor: 'surface.black' }}>
        <Heading>Browse open roles</Heading>
        <Grid sx={{ gap: 3, gridTemplateColumns: ['1fr', '1fr 1fr 1fr'] }}>
          <OverviewCard
            icon={<MdStadium />}
            heading='Event visuals'
            text='High-impact animations to kick off or wrap up corporate events, conferences, webinars, or concerts.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdShoppingBag />}
            heading='Product ads'
            text='Commercials and advertisements designed to highlight features and benefits of your product or service.'
            isHeadingSmall
          />

          <OverviewCard
            icon={<MdMovie />}
            heading='Title sequences'
            text='Captivating opening or closing visuals for movies, TV shows, and online videos, setting the tone and engaging viewers from the start.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdLightbulb />}
            heading='Animated explainer videos'
            text='Concisely communicate complex concepts or services.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdSchool />}
            heading='Educational content'
            text='Animated infographics and videos for educational purposes or tutorials.'
            isHeadingSmall
          />
          <OverviewCard
            icon={<MdSmartphone />}
            heading='Social media content'
            text='Engaging animations or motion graphics for platforms like Instagram, LinkedIn, or YouTube.'
            isHeadingSmall
          />
        </Grid>
      </Wrapper>
    </ScaleInEffect>
  );
}
