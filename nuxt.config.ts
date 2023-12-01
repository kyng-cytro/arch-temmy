// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Arch Temitope",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Self Sufficient | 5’11 | Sagittarius ♐️ | Conspiracy Theorist | Keyboardist",
        },
      ],
    },
  },
});
