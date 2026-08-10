/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tools/token-decoder',
        destination: '/tools/jwt-decoder',
        permanent: true,
      },
      {
        source: '/token-decoder',
        destination: '/tools/jwt-decoder',
        permanent: true,
      },
      {
        source: '/jwt-decoder',
        destination: '/tools/jwt-decoder',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
