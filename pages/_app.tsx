import { setyTheme } from '@/lib/site-theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'krado-react';
import { ThemeUIProvider, useColorMode } from 'theme-ui';
import Script from 'next/script';
import { Suspense, lazy } from 'react';
import { VisualEditing } from 'next-sanity';

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
      <Script src='https://f.convertkit.com/ckjs/ck.5.js' />
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy='lazyOnload'
          />
        )}
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
