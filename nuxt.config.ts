// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js

export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
  image: {
    dir: 'assets',
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
})
