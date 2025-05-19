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
      // ...your existing title, meta, etc.
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js",
          defer: true,
        },
      ],
    },
  },
});
