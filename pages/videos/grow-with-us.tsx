/** @jsxImportSource theme-ui */
//@ts-nocheck

import VideoSection from '@/components/video-section';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import { Box } from 'krado-react';
import { useColorMode } from 'theme-ui';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  setColorMode('dark');

  return (
    <Layout>
      <NextSeo noindex />
      <Box sx={{ marginTop: '10vh' }} />
      <VideoSection
        isPlayButtonHidden={false}
        isVideoActive={isVideoActive}
        url='https://vimeo.com/927722152'
        poster='/work-with-us-thumbnail.jpg'
        previewSrc='/work-with-us-preview.webm'
        setIsVideoActive={() => {
          if (typeof umami !== 'undefined' && !isVideoActive) {
            umami.track('assistant-video-blurb-play');
          }

          setIsVideoActive(!isVideoActive);
        }}
        fullscreen
      />
    </Layout>
  );
}
