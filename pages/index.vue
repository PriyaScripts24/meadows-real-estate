<template>
  <div class="overflow-hidden">
    <!-- header section -->
    <section id="header">
      <Header />
    </section>
    <!-- hero section -->
    <section id="hero" class="relative w-full overflow-hidden mt-14">
      <div class="hidden lg:block w-full h-full">
        <div class="absolute inset-0 w-full z-0">
          <Swiper
            :modules="[Autoplay]"
            :autoplay="{ delay: 4200, disableOnInteraction: false }"
            :loop="true"
            class="w-full h-full"
          >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
              <img
                :src="slide.image"
                class="w-full h-full object-fill"
                data-aos-delay="2000"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
              />
            </SwiperSlide>
          </Swiper>
          <div class="absolute inset-0 z-10"></div>
        </div>

        <div
          class="relative z-20 flex items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen"
        >
          <!-- <div
            class="w-full lg:w-3/4 text-white text-center lg:text-left mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="2000"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
          >
            <h1 class="text-3xl md:text-4xl font-bold mb-4 text-white">
              {{ slides[currentIndex].title }}
            </h1>
            <p class="text-lg md:text-xl font-medium">
              {{ slides[currentIndex].subtitle }}
            </p>
          </div> -->

          <div
            class="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 pr-8"
            data-aos="fade-left"
            data-aos-delay="2000"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
          >
            <div
              class="w-full bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-xl p-6 ml-auto max-w-[400px]"
            >
              <h2
                class="text-2xl font-semibold mb-6 text-center text-[#3E2D7E]"
              >
                Register now
              </h2>
              <form
                @submit.prevent="handleSubmit"
                class="space-y-4 flex flex-col items-center"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                />
                <select
                  name="villa"
                  class="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2D7E]"
                >
                  <option value="2bhk">2 BHK - ₹ 70L Onwards</option>
                  <option value="3bhk">3 BHK - ₹ 85L Onwards</option>
                </select>
                <div class="w-[400px] overflow-hidden">
                  <div
                    class="g-recaptcha mt-4 w-full max-w-xs mx-auto"
                    data-sitekey="YOUR_CORRECT_SITE_KEY_HERE"
                  ></div>
                </div>

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

      <div class="block lg:hidden">
        <div class="w-full relative h-[60vh] sm:h-[70vh]">
          <img
            :src="
              slides[currentIndex].mobileImage || slides[currentIndex].image
            "
            class="w-full object-fill"
          />
          <div class="absolute inset-0 z-10"></div>
        </div>

        <div class="w-full text-center px-4 py-8 text-white">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            {{ slides[currentIndex].title }}
          </h1>
          <p class="text-lg md:text-xl font-medium">
            {{ slides[currentIndex].subtitle }}
          </p>
        </div>

        <div class="w-full px-4 sm:px-6 lg:py-8">
          <div
            class="lg:w-full md:w-[400px] -mt-114 md:ml-[160px] lg:ml-0 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-3 lg:p-8 md:-mt-84"
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
    </section>
    <!-- about section -->
    <section
      id="about"
      class="flex flex-col-reverse md:flex-col items-center px-4 py-8 gap-8 md:px-10 md:py-10 lg:flex-row 2xl:px-20 bg-[#E5E1ED]"
    >
      <div
        class="w-full lg:w-1/2 flex flex-col gap-4"
        data-aos="fade-right"
        data-aos-delay="1500"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <h2 class="font-semibold text-2xl md:text-2xl text-[#3E2D7E]">
          Your Quiet Corner in a Vibrant City
        </h2>
        <p class="text-gray-600 text-base md:text-md leading-relaxed">
          2 & 3 BHK Premium Apartments in Madambakkam Surrounded by Nature.
        </p>
        <p class="text-gray-600 text-base md:text-md leading-relaxed">
          ATH Meadows is a premium residential apartment project nestled in the
          calm and green surroundings of Madambakkam, Chennai. Designed for
          those who value a blend of nature and modern comfort, these 2 & 3 BHK
          apartments offer elegant architecture, lush landscapes, and
          lifestyle-enhancing amenities. With easy access to key destinations
          like Tambaram and Medavakkam, ATH Meadows brings together convenience,
          serenity, and contemporary urban living in one harmonious space.
        </p>
      </div>

      <div
        class="w-full lg:w-1/2"
        data-aos="fade-left"
        data-aos-delay="1500"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
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
        data-aos-delay="2000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <div
          class="flex flex-col md:flex xl:flex-row lg:gap-10 items-center justify-between gap-10 2xl:gap-40 mt-6"
        >
          <!-- Text Section -->
          <div
            class="text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="2000"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
          >
            <h2
              class="text-2xl md:text-lg lg:text-lg font-semibold text-[#3E2D7E]"
            >
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
                class="h-28 md:h-30 lg:h-40 mb-4 object-contain"
              />
              <p
                class="text-sm md:text-[10px] lg:text-md text-[#EE6FA8] leading-snug"
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
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
        class="text-2xl font-semibold text-[#3E2D7E] text-center mb-6"
        data-aos="fade-left"
        data-aos-delay="2000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        Amenities
      </h2>

      <div
        class="flex flex-wrap gap-6 mt-4 px-10 md:px-10 xl:px-32 items-center justify-center"
      >
        <div
          v-for="(amenity, index) in amenities"
          :key="index"
          data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          class="flex flex-col items-center gap-2 px-4 py-4 w-[200px] h-[150px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
        >
          <img
            :src="amenity.image"
            :alt="amenity.title"
            class="w-[60px] h-[60px]"
          />

          <!-- Always visible title -->
          <p class="font-semibold text-sm text-center">
            {{ amenity.title }}
          </p>
        </div>
      </div>
    </section>
    <!-- Location advantage with map -->

    <section
      class="lg:px-20 px-10 py-10 2xl:px-20 2xl:mt-4 bg-[#E5E1ED]"
      id="location"
    >
      <div
        class="flex flex-col md:flex-col justify-between items-center xl:gap-1 lg:gap-15 md:gap-10 gap-10 2xl:px-40 2xl:gap-0 lg:flex-row"
      >
        <!-- Text Block -->
        <div
          class="w-full xl:w-1/3 space-y-4 2xl:w-1/2"
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="40"
          data-aos-easing="ease-in-out"
        >
          <h2
            class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#3E2D7E]"
          >
            The Peace You Seek Is Just a Step Away
          </h2>
          <p class="text-md text-gray-700">
            Tucked in the heart of Madambakkam, ATH Meadows offers a life woven
            with calm, comfort and a quiet connection to nature. With
            thoughtfully crafted spaces and a community built for serenity, this
            is more than just a home. It is a gentle return to everything you
            love.
          </p>
        </div>

        <!-- Image Block -->
        <div
          class="w-[350px] md:w-[600px] lg:w-full xl:w-[500px] 2xl:w-1/2 bg-white rounded-2xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="40"
          data-aos-easing="ease-in-out"
        >
          <img
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            src="/map.png"
            alt="map"
            class="w-full h-auto rounded-xl shadow-md object-cover object-center p-5"
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
        class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-1"
      >
        <div
          class="lg:w-1/2 text-white space-y-6 px-4"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <h4 class="md:text-5xl text-2xl font-semibold text-white">
            Register now to experience it first-hand.
          </h4>
          <p class="text-md text-gray-100">
            A peaceful way of living is waiting. Let it begin with you.
          </p>
        </div>

        <div
          class="w-full md:w-1/2 rounded-2xl shadow-2xl text-black"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div
            class="w-full lg:w-[70%] md:min-w-[20px] max-w-[400px] ml-auto md:mt-5"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
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
    image: "/banner4.png",
  },
  {
    image: "/banner5.png",
  },
  {
    image: "/banner6.png",
  },
];

const mobileImages = ["/banner1.png", "/banners2.png", "/banner3.png"];

const currentIndex = ref(0);

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex;
};

const years = ref(0);
const projects = ref(0);
const homes = ref(0);
const staff = ref(0);
function animateCount(refVar, target, duration = 300000) {
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
  AOS.init({
    once: true, // animate only once
    duration: 600, // default duration, can be overridden in data-aos-duration
  });
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
<style scoped>
@media (max-width: 480px) {
  .g-recaptcha iframe {
    transform: scale(0.8);
    transform-origin: 0 0;
    width: 304px; /* keep original width for iframe */
    height: 78px; /* keep original height */
  }
}
</style>
