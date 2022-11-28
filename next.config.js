const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withImages = require('next-images')
module.exports = withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        // for webpack 5 use
        // { and: [/\.(js|ts)x?$/] }
      },

      use: ['@svgr/webpack'],
    })

    return config
  },
})
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /server\/pages\/_middleware\.js$/,
    ],
  },
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['s3.vira.ir', 's3-state.vira.com', 'localhost'],
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/ 404': { page: '/404' },
      '/auth': { page: '/auth' },
      '/checkout': { page: '/checkout' },
      '/dashboard/profile': { page: '/dashboard/profile' },
      '/dashboard/wallet': { page: '/dashboard/wallet' },
      '/payment-result': { page: '/payment-result' },
      '/shop/create': { page: '/shop/create' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
})
