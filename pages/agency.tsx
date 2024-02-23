/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import OverviewHero from '@/components/agency/overview-hero';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import VideoSection from '@/components/video-section';
import React from 'react';
import { useState } from 'react';
import { Container } from 'krado-react';
import ClientLogos from '@/components/agency/logo-carousel';
import LogoCarousel from '@/components/agency/logo-carousel';
import WhatWeDoSection from '@/components/agency/what-we-do';
import WorkSection from '@/components/agency/work-section';
import ContactSection from '@/components/agency/contact-section';
import AboutSection from '@/components/agency/about-section';
import ReelSection from '@/components/agency/reel-section';

export default function Overview() {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Layout isHiddenByDefault hideTopNav>
      <SiteHeader />
      <OverviewHero />
      <Container>
        <ReelSection
          isVideoActive={isVideoActive}
          setIsVideoActive={() => setIsVideoActive(!isVideoActive)}
        />
      </Container>
      <LogoCarousel />
      <WhatWeDoSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
