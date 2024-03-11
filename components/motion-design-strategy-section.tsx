/** @jsxImportSource theme-ui */
//@ts-nocheck

import {
  MdFlag,
  MdLightbulb,
  MdSearch,
  MdTouchApp,
  MdVolunteerActivism
} from 'react-icons/md';

import { Grid } from 'krado-react';

import { Flex } from 'krado-react';
import SimpleHeadingAndText from './simple-heading-and-text';
import { OverviewCard } from './agency/overview-card';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import ScaleInEffect from './scale-in-effect';

export default function MotionDesignStrategySection() {
  return (
    <ScaleInEffect>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <Heading as='h2'>Motion design strategy</Heading>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: ['column', null, 'row'],
            width: '100%',

            gap: 3
          }}
        >
          <OverviewCard
            icon={<MdSearch />}
            heading='Class A motion'
            text='High-energy, abstract visuals for an engaging, fast-paced experience where motion takes center stage over information, ideal for captivating content and capturing the attention of the viewer'
          />
          <OverviewCard
            icon={<MdFlag />}
            heading='Class B motion'
            text='Mixes informative content with eye-catching visuals at a slower pace than Type A, emphasizing detailed storytelling suited for projects needing both information delivery and visual appeal. '
          />
          <OverviewCard
            icon={<MdLightbulb />}
            heading='Class C motion'
            text='Simplified and clear storytelling to support information delivery with straightforward, well-executed motion and type.'
          />
        </Grid>
        <SimpleHeadingAndText>
          <Text as='p' variant='body.summary'>
            Given the project&apos;s scope and needs, a blend of{' '}
            <strong>Class B</strong> and <strong>Class B</strong> motion would
            best suit our objectives, with moments of <strong>Class A</strong>{' '}
            motion for &quot;wow&quot; moments. This strategy puts clarity and
            engagement first
          </Text>
        </SimpleHeadingAndText>
      </Flex>
    </ScaleInEffect>
  );
}
