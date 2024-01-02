export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-primevue',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  devtools: { enabled: true },
  css: ['primeicons/primeicons.css']
})
