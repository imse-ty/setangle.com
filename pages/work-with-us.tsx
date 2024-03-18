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

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [roles] = useLiveQuery<Role[]>(props.roles, rolesQuery);
  const [isRoleOpen, setIsRoleOpen] = useState(true);
  let router = useRouter();

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
      </Layout>
    </>
  );
}
