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

export default function FaqProcess() {
  return (
    <ScaleInEffect>
      <Container
        id='process'
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 6,

          borderRadius: 4,
          backgroundColor: 'surface.black'
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
                <Text variant='body.pretext' sx={{ color: 'accent.bold' }}>
                  Process
                </Text>

                <Heading as='h2'>
                  Our creative process is akin to the art of shaping clay into
                  form
                </Heading>
                <Text
                  as='p'
                  variant='body.summary'
                  sx={{ color: 'text.secondary' }}
                >
                  Rather than chipping away at stone, we shape each project with
                  the simplicity and focus of&nbsp;a&nbsp;sculptor.
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
              heading='Discovery'
              text="We start by listening to your story and understanding your goals. It's about laying the groundwork for a project that perfectly aligns with your vision."
              showArrow
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdDescription />}
              heading='Proposal'
              text='Next, we outline a tailored strategy and plan. This is where we propose how we can bring your ideas to life, complete with timelines and budgets.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdLightbulb />}
              heading='Concept'
              text='Upon engagement, our creative process kicks off with broad strokes—sketching out the big ideas. This is the brainstorming phase where possibilities are endless.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdPalette />}
              heading='Creation'
              text='Then, we bring the concept into reality. Like shaping clay, we mold our initial designs and animations, setting the stage for refinement.'
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdSquareFoot />}
              heading='Refinement'
              text="The refinement stage is crucial. It's where we get into the details, ensuring every element aligns with the overarching vision, iterating until it's just right."
              isHeadingSmall
            />
            <OverviewCard
              icon={<MdRocketLaunch />}
              heading='Launch'
              text='With everything polished, we launch your project into the world. This is the moment where your vision becomes a tangible, impactful reality.'
              isHeadingSmall
            />

            <OverviewCard
              icon={<MdLocalFlorist />}
              heading='Growth'
              text="Post-launch, we focus on growth and optimization. It's about supporting your project's journey forward, ensuring it continues to resonate and achieve its goals."
              isHeadingSmall
            />
          </Flex>
        </Flex>
      </Container>
    </ScaleInEffect>
  );
}
