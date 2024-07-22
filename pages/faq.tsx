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
import DustParticles from '@/components/dust-particles';

export default function Faq() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  return (
    <Layout isHiddenByDefault hideTopNav showFaqMenu>
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
      <ContactSection useTransparentBackground />
    </Layout>
  );
}
