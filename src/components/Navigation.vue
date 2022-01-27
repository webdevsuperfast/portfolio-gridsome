<template>
  <header class="site-header flex-none z-50 text-sm leading-6 font-medium text-gray-100 pt-4 lg:pt-24 fixed w-full transition-all">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center flex-nowrap">
        <g-link class="flex-none text-white" to="/">
          <svg class="fill-gray-100 hover:fill-rose-900 transition-colors" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.444 16.667A5.556 5.556 0 0 0 50 11.11V5.556A5.556 5.556 0 0 0 44.444 0H0V44.444A5.556 5.556 0 0 0 5.556 50h5.555a5.556 5.556 0 0 0 5.556-5.556V22.222a5.556 5.556 0 0 1 5.555-5.555h22.222ZM50 38.889a5.556 5.556 0 0 0-5.556-5.556H38.89a5.556 5.556 0 0 0-5.556 5.556v5.555A5.556 5.556 0 0 0 38.89 50H50V38.889Z" /></svg>
        </g-link>
        <div 
          class="grow items-center justify-end sm:mt-0 sm:w-auto sm:ml-auto flex transform transition-all duration-300 origin-bottom lg:origin-right"
        >
          <div
            :class="{ 'hidden': !navOpen, 'block': navOpen }"
            class="navigation flex flex-col fixed text-center top-8 sm:space-x-6 uppercase bg-gray-900 bg-opacity-75 rounded-xl sm:bg-none sm:bg-opacity-0 sm:static sm:flex-row w-100">
            
              <g-link
                exact
                exact-active-class="text-rose-900"
                class="uppercase block px-6 py-3 sm:px-0 sm:py-0 text-md text-2xl hover:text-rose-900 transition-colors" 
                to="/">About</g-link>
              <g-link
                exact
                exact-active-class="text-rose-900"
                class="uppercase block px-6 py-3 sm:px-0 sm:py-0 text-md text-2xl hover:text-rose-900 transition-colors" 
                to="/portfolio">Portfolio</g-link>
              <g-link
                exact
                exact-active-class="text-rose-900"
                class="uppercase block px-6 py-3 sm:px-0 sm:py-0 text-md text-2xl hover:text-rose-900 transition-colors" 
                to="/testimonials">Testimonials</g-link>
              <g-link
                exact
                exact-active-class="text-rose-900"
                class="uppercase block px-6 py-3 sm:px-0 sm:py-0 text-md text-2xl hover:text-rose-900 transition-colors" 
                to="/contact">Contact</g-link>
          </div>
          <button
            @click="navOpen = !navOpen"
            class="group flex items-center space-x-4 focus:outline-none ml-4 uppercase">
            <div class="w-10 h-10 flex items-center justify-center relative">
              <span 
                :class="navOpen ? 'translate-y-0 rotate-45' : '-translate-y-3'" 
                class="group-hover:bg-rose-900 transform transition w-full rounded h-1 bg-current absolute"
              ></span>
              <span 
                :class="navOpen ? 'opacity-0 translate-x-3 w-10' : 'opacity-100'" 
                class="group-hover:bg-rose-900 transform transition w-4/5 rounded h-1 bg-current absolute right-0"
              ></span>
              <span 
                :class="navOpen ? 'translate-y-0 -rotate-45 w-10' : 'translate-y-3 w-3/5'" 
                class="group-hover:bg-rose-900 transform transition rounded h-1 bg-current absolute right-0"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </header><!-- End Header -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navOpen: false,
      visible: false,
      scrollPosition: null
    };
  },
  computed: {
    navigationList: function() {
      return this.$router.options.routes.filter(function(route) {
        return route.name != "*" && route.name != "404";
      });
    }
  },
  methods: {
    updateScroll: function() {
      this.scrollPosition = window.scrollY;
      const navHeader = document.querySelector(".site-header");
      const navClasses = ['bg-gray-900', 'bg-opacity-75', 'py-4', 'lg:pt-4'];
      
      if (window.scrollY > 100) {
        navHeader.classList.add(...navClasses);
        navHeader.classList.add()
      } else if (window.scrollY < 100) {
        navHeader.classList.remove(...navClasses);
      }
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>