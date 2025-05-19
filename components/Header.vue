<template>
  <header class="bg-white text-[#123B78] fixed top-0 z-50 w-full shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img
          src="/public/Meadows Logo.png"
          alt="logo"
          class="md:w-[170px] w-[120px]"
        />
      </div>

      <!-- Hamburger Icon (Mobile) -->
      <button class="md:hidden relative w-6 h-6" @click="isOpen = !isOpen">
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
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-20 text-xl items-center">
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
          >About</a
        >
        <a
          href="#amenities"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >Property</a
        >
        <a
          href="#location"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >News</a
        >
        <a
          href="#counter"
          class="nav-link"
          data-aos="fade-right"
          data-aos-delay="200"
          >Contact</a
        >
        <a
          href="tel:+9189398 56789"
          class="bg-[#E92A7B] text-white text-sm font-semibold shadow-lg px-6 py-3 rounded-lg hover:bg-[#EE6FA8]"
        >
          Call Now
        </a>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-[#123B78] text-white p-6 w-64 transform transition-transform duration-300 md:hidden"
        :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
      >
        <a href="#hero" class="block nav-link py-2">Home</a>
        <a href="#about" class="block nav-link py-2">About</a>
        <a href="#amenities" class="block nav-link py-2">Property</a>
        <a href="#location" class="block nav-link py-2">News</a>
        <a href="#counter" class="block nav-link py-2">Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
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
