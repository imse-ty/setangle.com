import { setyTheme } from '@/lib/site-theme';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'krado-react';
import { ThemeUIProvider } from 'theme-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
