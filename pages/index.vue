<template>
  <div class="overflow-hidden">
    <!-- header section -->
    <section id="header">
      <Header />
    </section>
    <!-- hero section -->
    <section
      id="hero"
      class="relative min-h-screen bg-cover bg-center px-4 py-16 flex items-center justify-center"
      :style="{ backgroundImage: 'url(/banner.png)' }"
    >
      <!-- Optional semi-transparent overlay -->
      <div class="absolute inset-0 bg-white/40 md:bg-transparent"></div>

      <div
        class="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 px-10 -mt-[120px]"
      >
        <!-- Left Text Block -->

        <div
          class="w-full md:w-1/2 text-center md:text-left md:-mt-[300px] mt-10"
        >
          <div
            class="flex flex-col gap-4"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <h2 class="text-[#3E2D7E] text-3xl md:text-4xl font-semibold">
              Presenting Modern
            </h2>
            <h2 class="text-[#3E2D7E] text-3xl md:text-4xl font-semibold">
              Lifestyle Apartment
            </h2>
            <img
              src="/Meadows Logo.png"
              alt="logo"
              class="mx-auto md:mx-0 w-[120px] md:w-[170px]"
            />
          </div>
        </div>

        <!-- Right Form Box -->
        <div class="w-full md:w-2/5" data-aos="fade-left" data-aos-delay="200">
          <div
            class="w-full max-w-md bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-10 mx-auto"
          >
            <h2
              class="text-2xl md:text-3xl font-semibold mb-6 text-center text-[#3E2D7E]"
            >
              Register now
            </h2>
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <input
                type="email"
                placeholder="Email Address"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <textarea
                rows="4"
                placeholder="Message / Inquiry"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-[#3E2D7E] text-white font-semibold py-3 rounded-lg hover:bg-[#E92A7B] transition"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- about section -->

    <section
      id="about"
      class="relative py-16 px-4 bg-no-repeat bg-cover bg-center md:bg-fixed md:-mt-0 -mt-20 overflow-hidden"
      :class="{ 'bg-none': screenWidth < 768 }"
      style="background-image: url('/about banner.png')"
    >
      <div class="flex flex-col md:flex-row md:justify-end items-center gap-6">
        <div
          class="w-full max-w-lg bg-[#EDE6F2] rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm bg-opacity-90 md:mt-0 mt-48"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2
            class="text-2xl md:text-3xl font-semibold text-[#3E2D7E] mb-4 text-center"
          >
            About Project
          </h2>

          <div class="flex justify-center mb-4">
            <img
              src="/public/Meadows Flower.gif"
              alt="Asset Tree Homes Logo"
              class="h-12 md:h-16"
            />
          </div>

          <p
            class="text-gray-700 text-sm md:text-base leading-relaxed text-justify"
          >
            Asset Tree Homes presents <strong>ATH MEADOWS</strong> — a
            thoughtfully designed residential apartment project located in
            Madambakkam. <br /><br />
            Offering modern 2 & 3 BHK apartments, ATH MEADOWS blends
            architectural excellence with functional design in a calm and
            well-connected neighborhood.
            <br /><br />
            Ideal for families, first-time home buyers, and investors looking
            for a peaceful, yet growing part of the city to call home.
          </p>
        </div>
      </div>
    </section>

    <!-- Project Amenities -->
    <section class="py-1 overflow-hidden" id="amenities">
      <h2 class="font-semibold text-3xl text-[#3E2D7E] text-center mt-10">
        Project Amenities
      </h2>
      <div class="mt-10" data-aos="fade-down" data-aos-delay="200">
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div class="flex flex-wrap justify-center md:gap-30 gap-10">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex flex-col items-center text-center w-40"
            >
              <img
                :src="feature.image"
                :alt="feature.title"
                class="h-40 mb-4"
              />
              <p
                class="text-md text-[#EE6FA8] leading-snug"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {{ feature.title }}
              </p>
            </div>
          </div>

          <div class="hidden md:block w-[2px] bg-green-600 h-32 mx-4"></div>

          <div
            class="text-center md:text-left md:w-64"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 class="text-xl md:text-3xl font-semibold text-[#3E2D7E]">
              Your Canvas,<br />Your Masterpiece.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Location advantage with map -->
    <section class="bg-white py-12 px-4" id="location">
      <div class="flex justify-around items-center flex-col px-10">
        <div
          class="flex flex-col lg:flex-row items-center justify-around gap-10 md:gap-0"
        >
          <div
            class="w-full lg:w-1/3"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/public/map.png"
              alt="Location Map"
              class="rounded-lg w-full object-contain"
            />
          </div>
          <div
            class="hidden lg:flex flex-col items-center justify-center"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img
              src="/public/butterfly1.gif"
              alt="image"
              class="w-[100px] h-[100px]"
            />
            <img
              src="/public/butterfly2.gif"
              alt="image"
              class="w-[100px] h-[100px]"
            />
          </div>

          <div
            class="w-full lg:w-1/3 space-y-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 class="text-4xl font-semibold text-[#3E2D7E]">
              Close to All, Far from Ordinary
            </h3>
            <p class="text-gray-700 text-md">
              Located in the vibrant neighborhood of Madambakkam, ATH Meadows
              offers the best of both worlds. With easy access to major
              highways, schools, hospitals, and shopping centers, everything you
              need is just a short drive away. Enjoy the calm of a
              well-connected community while staying close to Chennai’s bustling
              energy.
            </p>

            <ul
              class="list-disc list-inside text-md text-blue-800 space-y-1 pt-2"
            >
              <li>Trileaves Group of Schools - 1 Min</li>
              <li>Zion Matriculation Hr. Sec. School - 1 Min</li>
              <li>Alwin Memorial Public School - 2 Mins</li>
              <li>Bharath University - 3 Mins</li>
              <li>Kendriya Vidyalaya School - 3 Mins</li>
              <li>Camp Road Junction - 5 Mins</li>
              <li>MCC College - 10 Mins</li>
              <li>Tambaram Railway Station - 10 Mins</li>
              <li>Annai Teresa Hospital - 15 Mins</li>
              <li>Hindu Mission Hospital - 15 Mins</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Counter Section -->
    <section
      id="counter"
      class="relative bg-cover bg-center py-12 px-6 text-white"
      style="background-image: url('/banner2.png')"
    >
      <div class="bg-black/40 absolute inset-0 z-0"></div>

      <div
        class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8"
      >
        <div
          class="lg:w-1/2 text-white space-y-6 px-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div id="type" class="">
            <h2 class="text-xl md:text-5xl font-bold leading-tight">
              19+ years of experience <br />in creating exceptional living
              spaces
            </h2>
          </div>

          <p class="text-sm md:text-base text-gray-300">
            Asset Tree Homes consistently delivers superior quality homes,
            creating lasting legacies that stand the test of time.
          </p>

          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center bg-white/90 text-[#3E2D7E] p-6 rounded-lg px-3"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div>
              <p class="text-3xl font-bold">{{ years }}+</p>
              <p class="text-sm">Years of Excellence</p>
            </div>
            <div>
              <p class="text-3xl font-bold">{{ projects }}+</p>
              <p class="text-sm">Completed Projects</p>
            </div>
            <div>
              <p class="text-3xl font-bold">{{ homes }}+</p>
              <p class="text-sm">Happy Homes</p>
            </div>
            <div>
              <p class="text-3xl font-bold">{{ staff }}+</p>
              <p class="text-sm">Experienced Personnel</p>
            </div>
          </div>
        </div>

        <div
          class="w-full md:w-1/3 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-black"
          data-aos="flip-right"
          data-aos-delay="200"
        >
          <div class="w-full max-w-md p-4 md:p-10 mx-auto">
            <h2
              class="text-2xl md:text-3xl font-semibold mb-6 text-center text-[#3E2D7E]"
            >
              Register now
            </h2>
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <input
                type="email"
                placeholder="Email Address"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              />
              <textarea
                rows="4"
                placeholder="Message / Inquiry"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-[#3E2D7E] text-white font-semibold py-3 rounded-lg hover:bg-[#E92A7B] transition"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <section id="footer">
      <Footer />
    </section>
    <!-- Mobile Sticky Call Now Button -->
    <section
      class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-300 shadow-lg overflow-hidden"
    >
      <div class="flex justify-center items-center gap-4">
        <a
          href="tel:+918939856789"
          class="flex-1 text-white text-center font-semibold bg-[#E92A7B] hover:bg-[#EE6FA8] rounded-sm text-xl py-4"
        >
          Call Now
        </a>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const years = ref(0);
const projects = ref(0);
const homes = ref(0);
const staff = ref(0);

// New version: uses time-based animation
const animateCounter = (target, refVar, duration = 1000) => {
  const start = performance.now();

  const update = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1); // from 0 to 1
    refVar.value = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      refVar.value = target; // ensure it ends cleanly
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  AOS.init();
  animateCounter(20, years, 800); // 800ms duration
  animateCounter(100, projects, 800);
  animateCounter(1000, homes, 800);
  animateCounter(150, staff, 800);
});

const features = [
  {
    title: "49 Exquisitely Designed Premium Residences",
    image: "/img1.gif",
  },
  {
    title: "Serene Ambiance for Peaceful Living",
    image: "/img2.gif",
  },
  {
    title: "20 World-Class Amenities for Modern Living",
    image: "/img3.gif",
  },
  {
    title: "A 5-Storey Architectural Masterpiece",
    image: "/img4.gif",
  },
  {
    title: "Rooftop Escape for Ultimate Rejuvenation",
    image: "/img5.gif",
  },
];
</script>
<style>
#type h2 {
  width: 20ch;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(30) infinite alternate;
}

@keyframes typing {
  from {
    width: 0ch;
  }
  to {
    width: 30ch;
  }
}
</style>
