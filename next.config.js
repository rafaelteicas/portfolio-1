/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/rafaelteicas.png',
      },
    ],
  },
};

module.exports = nextConfig;
