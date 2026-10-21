export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tokens.css', '~/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  routeRules: {
    '/**': { prerender: true },
  },
  app: {
    head: {
      title: 'Behzad Baladeh — Software Engineer',
      meta: [
        { name: 'description', content: 'Behzad Baladeh — Software Engineer. Building reliable systems and shipping quality software.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    }
  }
})
