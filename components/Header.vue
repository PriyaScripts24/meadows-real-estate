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
          class="w-[100px] sm:w-[150px] md:w-[140px]"
        />
      </div>

      <!-- Desktop Navigation -->
      <nav
        class="hidden lg:flex space-x-6 xl:space-x-12 2xl:space-x-20 text-sm lg:text-base xl:text-sm items-center"
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
          @click="showModal = true"
          class="cursor-pointer bg-[#E92A7B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#EE6FA8] text-[10px]"
        >
          Enquire Now
        </a>

        <transition name="fade">
          <div
            v-show="showModal"
            class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <div
              class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6"
            >
              <!-- Close Button -->
              <button
                @click="showModal = false"
                class="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              >
                &times;
              </button>

              <!-- Form -->
              <h2
                class="text-2xl font-semibold mb-4 text-center text-[#3E2D7E]"
              >
                Register Now
              </h2>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  class="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  class="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  class="w-full px-4 py-3 border rounded-lg"
                />
                <select class="w-full px-4 py-3 border rounded-lg">
                  <option>2 BHK - ₹ 70L Onwards</option>
                  <option>3 BHK - ₹ 85L Onwards</option>
                </select>

                <!-- reCAPTCHA -->
                <div class="w-[400px] overflow-hidden">
                  <div
                    class="g-recaptcha mt-4 w-full max-w-xs mx-auto"
                    data-sitekey="6LeT-0ErAAAAAAP8nn2DDYmNhv4vLTkvCIqBQAyQ"
                  ></div>
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#3E2D7E] text-white py-3 rounded-lg hover:bg-[#E92A7B] transition"
                >
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </transition>
      </nav>
    </div>

    <!-- Mobile Action Bar -->
    <div
      class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden bg-[#E92A7B] text-white rounded-full border-2 border-yellow-400 px-3 sm:px-6 py-2 sm:py-3 w-[90%] max-w-sm shadow-lg flex justify-between items-center text-center"
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
import { ref, watch, onMounted } from "vue";
import { useHead } from "#imports";

const showModal = ref(false);
useHead({
  script: [
    {
      src: "https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY",
      async: true,
      defer: true,
    },
  ],
});

onMounted(() => {
  // Initialize AOS
  if (typeof window !== "undefined") {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }
});
const handleSubmit = async (event) => {
  event.preventDefault();

  const token = await window.grecaptcha.execute(
    "6LeT-0ErAAAAAAP8nn2DDYmNhv4vLTkvCIqBQAyQ",
    {
      action: "submit",
    }
  );

  // Send this token to your server for verification
  console.log("reCAPTCHA Token:", token);

  // You can now submit the form along with the token
};

// Scroll to top function

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
@media (max-width: 480px) {
  .g-recaptcha iframe {
    transform: scale(0.8);
    transform-origin: 0 0;
    width: 304px; /* keep original width for iframe */
    height: 78px; /* keep original height */
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
