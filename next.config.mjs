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
        destination: 'https://cal.com/team/setangle/chat',
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
        source: '/goodtalent',
        destination: 'https://tally.so/r/w8KKKO',
        permanent: false
      },
      {
        source: '/consultation',
        destination: 'https://cal.com/team/setangle/consultation',
        permanent: false
      },
      {
        source: '/talent',
        destination: '/work-with-us',
        permanent: false
      },
      {
        source: '/assistant',
        destination: '/work-with-us/assistant',
        permanent: false
      },
      {
        source: '/sanshu',
        destination: '/work/sanshu',
        permanent: false
      },
      {
        source: '/opencal',
        destination: 'https://cal.com/team/setangle/opencal',
        permanent: false
      },
      {
        source: '/goodpeople',
        destination: '/work-with-us',
        permanent: false
      },
      {
        source: '/interview',
        destination: 'https://cal.com/team/setangle/interview',
        permanent: false
      },
      {
        source: '/call',
        destination: 'https://cal.com/team/setangle/call',
        permanent: false
      },
      {
        source: '/talk',
        destination: 'https://cal.com/team/setangle/talk',
        permanent: false
      },
      {
        source: '/brief',
        destination: 'https://cal.com/team/setangle/brief',
        permanent: false
      },
      {
        source: '/abstract',
        destination: 'https://www.instagram.com/p/C8XBcxbRgON/',
        permanent: false
      },
      {
        source: '/sanshubehance',
        destination: 'https://www.behance.net/gallery/202877441/SANSHU?share=1',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
