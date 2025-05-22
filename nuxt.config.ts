import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css", "aos/dist/aos.css", "swiper/css"], // Include AOS CSS here
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title:
        "ATH Meadows | Premium 2 & 3 BHK Apartments in Madambakkam, Chennai",

      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          content:
            "Discover ATH Meadows, a serene residential enclave in Madambakkam, Chennai. Thoughtfully designed 2 & 3 BHK homes surrounded by greenery, elegance, and calm.",
        },

        {
          property: "og:title",
          content:
            "ATH Meadows | Premium 2 & 3 BHK Apartments in Madambakkam, Chennai",
        },
        {
          property: "og:description",
          content:
            "Discover ATH Meadows, a serene residential enclave in Madambakkam, Chennai. Thoughtfully designed 2 & 3 BHK homes surrounded by greenery, elegance, and calm.",
        },
        // { property: "og:type", content: "website" },
        // { property: "og:url", content: "https://drsivabalancounseling.com/" },
        // {
        //   property: "og:image",
        //   content:
        //     "https://ik.imagekit.io/6xyfxjllr/logog-removebg-preview.png",
        // },
      ],
      link: [
        {
          rel: "icon",
          type: "public/gif",
          href: "/favicon.png",
          sizes: "48x48",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js",
          defer: true,
        },

        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
