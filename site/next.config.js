/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'micro app',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://esirer.github.io/app/',
    contactUrl: 'https://www.micro.cm',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
