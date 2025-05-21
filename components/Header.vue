<template>
  <header class="bg-white text-[#123B78] fixed top-0 z-50 w-full shadow-md">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center">
        <img
          src="/public/Meadows Logo.png"
          alt="logo"
          class="w-[100px] sm:w-[150px] md:w-[170px]"
        />
      </div>

      <!-- Desktop Navigation -->
      <nav
        class="hidden lg:flex space-x-6 xl:space-x-12 2xl:space-x-20 text-sm lg:text-base xl:text-lg items-center"
      >
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
          href="tel:+918939856789"
          class="bg-[#E92A7B] text-white text-xs sm:text-sm font-semibold shadow-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#EE6FA8]"
        >
          Enquire Now
        </a>
      </nav>
    </div>

    <!-- Mobile Action Bar -->
    <div
      class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden bg-[#3E2D7E] text-white rounded-full border-2 border-yellow-400 px-3 sm:px-6 py-2 sm:py-3 w-[90%] max-w-sm shadow-lg flex justify-between items-center text-center"
    >
      <!-- Call Us -->
      <a
        href="tel:+918939856789"
        class="flex flex-col items-center text-[14px] sm:text-xs"
      >
        <img
          src="/public/call.png"
          alt="call"
          class="h-5 w-5 sm:h-6 sm:w-6 mb-1"
        />
        Call Us
      </a>

      <!-- Go To Top -->
      <button
        @click="scrollToTop"
        class="flex flex-col items-center text-[14px] sm:text-xs"
      >
        <img
          src="/public/arrow (2).png"
          alt="arrow"
          class="h-4 w-5 sm:h-6 sm:w-6 mb-1"
        />
        Go To Top
      </button>

      <!-- Enquiry -->
      <a
        @click="scrollToTop"
        href="#"
        class="flex flex-col items-center text-[14px] sm:text-xs"
      >
        <img
          src="/public/enquir.png"
          alt="enquire"
          class="h-5 w-5 sm:h-6 sm:w-6 mb-1"
        />
        Enquiry
      </a>
    </div>
  </header>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
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
  background-color: #f06292;
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
