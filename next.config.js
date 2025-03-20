/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mwa.my',
        port: '',
        pathname: '/ribbon/**',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/assets.herr.my/**',
      },
      {
        protocol: 'https',
        hostname: 'dzhcg7398kr2k.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 604800,
  },
  transpilePackages: ['gsap'],
}

module.exports = nextConfig
