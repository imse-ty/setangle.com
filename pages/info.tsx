/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import { useState } from 'react';
import { Container } from 'krado-react';
import LogoCarousel from '@/components/logo-carousel';
import FaqWorkSection from '@/components/faq/faq-work-section';
import ContactSection from '@/components/contact/contact-section';
import ReelSection from '@/components/reel-section';
import FaqHero from '@/components/faq/faq-hero';
import { useColorMode } from 'theme-ui';
import FaqProcess from '@/components/faq/faq-process';
import FaqMotionSystem from '@/components/faq/faq-motion-system';
import FaqWhatWeDo from '@/components/faq/faq-what-we-do';
import FaqOurClients from '@/components/faq/faq-our-clients';
import FaqTopPricing from '@/components/faq/faq-top-pricing';
import DustParticles from '@/components/dust-particles';
import Faq250Pricing from '@/components/faq/faq-250-pricing';

export default function Faq() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  return (
    <Layout isHiddenByDefault hideTopNav showFaqMenu showPricing>
      <DustParticles />
      <FaqHero />
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
