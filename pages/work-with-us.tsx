/** @jsxImportSource theme-ui */
// @ts-nocheck

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';

import { readToken } from '@/lib/sanity.api';
import { getClient } from '@/lib/sanity.client';
import { getRoles, type Role, rolesQuery } from '@/lib/sanity.queries';
import type { SharedPageProps } from '@/pages/_app';
import Layout from '@/components/layout';
import PeopleHero from '@/components/people/people-hero';
import OpenRolesSection from '@/components/people/open-roles-section';
import Modal from '@/components/modal';
import RoleSummarySection from '@/components/people/role-summary-section';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useColorMode } from 'theme-ui';
import ContactSection from '@/components/contact/contact-section';
import RolesContactSection from '@/components/roles/roles-contact-section';

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    roles: Role[];
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const roles = await getRoles(client);

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      roles
    }
  };
};

export default function TalentPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [roles] = useLiveQuery<Role[]>(props.roles, rolesQuery);
  const [isRoleOpen, setIsRoleOpen] = useState(true);
  let router = useRouter();
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  return (
    <>
      {router.query.role && (
        <Modal
          isOpen={isRoleOpen}
          onClose={() => {
            router.push('/people');
          }}
          hasPadding={false}
        >
          <RoleSummarySection role={roles[router.query.role]} />
        </Modal>
      )}

      <Layout showPeopleContactButton>
        <PeopleHero />
        <OpenRolesSection roles={roles} />
        <RolesContactSection useTransparentBackground />
      </Layout>
    </>
  );
}