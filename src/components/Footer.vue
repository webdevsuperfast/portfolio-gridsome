<template>
  <footer class="pb-4 lg:pb-24 w-full fixed bottom-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <button
          @click="socialNav = ! socialNav" 
          class="p-5 bg-rose-900 rounded-xl rounded-br-none absolute right-0 bottom-0 hover:bg-rose-700 active:bg-rose-700 focus:bg-rose-700">
          <div class="w-5 h-5 flex items-center justify-center relative">
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
          :class="{ 'block': socialNav, 'hidden': ! socialNav }" 
          class="absolute right-0 bottom-20 rounded-xl bg-rose-900 overflow-hidden"
        >
          <div class="social-navigation">
            <a class="text-white uppercase block text-center hover:text-gray-200 hover:bg-rose-700 transition-all py-3 px-5 lg:py-5 lg:px-10 lg:text-xl" href="https://github.com/webdevsuperfast" target="_blank">
              GitHub
            </a>
            <a class="text-white uppercase block text-center hover:text-gray-200 hover:bg-rose-700 transition-all py-3 px-5 lg:py-5 lg:px-10 lg:text-xl" href="" target="_blank">
              LinkedIn
            </a>
            <a class="text-white uppercase block text-center hover:text-gray-200 hover:bg-rose-700 transition-all py-3 px-5 lg:py-5 lg:px-10 lg:text-xl" href="" target="_blank">
              WordPress
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialNav: false
    }
  } 
}
</script>