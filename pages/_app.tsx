import { setyTheme } from '@/lib/site-theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'krado-react';
import { ThemeUIProvider } from 'theme-ui';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
