// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
import path from 'path' // Import path module

export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          ubuntu: true,
        },
      },
    ],
  ],
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
})
