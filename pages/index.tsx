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
import ContactSection from '@/components/contact/contact-section';
import AboutSection from '@/components/agency/about-section';
import ReelSection from '@/components/agency/reel-section';
import Head from 'next/head';
import FaqHero from '@/components/faq/faq-hero';
import NewsletterSignup from '@/components/faq/newsletter-signup';
import { useColorMode } from 'theme-ui';
import FaqAbout from '@/components/faq/faq-about';
import FaqProcess from '@/components/faq/faq-process';
import FaqMotionSystem from '@/components/faq/faq-motion-system';
import FaqWhatWeDo from '@/components/faq/faq-what-we-do';
import FaqPricing from '@/components/faq/faq-top-pricing';
import FaqNewsletter from '@/components/faq/faq-newsletter-signup';
import FaqBookCall from '@/components/faq/faq-book-call';
import FaqOurClients from '@/components/faq/faq-our-clients';
import HomeWorkSection from '@/components/home/home-work-section';
import WorkWorkSection from '@/components/work/work-work-section';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';

export default function Home(props) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.featuredWork.projects;

  return (
    <Layout isHiddenByDefault hideTopNav>
      <OverviewHero />
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
      <LogoCarousel />
      <HomeWorkSection projects={projectsList} />
      <FaqWhatWeDo />
      <FaqOurClients />
      <FaqProcess />
      <ContactSection useTransparentBackground />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.featuredWork({
    relativePath: 'featured-work.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
