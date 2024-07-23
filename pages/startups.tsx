/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import OverviewHero from '@/components/overview-hero';
import { useState } from 'react';
import { Container } from 'krado-react';
import LogoCarousel from '@/components/logo-carousel';
import ContactSection from '@/components/contact/contact-section';
import ReelSection from '@/components/reel-section';
import { useColorMode } from 'theme-ui';
import FaqProcess from '@/components/faq/faq-process';
import FaqWhatWeDo from '@/components/faq/faq-what-we-do';
import FaqOurClients from '@/components/faq/faq-our-clients';
import HomeWorkSection from '@/components/home/home-work-section';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import DustParticles from '../components/dust-particles';
import StartupOffer from '@/components/offers/startup-offer';
import OfferMission from '@/components/offers/offer-mission';
import { Card } from '@/components/card';
import TechTestimonials from '@/components/offers/tech-testimonals';

export default function Home(props) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.techWork.projects;

  return (
    <>
      <Layout isHiddenByDefault hideTopNav>
        <DustParticles />
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
        <LogoCarousel isLight={false} />
        <TechTestimonials />
        <StartupOffer />
        <HomeWorkSection projects={projectsList} />
        <OfferMission />
        <ContactSection useTransparentBackground />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.techWork({
    relativePath: 'tech-work.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
