<template>
  <footer class="fixed bottom-0 w-full pb-4 lg:pb-24">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="relative">
        <button
          @click="socialNav = !socialNav"
          class="absolute bottom-0 right-0 p-5 rounded-br-none bg-rose-900 rounded-xl hover:bg-rose-700 active:bg-rose-700 focus:bg-rose-700"
        >
          <div class="relative flex items-center justify-center w-5 h-5">
            <span
              :class="socialNav ? 'rotate-45' : ''"
              class="transform transition w-full h-0.5 absolute rounded bg-white"
            ></span>
            <span
              :class="socialNav ? 'rotate-45' : ''"
              class="transform transition h-full absolute w-0.5 rounded bg-white"
            ></span>
          </div>
        </button>
        <div
          :class="{ block: socialNav, hidden: !socialNav }"
          class="absolute right-0 overflow-hidden bottom-20 rounded-xl bg-rose-900"
        >
          <div class="social-navigation">
            <a
              class="block px-5 py-3 text-center text-white uppercase transition-all hover:text-gray-200 hover:bg-rose-700 lg:py-5 lg:px-10 lg:text-xl"
              href="https://github.com/webdevsuperfast"
              target="_blank"
            >
              GitHub
            </a>
            <a
              class="block px-5 py-3 text-center text-white uppercase transition-all hover:text-gray-200 hover:bg-rose-700 lg:py-5 lg:px-10 lg:text-xl"
              href="https://www.linkedin.com/in/acobrotsen"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              class="block px-5 py-3 text-center text-white uppercase transition-all hover:text-gray-200 hover:bg-rose-700 lg:py-5 lg:px-10 lg:text-xl"
              href="https://profiles.wordpress.org/frodobean"
              target="_blank"
            >
              WordPress
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialNav: false,
    };
  },
};
</script>
