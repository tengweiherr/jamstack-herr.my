/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      }
    ]
  },
  transpilePackages: ['gsap']
}

module.exports = nextConfig
