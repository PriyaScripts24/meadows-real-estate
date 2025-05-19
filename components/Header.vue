<template>
  <header class="bg-white text-[#123B78]">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img
          src="/public/Meadows Logo.png"
          alt="logo"
          class="md:w-[220px] md:h-[90px] w-[150px] h-[60px]"
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
        <a href="#hero" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#amenities" class="nav-link">Property</a>
        <a href="#location" class="nav-link">News</a>
        <a href="#counter" class="nav-link">Contact</a>
        <a
          href="#"
          class="bg-[#123B78] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#e64a19]"
        >
          📞 Call Now
        </a>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isOpen"
      class="md:hidden bg-[#123B78] px-4 py-4 space-y-2 text-sm transition-all duration-300"
    >
      <a href="#" class="block nav-link text-white">Home</a>
      <a href="#" class="block nav-link text-white">About</a>
      <a href="#" class="block nav-link text-white">Property</a>
      <a href="#" class="block nav-link text-white">News</a>
      <a href="#" class="block nav-link text-white">Contact</a>
      <a
        href="#"
        class="block text-center bg-[#123B78] text-white font-semibold px-4 py-2 rounded hover:bg-[#e64a19]"
      >
        📞 Call Now
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
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
