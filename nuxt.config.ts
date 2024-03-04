// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    // ... other modules
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Ubuntu: true, // Load the Roboto font
        },
      },
    ],
  ],
  // ... other configurations
});
