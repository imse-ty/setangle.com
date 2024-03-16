/** @jsxImportSource theme-ui */
// @ts-nocheck

import Layout from '@/components/layout';
import OpenRolesSection from '@/components/people/open-roles-section';
import PeopleHero from '@/components/people/people-hero';
import React from 'react';

export default function People() {
  return (
    <Layout>
      <PeopleHero />
      <OpenRolesSection />
    </Layout>
  );
}
