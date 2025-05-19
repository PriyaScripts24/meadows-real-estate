import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css", "aos/dist/aos.css"], // Include AOS CSS here
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js",
          defer: true,
        },
      ],
    },
  },
});
