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

export default function Home(props) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.featuredWork.projects;

  return (
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
