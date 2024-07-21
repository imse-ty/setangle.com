/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import { useState } from 'react';
import ContactSection from '@/components/contact/contact-section';
import { useColorMode } from 'theme-ui';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import AllWorkSection from '@/components/work/all-work-section';

export default function Work(props) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  return (
    <Layout isHiddenByDefault hideTopNav>
      <AllWorkSection projects={projectsList} />
      <ContactSection useTransparentBackground />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.workPage({
    relativePath: 'work-page.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
