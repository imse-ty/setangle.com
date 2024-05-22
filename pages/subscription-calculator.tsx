/** @jsxImportSource theme-ui */
//@ts-nocheck

import VideoSection from '@/components/video-section';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { Box } from 'krado-react';
import { useColorMode } from 'theme-ui';
import PricingCalculator from '@/components/subscription/PricingCalculator';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('light');

  return (
    <Layout>
      <NextSeo noindex />
      <Box sx={{ marginTop: '10vh' }} />
      <PricingCalculator />
    </Layout>
  );
}
