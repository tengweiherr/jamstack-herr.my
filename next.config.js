/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      ssr: true
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
      }
    ],
    minimumCacheTTL: 604800
  },
  transpilePackages: ['gsap']
}

module.exports = nextConfig
