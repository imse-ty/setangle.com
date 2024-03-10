/** @jsxImportSource theme-ui */
//@ts-nocheck

import ContactSection from '@/components/agency/contact-section';
import { OverviewCard } from '@/components/agency/overview-card';
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import MotionDesignStrategySection from '@/components/motion-design-strategy-section';
import Section from '@/components/section';
import { Flex, Container } from 'krado-react';
import {
  MdBook,
  MdExtension,
  MdLightbulb,
  MdRocket,
  MdRocketLaunch,
  MdWorkspacePremium
} from 'react-icons/md';

function SectionWrapper({ children }) {
  return (
    <Flex
      sx={{
        maxWidth: '1000px',
        marginTop: 5,
        flexDirection: 'column',
        gap: 3
      }}
    >
      {children}
    </Flex>
  );
}

export default function Faq() {
  return (
    <Layout>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Heading
          variant="display.display"
          sx={{ marginBottom: 7, marginTop: 7 }}
        >
          Frequently asked questions
        </Heading>
      </Container>
      <MotionDesignStrategySection />
      <Section>
        <SectionWrapper>
          <Heading>Ideal clients</Heading>
          <Text>
            Our most ideal clients are those who appreciate the art of
            storytelling through motion design and web development. They are
            businesses or organizations looking to elevate their brand with
            innovative, engaging, and meaningful digital experiences. Whether
            it&apos;s a start-up eager to make its mark, a non-profit aiming to
            spread its message, or an established brand looking to reinvent its
            digital presence, we thrive on collaboration with clients who are as
            passionate about their vision as we are about bringing it to life.
          </Text>
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper>
          <Heading>Pricing overview</Heading>
          <Text>
            Our pricing is tailored to the scope and complexity of each project,
            with the aim of providing value through high-quality, custom
            solutions. For a 30-second piece of content:
          </Text>
          <Flex sx={{ gap: 3, marginTop: 4 }}>
            <OverviewCard
              icon={<MdLightbulb />}
              heading="Class C projects"
              text={process.env.NEXT_PUBLIC_CLASS_C}
              isHeadingSmall={true}
            />
            <OverviewCard
              icon={<MdExtension />}
              heading="Class B projects"
              text={process.env.NEXT_PUBLIC_CLASS_B}
              isHeadingSmall={true}
            />
            <OverviewCard
              icon={<MdRocketLaunch />}
              heading="Class A projects"
              text={process.env.NEXT_PUBLIC_CLASS_A}
              isHeadingSmall={true}
            />
          </Flex>
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper>
          <Heading>Our work</Heading>
          <Text>
            Absolutely! We take pride in our work and the strong partnerships
            we&apos;ve built with our clients. You can view a curated selection
            of our projects here. This portfolio showcases a range of styles and
            capabilities across Class A, B, and C projects, reflecting our
            versatility and commitment to quality in every piece we create.
          </Text>
        </SectionWrapper>
      </Section>
      <ContactSection useTransparentBackground />
    </Layout>
  );
}
