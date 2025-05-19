<template>
  <div>
    <!-- header section -->
    <section id="header">
      <Header />
    </section>
    <!-- hero section -->
    <section
      id="hero"
      class="relative min-h-screen bg-cover bg-center flex items-center justify-between px-4 py-12"
      :style="{ backgroundImage: 'url(/banner.png)' }"
    >
      <div class="text-center md:-mt-[620px] pl-10 flex flex-col gap-2">
        <h2 class="font-semibold text-3xl text-[#3E2D7E]">Presenting Modern</h2>
        <h2 class="font-semibold text-3xl text-[#3E2D7E]">
          Lifestyle Apartment
        </h2>
        <img
          src="/public/Meadows Logo.png"
          alt="logo"
          cl
          class="md:w-[220px] md:h-[90px] w-[150px] h-[60px]"
        />
      </div>

      <!-- Optional overlay for better contrast -->
      <div class="absolute inset-0 bg-white/40 md:bg-transparent"></div>

      <div
        class="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto"
      >
        <!-- Spacer on the left to push form to the right -->
        <div class="hidden md:block md:w-4/6"></div>

        <!-- Form container -->
        <div
          class="w-full md:w-1/3 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 md:-mt-30"
        >
          <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Get in Touch
          </h2>
          <form class="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Message / Inquiry"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    <!-- about section -->

    <section
      id="about"
      class="relative bg-cover bg-center bg-no-repeat py-16 px-4"
      style="background-image: url('/about banner.png')"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
        About Project
      </h2>
      <div class="flex justify-end">
        <div
          class="w-[500px] bg-[#EDE6F2] rounded-2xl p-6 md:p-7 shadow-lg backdrop-blur-sm bg-opacity-90"
        >
          <!-- Logo -->
          <div class="">
            <img
              src="/Meadows Flower.gif"
              alt="Asset Tree Homes Logo"
              class="h-12 md:h-40 px-40"
            />
          </div>

          <!-- Description -->
          <p class="text-gray-700 text-sm md:text-base leading-relaxed">
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
    <section class="py-1" id="amenities">
      <h2 class="font-semibold text-3xl text-[#3E2D7E] text-center">
        Project Amenities
      </h2>
      <div class="mt-10">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Features List -->
          <div class="flex flex-wrap justify-center gap-30 flex-1">
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
              <p class="text-sm text-[#3E2D7E] leading-snug">
                {{ feature.title }}
              </p>
            </div>
          </div>

          <!-- Divider Line on Desktop -->
          <div class="hidden md:block w-px bg-green-600 h-32 mx-4"></div>

          <!-- Tagline -->
          <div class="text-center md:text-left md:w-64">
            <h2 class="text-xl md:text-2xl font-semibold text-purple-800">
              Your Canvas,<br />Your Masterpiece.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Location advantage with map -->
    <section class="bg-white py-12 px-4" id="location">
      <div class="flex justify-around items-center flex-col px-10">
        <h2
          class="text-2xl md:text-3xl font-semibold text-center text-purple-800 mb-10"
        >
          Location advantage with map
        </h2>

        <div class="flex flex-col lg:flex-row items-center gap-10">
          <!-- Map Image -->
          <div class="w-full lg:w-2/3">
            <img
              src="/public/map.png"
              alt="Location Map"
              class="rounded-lg w-full object-contain"
            />
          </div>
          <div>
            <img
              src="/public/butterfly1.gif"
              alt="image"
              class="w-[130px] h-[130px]"
            />
            <img
              src="/public/butterfly2.gif"
              alt="image"
              class="w-[130px] h-[130px]"
            />
          </div>

          <!-- Description and List -->
          <div class="w-full lg:w-1/3 space-y-4">
            <h3 class="text-3xl font-semibold text-purple-800">
              Close to All, Far from Ordinary
            </h3>
            <p class="text-gray-700 text-sm">
              Located in the vibrant neighborhood of Madambakkam, ATH Meadows
              offers the best of both worlds. With easy access to major
              highways, schools, hospitals, and shopping centers, everything you
              need is just a short drive away. Enjoy the calm of a
              well-connected community while staying close to Chennai’s bustling
              energy.
            </p>

            <ul
              class="list-disc list-inside text-sm text-blue-800 space-y-1 pt-2"
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
      style="background-image: url('/banner.png')"
    >
      <div class="bg-black/40 absolute inset-0 z-0"></div>

      <div
        class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8"
      >
        <!-- Left Content -->
        <div class="lg:w-1/2 text-white space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold leading-tight">
            19 years of experience<br />
            in creating exceptional living spaces
          </h2>
          <p class="text-sm md:text-base text-gray-200">
            Asset Tree Homes consistently delivers superior quality homes,
            creating lasting legacies that stand the test of time.
          </p>

          <!-- Animated Counters -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center bg-white/90 text-purple-900 p-4 rounded-lg"
          >
            <div>
              <p class="text-xl font-bold">{{ years }}+</p>
              <p class="text-sm">Years of Excellence</p>
            </div>
            <div>
              <p class="text-xl font-bold">{{ projects }}+</p>
              <p class="text-sm">Completed Projects</p>
            </div>
            <div>
              <p class="text-xl font-bold">{{ homes }}+</p>
              <p class="text-sm">Happy Homes</p>
            </div>
            <div>
              <p class="text-xl font-bold">{{ staff }}+</p>
              <p class="text-sm">Experienced Personnel</p>
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <div
          class="w-full md:w-1/3 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 text-black"
        >
          <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Get in Touch
          </h2>
          <form class="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Message / Inquiry"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <section id="footer" class="bg-[#E92A7B] text-white py-8 px-4">
      <Footer />
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const years = ref(0);
const projects = ref(0);
const homes = ref(0);
const staff = ref(0);

const animateCounter = (target, refVar, speed = 50) => {
  let count = 0;
  const step = Math.ceil(target / 60);

  const update = () => {
    count += step;
    if (count >= target) {
      refVar.value = target;
    } else {
      refVar.value = count;
      requestAnimationFrame(update);
    }
  };

  update();
};
onMounted(() => {
  animateCounter(20, years);
  animateCounter(100, projects);
  animateCounter(1000, homes);
  animateCounter(150, staff);
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
