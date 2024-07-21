import { setyTheme } from '@/lib/site-theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'krado-react';
import { ThemeUIProvider } from 'theme-ui';
import Script from 'next/script';
import { Suspense, lazy } from 'react';
import { VisualEditing } from 'next-sanity';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = lazy(() => import('@/components/preview-provider'));

export default function App({
  Component,
  pageProps
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://f.convertkit.com/ckjs/ck.5.js' />
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy='lazyOnload'
          />
        )}

      <DefaultSeo
        title='Set Angle — Digital creative agency'
        description='We blend animation, technology, and sound to transform ordinary stories into soulful brand experiences that inspire the culture we live in today.'
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'agency, studio, marketing, motion, design, motion design, art, HTML, CSS, JavaScript, programming, developer, code, media, animation, designer, website'
          }
        ]}
      />
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
          <Suspense>
            <VisualEditing />
          </Suspense>
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeUIProvider>
  );
}
