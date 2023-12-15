// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image',
  ],
  css: ['@/assets/css/main.css', '@/assets/css/variables.css'],
  image: {
    format: ['avif', 'webp']
  }
})
