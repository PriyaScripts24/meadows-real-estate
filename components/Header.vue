<template>
  <header class="bg-white text-[#123B78] fixed top-0 z-50 w-full shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2 justify-center">
        <img
          src="/public/Meadows Logo.png"
          alt="logo"
          class="md:w-[170px] w-[120px]"
        />
      </div>

      <!-- Hamburger Icon (Mobile) -->
      <!-- <button class="md:hidden relative w-6 h-6" @click="isOpen = !isOpen">
        <span
          :class="[
            'block absolute h-0.5 w-full bg-[#123B78] transform transition duration-300 ease-in-out',
            isOpen ? 'rotate-45 top-2.5' : 'top-0',
          ]"
        ></span>
        <span
          :class="[
            'block absolute h-0.5 w-full bg-[#123B78] transition-all duration-300 ease-in-out',
            isOpen ? 'opacity-0' : 'top-2.5',
          ]"
        ></span>
        <span
          :class="[
            'block absolute h-0.5 w-full bg-[#123B78] transform transition duration-300 ease-in-out',
            isOpen ? '-rotate-45 top-2.5' : 'top-5',
          ]"
        ></span>
      </button> -->

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-20 text-lg items-center">
        <a
          href="#hero"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >Home</a
        >
        <a
          href="#about"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >About Meadows</a
        >
        <a
          href="#amenities"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >Amenities</a
        >
        <a
          href="#location"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >Location</a
        >

        <a
          href="tel:+9189398 56789"
          class="bg-[#E92A7B] text-white text-sm font-semibold shadow-lg px-6 py-3 rounded-lg hover:bg-[#EE6FA8]"
        >
          Enquire Now
        </a>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <!-- Mobile Action Bar (only visible on mobile screens) -->
    <div
      class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden bg-[#8B2A55] text-white rounded-full border-2 border-yellow-400 px-6 py-3 w-[90%] max-w-sm shadow-lg flex justify-between items-center text-center"
    >
      <!-- Call Us -->
      <a href="tel:+918939856789" class="flex flex-col items-center text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a16 16 0 0016 16l3-3a2 2 0 00-1.5-3.4c-1.6.3-3.2-.5-4.7-2.1s-2.4-3.1-2.1-4.7a2 2 0 00-3.4-1.5l-3 3z"
          />
        </svg>
        Call Us
      </a>

      <!-- Go To Top -->
      <button @click="scrollToTop" class="flex flex-col items-center text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        Go To Top
      </button>

      <!-- Enquiry -->
      <a
        @click="scrollToTop"
        href="#"
        class="flex flex-col items-center text-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        Enquiry
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.nav-link {
  position: relative;
  padding-bottom: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 3px;
  background-color: #f06292; /* Stylish pink */
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  font-weight: 700;
  font-size: 1.05rem;
}
</style>
