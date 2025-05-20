<template>
  <div class="overflow-hidden">
    <!-- header section -->
    <section id="header">
      <Header />
    </section>
    <!-- hero section -->

    <section id="hero" class="relative min-h-screen overflow-hidden mt-14">
      <Swiper
        :modules="[Autoplay]"
        :autoplay="{ delay: 2200, disableOnInteraction: false }"
        :loop="true"
        class="absolute inset-0 z-0 w-full h-full"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" class="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      <div class="absolute inset-0 bg-transparent z-10"></div>

      <div
        class="relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:px-10"
      >
        <div
          class="lg:-top-[520px] lg:flex w-full lg:absolute lg:px-20 md:-top-[400px] md:mt-2 md:absolute md:flex xl:-top-[720px] md:px-4 2xl:-top-[900px]"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            class="w-full md:text-left mt-10 md:mt-0 lg:absolute lg:left-0 lg:w-[30%] lg:h-[28.6%] lg:flex lg:p-2"
          >
            <div
              class="flex flex-col gap-4 w-full md:w-[50%] lg:w-[90%] lg:items-start lg:justify-start items-start justify-start px-4 lg:px-0"
            >
              <h2
                class="text-[#3E2D7E] text-lg md:text-sm lg:text-md xl:text-xl 2xl:text-2xl font-semibold"
              >
                {{ slides[currentIndex].title }}
              </h2>
              <h2
                class="text-black text-md lg:text-md md:text-sm xl:text-xl 2xl:text-2xl font-semibold"
              >
                {{ slides[currentIndex].subtitle }}
              </h2>
            </div>
          </div>

          <div
            @submit.prevent="handleSubmit"
            class="w-full lg:w-[35%] md:w-[30%] min-w-[250px] max-h-[280px] max-w-[400px] ml-auto md:mb-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              class="w-full bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-3 lg:p-8"
            >
              <h2
                class="text-2xl md:text-2xl font-semibold mb-6 text-center text-[#3E2D7E]"
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
                <select
                  name="villa"
                  id="land"
                  placeholder="Select Preference"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                >
                  <option value="2bhk">2 BHK - ₹ 70L Onwards</option>
                  <option value="3bhk">3 BHK - ₹ 85L Onwards</option>
                </select>
                <div
                  class="g-recaptcha my-4"
                  data-sitekey="6LeT-0ErAAAAAAP8nn2DDYmNhv4vLTkvCIqBQAyQ"
                ></div>

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
      </div>
    </section>

    <!-- about section -->

    <section
      id="about"
      class="flex flex-col-reverse md:flex-col items-center px-10 py-10 gap-10 md:-mt-[420px] lg:-mt-[270px] lg:flex-row xl:-mt-[120px] -mt-20 2xl:mt-10 2xl:px-20"
    >
      <!-- Text Content Section -->
      <div
        class="w-full flex flex-col gap-4"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h2 class="font-semibold text-2xl md:text-3xl text-[#3E2D7E]">
          Your Quiet Corner in a Vibrant City
        </h2>
        <p class="text-gray-600 text-base md:text-lg">
          2 & 3 BHK Premium Apartments in Madambakkam Surrounded by Nature.
        </p>
        <p class="text-gray-600 text-base md:text-lg">
          ATH Meadows is a premium residential apartment project nestled in the
          calm and green surroundings of Madambakkam, Chennai. Designed for
          those who value a blend of nature and modern comfort, these 2 & 3 BHK
          apartments offer elegant architecture, lush landscapes, and
          lifestyle-enhancing amenities. With easy access to key destinations
          like Tambaram and Medavakkam, ATH Meadows brings together convenience,
          serenity, and contemporary urban living in one harmonious space.
        </p>
      </div>

      <!-- Image Section -->
      <div class="w-full" data-aos="fade-right" data-aos-delay="200">
        <img
          src="/about.jpg"
          alt="ATH Meadows apartments"
          class="w-full h-auto object-cover object-center rounded-xl shadow-md"
        />
      </div>
    </section>

    <!-- Project Amenities -->
    <section id="amenities" class="overflow-hidden">
      <div
        class="container mx-auto px-4"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div
          class="flex flex-col-reverse md:flex xl:flex-row-reverse lg:gap-10 items-center justify-between gap-10 2xl:gap-40"
        >
          <!-- Text Section -->
          <div
            class="text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 class="text-2xl md:text-xl font-semibold text-[#3E2D7E]">
              Your Canvas,<br />Your Masterpiece.
            </h2>
          </div>

          <!-- Divider for md+ screens -->
          <div class="hidden xl:block w-[2px] bg-green-600 h-32"></div>

          <!-- Amenities Grid -->
          <div
            class="w-full md:w-3/4 lg:w-full xl:w-full flex flex-wrap justify-center xl:gap-10 lg:gap-10"
          >
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex flex-col items-center text-center w-32 md:w-40"
            >
              <img
                :src="feature.image"
                :alt="feature.title"
                class="h-28 md:h-40 mb-4 object-contain"
              />
              <p
                class="text-sm md:text-md text-[#EE6FA8] leading-snug"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {{ feature.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="bg-white py-12 px-4" id="location">
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
    </section> -->
    <section class="py-10 px-4 md:px-10 2xl:px-20 2xl:mt-4">
      <h2
        class="text-3xl font-semibold text-[#3E2D7E] text-center mb-6"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        Amenities
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 px-10 md:px-0"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          v-for="(amenity, index) in amenities"
          :key="index"
          class="flex items-center gap-4 border border-none rounded-4xl shadow-md hover:shadow-lg transition duration-3000 ease-in-out"
        >
          <img
            :src="amenity.image"
            :alt="amenity.title"
            class="w-[60px] h-[60px]"
          />
          <p class="font-semibold text-md">
            {{ amenity.title }}
          </p>
        </div>
      </div>
    </section>
    <!-- Location advantage with map -->

    <section class="lg:px-20 px-10 py-10 2xl:px-20 2xl:mt-4">
      <div
        class="flex flex-col md:flex-row justify-between items-center xl:gap-10 lg:gap-15 md:gap-10 gap-10 2xl:px-40 2xl:gap-0"
      >
        <!-- Text Block -->
        <div
          class="w-full md:w-1/2 xl:w-1/3 space-y-4 2xl:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2
            class="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[#3E2D7E]"
          >
            The Peace You Seek Is Just a Step Away
          </h2>
          <p class="text-lg text-gray-700">
            Tucked in the heart of Madambakkam, ATH Meadows offers a life woven
            with calm, comfort and a quiet connection to nature. With
            thoughtfully crafted spaces and a community built for serenity, this
            is more than just a home. It is a gentle return to everything you
            love.
          </p>
          <h4 class="text-xl font-semibold text-[#3E2D7E]">
            Register now to experience it first-hand.
          </h4>
          <p class="text-lg text-gray-700">
            A peaceful way of living is waiting. Let it begin with you.
          </p>
        </div>

        <!-- Image Block -->
        <div
          class="w-full md:w-2/4 2xl:w-1/3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            src="/map.png"
            alt="map"
            class="w-full h-auto rounded-xl shadow-md object-cover object-center"
          />
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
          <div class="">
            <h2 class="text-xl md:text-4xl font-bold leading-tight">
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
          class="w-full md:w-1/2 rounded-2xl shadow-2xl text-black"
          data-aos="flip-right"
          data-aos-delay="200"
        >
          <div
            class="w-full lg:w-[70%] md:min-w-[20px] max-w-[400px] ml-auto md:mt-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              class="w-full bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-3 lg:p-8"
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
                <select
                  name="villa"
                  id="land"
                  placeholder="Select Preference"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                >
                  <option value="2bhk">2 BHK - ₹ 70L Onwards</option>
                  <option value="3bhk">3 BHK - ₹ 85L Onwards</option>
                </select>
                <div
                  class="g-recaptcha my-4"
                  data-sitekey="6LeT-0ErAAAAAAP8nn2DDYmNhv4vLTkvCIqBQAyQ"
                ></div>

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
      </div>
    </section>
    <!-- Footer Section -->
    <section id="footer">
      <Footer />
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
const showModal = ref(false);
const modules = [Autoplay];
const amenities = [
  { image: "/image1.png", title: "Yoga Hut" },
  { image: "/image2.png", title: "Indoor Games" },
  { image: "/image3.png", title: "Association Room" },
  { image: "/image4.png", title: "Gym" },
  { image: "/image5.png", title: "Guest Bedroom" },
  { image: "/image6.png", title: "Rooftop Children's Play Area" },
  { image: "/image7.png", title: "Video Door Phone" },
  { image: "/image8.png", title: "Covered Car Parking" },
  { image: "/image9.png", title: "Potable Water" },
  { image: "/image10.png", title: "Power Backup Genset" },
  { image: "/image11.png", title: "Private Terrace" },
  { image: "/image12.png", title: "Closed Circuit Television (CCTV)" },
  { image: "/image13.png", title: "Hygiene Bay" },
  { image: "/image18.png", title: "Lift" },
  { image: "/image14.png", title: "100% Vastu Compliance" },
  { image: "/image15.png", title: "Common Area System Plants" },
  { image: "/image16.png", title: "EV Charging Point" },
  { image: "/image17.png", title: "Terrace Sitout" },
];
const slides = [
  {
    image: "/banner.png",
    title: "Where Petals Bloom & Life Unfolds",
    subtitle: "Step into a serene world crafted for graceful living.",
  },
  {
    image: "/banner2.jpeg",
    title: "Crafted Spaces, Thoughtful Touches",
    subtitle: "Modern homes embraced by gardens, peace, and poetry.",
  },
  {
    image: "/banner3.jpeg",
    title: "A Bloom of Comforts, A Flutter of Joy",
    subtitle:
      "Curated amenities that bring wellness, wonder and everyday ease.",
  },
];

const currentIndex = ref(0);

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex;
};

const years = ref(0);
const projects = ref(0);
const homes = ref(0);
const staff = ref(0);
function animateCount(refVar, target, duration = 2000) {
  const start = 0;
  const range = target - start;
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // from 0 to 1
    refVar.value = Math.floor(progress * range + start);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      refVar.value = target; // ensure it ends cleanly
    }
  };
  requestAnimationFrame(step);
}
onMounted(() => {
  AOS.init();
  animateCount(years, 20, 800); // 800ms duration
  animateCount(projects, 100, 800);
  animateCount(homes, 1000, 800);
  animateCount(staff, 150, 800);
});
async function handleSubmit() {
  const response = grecaptcha.getResponse();

  if (!response) {
    alert("Please verify you're not a robot.");
    return;
  }

  const res = await fetch("/api/recaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: response }),
  });

  const data = await res.json();
  if (data.success) {
    // Proceed with form submission logic
    alert("Verified! Form submitted.");
  } else {
    alert("reCAPTCHA failed.");
  }
}

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
<!-- <style lang="postcss" scoped>
#type h2 {
  width: 20ch;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(30) infinite alternate;
}
.form-input {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E];
}

@keyframes typing {
  from {
    width: 0ch;
  }
  to {
    width: 30ch;
  }
}
</style> -->
