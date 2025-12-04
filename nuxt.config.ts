import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    //baseURL: '/website-elmley/',
    head: {
      title: 'Elmley Homes - website',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
    }
  },

  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/color-mode',
    'vue3-carousel-nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito+Sans': true
      }
    }],
    '@nuxt/image'
  ],
  colorMode: {
    classSuffix: '',
  },

  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  }
})