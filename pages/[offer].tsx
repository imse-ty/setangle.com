/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import { useState } from 'react';
import { Container } from 'krado-react';
import DustParticles from '@/components/dust-particles';
import { getClient } from '@/lib/sanity.client';
import OfferHero from '@/components/offers/offer-hero';
import StarterKitSection from '@/components/offers/starter-kit-section';
import { useColorMode } from 'theme-ui';

export default function Offer({ offerData, projectsList }) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('light');

  const renderSection = (section) => {
    console.log(section);

    switch (section._type) {
      case 'starterKitSection':
        return <StarterKitSection key={section._key} data={section} />;

      // Add other cases for different sections based on the name

      default:
        return null;
    }
  };

  return (
    <>
      <Layout isHiddenByDefault hideTopNav>
        <DustParticles />
        <OfferHero
          pretext={offerData.headerPretext}
          title={offerData.title}
          subtitle={offerData.subtitle}
        />
        {offerData.pageSections.map(renderSection)}
        <Container sx={{ marginBottom: 6 }}>
          {/* Existing components like ReelSection, LogoCarousel, etc. */}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = getClient();
  const { offer } = params;
  const offerQuery = `*[_type == "offer" && slug.current == $offer][0]`;
  const projectsQuery = `*[_type == "techWork"]{
    projects[]->{
      title,
      slug,
      mainImage
    }
  }`;

  const offerData = await client.fetch(offerQuery, { offer });
  const projectsList = await client.fetch(projectsQuery);

  if (!offerData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      offerData,
      projectsList
    },
    revalidate: 60 // Revalidate every 60 seconds
  };
};

export const getStaticPaths = async () => {
  const client = getClient();
  const pathsQuery = `*[_type == "offer" && defined(slug.current)]{
    "params": { "offer": slug.current }
  }`;

  const paths = await client.fetch(pathsQuery);

  return {
    paths,
    fallback: 'blocking' // 'blocking' will server-render pages on demand if not statically generated yet
  };
};
