/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import { useState } from 'react';
import { Container } from 'krado-react';
import LogoCarousel from '@/components/logo-carousel';
import ContactSection from '@/components/contact/contact-section';
import ReelSection from '@/components/reel-section';
import FaqHero from '@/components/faq/faq-hero';
import NewsletterSignup from '@/components/faq/newsletter-signup';
import { useColorMode } from 'theme-ui';
import FaqProcess from '@/components/faq/faq-process';
import FaqMotionSystem from '@/components/faq/faq-motion-system';
import FaqWhatWeDo from '@/components/faq/faq-what-we-do';
import FaqNewsletter from '@/components/faq/faq-newsletter-signup';
import FaqOurClients from '@/components/faq/faq-our-clients';
import FaqWorkSection from '@/components/faq/faq-work-section';
import Faq250Pricing from '@/components/faq/faq-250-pricing';
import { NextSeo } from 'next-seo';
import DustParticles from '@/components/dust-particles';

export default function CalvinCrawfordFaq() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  return (
    <Layout isHiddenByDefault hideTopNav showFaqMenu showPricing>
      <DustParticles />
      <FaqHero name=' Borys and Darvideo team' />
      <NextSeo
        title={`Hey Borys and Darvideo team! Learn more about Angle`}
        description="We're a micro-agency making soulful brand experiences capable of handling conception, scriptwriting, storyboarding, animation, VO, music, web development, and sound design."
      />
      <Container sx={{ marginBottom: 6 }}>
        <ReelSection
          isVideoActive={isVideoActive}
          setIsVideoActive={() => {
            if (typeof umami !== 'undefined' && !isVideoActive) {
              umami.track('reel-section-play');
            }

            setIsVideoActive(!isVideoActive);
          }}
        />
      </Container>
      <LogoCarousel isLight={false} />
      <FaqMotionSystem />
      <FaqWorkSection />
      <FaqWhatWeDo />
      <FaqOurClients />
      <FaqProcess />
      <Faq250Pricing />
      <ContactSection useTransparentBackground />
    </Layout>
  );
}
