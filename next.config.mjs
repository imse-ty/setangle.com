/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.tina.io', 'cdn.sanity.io']
  },
  experimental: {
    scrollRestoration: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/chat',
        destination: 'https://cal.com/imsety/chat/',
        permanent: false
      },

      {
        source: '/agency',
        destination: '/',
        permanent: false
      },
      {
        source: '/zoom',
        destination: 'https://cal.com/imsety/zoom/',
        permanent: false
      },
      {
        source: '/motiontalent',
        destination: 'https://tally.so/r/nW5b0J',
        permanent: false
      },
      {
        source: '/consultation',
        destination: 'https://cal.com/imsety/consultation/',
        permanent: false
      },
      {
        source: '/talent',
        destination: '/work-with-us',
        permanent: false
      },
      {
        source: '/goodpeople',
        destination: '/work-with-us',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
