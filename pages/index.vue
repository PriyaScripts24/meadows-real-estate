<template>
  <div>
    <!-- header section -->
    <section>
      <Header />
    </section>
    <!-- hero section -->
    <section
      class="relative min-h-screen bg-cover bg-center flex items-center px-4 py-12"
      :style="{ backgroundImage: 'url(/banner.png)' }"
    >
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
  </div>
</template>
