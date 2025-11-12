// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-studio"],

  studio: {
    development: {
      sync: true,
    },
    repository: {
      owner: "WiRight",
      repo: "content-studio",
    },
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
