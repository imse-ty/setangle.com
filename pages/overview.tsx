/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import OverviewHero from '@/components/overview/overview-hero';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import VideoSection from '@/components/video-section';
import React from 'react';
import { useState } from 'react';
import { Container } from 'krado-react';
import ClientLogos from '@/components/overview/logo-carousel';
import LogoCarousel from '@/components/overview/logo-carousel';
import WhatWeDoSection from '@/components/overview/what-we-do';
import WorkSection from '@/components/overview/work-section';
import ContactSection from '@/components/overview/contact-section';

export default function Overview() {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Layout isHiddenByDefault hideTopNav>
      <SiteHeader />
      <OverviewHero />
      <Container>
        <VideoSection
          isPlayButtonHidden={false}
          isVideoActive={isVideoActive}
          url='https://vimeo.com/910900048?share=copy'
          previewSrc='walter-preview.webm'
          poster='walter-thumbnail.jpg'
          setIsVideoActive={() => setIsVideoActive(!isVideoActive)}
        />
      </Container>
      <LogoCarousel />
      <WhatWeDoSection />
      <WorkSection />
      <ContactSection />
    </Layout>
  );
}
