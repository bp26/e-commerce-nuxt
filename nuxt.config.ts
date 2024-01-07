export default defineNuxtConfig({
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css'
  ],
  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  }
})
