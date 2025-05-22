<template>
  <footer class="bg-[#3E2D7E] text-white py-10 p-4">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-col flex-wrap justify-between gap-8 lg:flex-row"
    >
      <!-- Experience & Counter -->
      <div
        class="flex-1 space-y-6 px-4"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <h2 class="text-xl md:text-xl font-bold leading-tight">
          19+ years of experience <br />in creating exceptional living spaces
        </h2>
        <p class="text-sm text-gray-300">
          Asset Tree Homes consistently delivers superior quality homes,
          creating lasting legacies that stand the test of time.
        </p>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-white/90 text-[#3E2D7E] p-6 rounded-lg"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div class="text-center">
            <p class="text-xl font-bold">{{ animatedYears }}+</p>
            <p class="text-[10px]">Years of Excellence</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold">{{ animatedProjects }}+</p>
            <p class="text-[10px]">Completed Projects</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold">{{ animatedHomes }}+</p>
            <p class="text-[10px]">Happy Homes</p>
          </div>
          <div class="text-center">
            <p class="text-xl font-bold">{{ animatedStaff }}+</p>
            <p class="text-[10px]">Experienced Personnel</p>
          </div>
        </div>
      </div>

      <!-- Logo & Address -->
      <div
        class="flex-1 space-y-4 px-4"
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <img
          src="/public/assettreehomes.png"
          alt="Asset Tree Homes"
          class="w-60 py-1"
        />
        <p class="text-sm">
          NO-20, 2nd Floor, Zion Complex,<br />
          Pammal Main Road, Pammal, Chennai - 600075.
        </p>
        <p class="text-[10px]">© 2025 Asset Tree Homes</p>
      </div>

      <!-- Quick Links -->
      <div
        class="flex-1 px-4"
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <h3 class="text-md font-semibold mb-4 text-[#E5E1ED]">Quick Links</h3>
        <ul class="space-y-2 text-[12px]">
          <li><a href="#" class="hover:underline">2&3 BHK Apartments</a></li>
          <li>
            <a href="#" class="hover:underline">Apartments in Tambaram</a>
          </li>
          <li>
            <a href="#" class="hover:underline"
              >Apartments for Sale in Madambakkam</a
            >
          </li>
          <li><a href="#" class="hover:underline">Location Advantages</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const years = 19;
const projects = 40;
const homes = 400;
const staff = 80;

const animatedYears = ref(0);
const animatedProjects = ref(0);
const animatedHomes = ref(0);
const animatedStaff = ref(0);

function animateCount(targetRef, targetValue, duration = 2000) {
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    targetRef.value = Math.floor(progress * targetValue);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      targetRef.value = targetValue;
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  animateCount(animatedYears, years, 2000);
  animateCount(animatedProjects, projects, 2000);
  animateCount(animatedHomes, homes, 2000);
  animateCount(animatedStaff, staff, 2000);
});
</script>
