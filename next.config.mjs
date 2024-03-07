/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ];
  }
};

export default nextConfig;
