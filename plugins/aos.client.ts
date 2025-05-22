// plugins/aos.client.ts
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.addEventListener("DOMContentLoaded", () => {
      AOS.init();
    });
  }
});
