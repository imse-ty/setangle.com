/** @jsxImportSource theme-ui */
//@ts-nocheck

import { Container, Flex, Button } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { OverviewCard } from '../agency/overview-card';
import ScaleInEffect from '../scale-in-effect';
import {
  MdArrowRight,
  MdArrowRightAlt,
  MdDescription,
  MdEast,
  MdExpandMore,
  MdGrass,
  MdLightbulb,
  MdLocalFlorist,
  MdPalette,
  MdRocket,
  MdRocketLaunch,
  MdSearch,
  MdSouth,
  MdSquare,
  MdSquareFoot
} from 'react-icons/md';
import { motion } from 'framer-motion';

export default function SubscriptionHowItWorks() {
  return (
    <ScaleInEffect>
      <Container
        id='process'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          textAlign: 'left',
          marginBottom: 6,

          borderRadius: 4,
          backgroundColor: 'surface.thin'
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            gap: 4,
            height: '100%',
            paddingY: 6
          }}
        >
          <Flex
            sx={{
              position: ['block', 'sticky'],
              height: '25%',
              marginBottom: 4,
              top: '38%',
              flexDirection: 'column',
              flex: 4
            }}
          >
            <ScaleInEffect>
              <Flex sx={{ flexDirection: 'column', gap: 3 }}>
                <Text variant='body.pretext'>How it works</Text>

                <Heading as='h2'>Simple. Flexible. Powerful.</Heading>
                <Text as='p' variant='body.summary'>
                  Submit your request, and we handle the rest. Enjoy quick
                  turnarounds and unlimited revisions for small requests.
                  Collaboration made easy.
                </Text>
              </Flex>
            </ScaleInEffect>
          </Flex>
          <Flex
            sx={{
              maxWidth: '1000px',
              gap: 3,
              flexDirection: 'column',
              flex: 3
            }}
          >
            <OverviewCard
              icon={<MdSearch />}
              heading='Submit your request'
              text='Use our hub and submit a request. Whether it’s a small task or a larger project, our streamlined process makes it easy.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdDescription />}
              heading='We get to work'
              text='Our talented designers get started right away, ensuring a quick turnaround time. Small and medium requests are typically completed within 3 to 7 business days depending on size of request.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdLightbulb />}
              heading='Review and revise'
              text='You’ll receive your completed work for review. Need changes? No problem! We offer unlimited revisions for small requests, and up to two round of revisions for medium and large requests.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdPalette />}
              heading='Use credits for more'
              text='If you need additional work beyond your subscription’s scope, purchase credits to get it done.'
              isHeadingSmall
            />
          </Flex>
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
