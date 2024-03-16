/** @jsxImportSource theme-ui */
// @ts-nocheck

import { PortableText } from '@portabletext/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';
import { readToken } from '@/lib/sanity.api';
import { getClient } from '@/lib/sanity.client';
import {
  getRole,
  type Role,
  roleBySlugQuery,
  roleSlugsQuery
} from '@/lib/sanity.queries';
import type { SharedPageProps } from '@/pages/_app';
import { Container, Box, Flex, Button } from 'krado-react';
import Text from '@/components/fixed-krado-components/Text';
import Heading from '@/components/fixed-krado-components/Heading';
import ScaleInEffect from '@/components/scale-in-effect';
import Wrapper from '@/components/wrapper';
import Layout from '@/components/layout';
import RoleCard from '@/components/roles/role-card';
import sanityComponents from '@/lib/sanity-components';
import ContactSection from '@/components/contact/contact-section';
import Modal from '@/components/modal';
import FormEmbed from '@/components/roles/form-embed';
import { useState } from 'react';

interface Query {
  [key: string]: string;
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    role: Role;
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const role = await getRole(client, params.slug);

  if (!role) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      role
    }
  };
};

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [role] = useLiveQuery(props.role, roleBySlugQuery, {
    slug: props.role.slug.current
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <FormEmbed />
      </Modal>
      <Layout>
        <Container
          sx={{
            marginTop: 7,
            marginBottom: 4,
            display: 'flex',
            gap: 3,
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'center'
          }}
        >
          <Text variant='body.pretext'>We are looking for a good</Text>
          <Heading as='h1' variant='display.display'>
            {role.title}
          </Heading>
          <Text
            as='p'
            variant='body.summary'
            sx={{ maxWidth: '1000px', marginBottom: 3 }}
          >
            {role.description}
          </Text>
          <Button sx={{ marginBottom: 5 }}>Apply now</Button>
        </Container>
        <ScaleInEffect>
          <Wrapper
            sx={{
              backgroundColor: 'surface.black'
            }}
          >
            <Flex sx={{ width: '100%', height: '100%', gap: 6 }}>
              <Box
                sx={{
                  position: 'sticky',
                  width: '20%',
                  top: 7,
                  height: '25%'
                }}
              >
                <ScaleInEffect>
                  <RoleCard
                    title={role.title}
                    rate={role.rate}
                    rateSubtitle={role.rateSubtitle}
                    tags={role.tags}
                    onClick={() => setIsFormOpen(true)}
                  />
                </ScaleInEffect>
              </Box>
              <Box sx={{ textAlign: 'left', maxWidth: '1000px' }}>
                <PortableText value={role.body} components={sanityComponents} />
              </Box>
            </Flex>
          </Wrapper>
        </ScaleInEffect>
        <ContactSection useTransparentBackground />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const client = getClient();
  const slugs = await client.fetch(roleSlugsQuery);

  return {
    paths: slugs?.map(({ slug }) => `/people/${slug}`) || [],
    fallback: 'blocking'
  };
};
