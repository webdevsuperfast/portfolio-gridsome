<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    class="fixed-top bg-primary"
    id="sideNav"
  >
    <b-navbar-brand to="/">
    </b-navbar-brand>
    <b-navbar-toggle target="navbarSupportedContent" />
    <b-collapse id="navbarSupportedContent" is-nav v-model="visible">
      <b-navbar-nav v-b-scrollspy>
        <b-nav-item
          v-for="(navigation, index) in navigationList"
          :key="index"
          class="js-scroll-trigger"
          :href="navigation.url"
        >{{ navigation.title }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Brand from '@/components/Brand'

export default {
  name: "Navigation",
  components: {
    Brand
  },
  data() {
    return {
      visible: false,
      scrollPosition: null,
      navigationList: [
        {
          title: "About",
          url: "#about"
        },
        {
          title: "Experience",
          url: "#experience"
        },
        {
          title: "Education",
          url: "#education"
        },
        {
          title: "Contact",
          url: "#contact"
        }
      ]
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
      const navHeader = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navHeader.classList.add("navbar-bg-onscroll");
      } else if (window.scrollY < 100) {
        navHeader.classList.remove("navbar-bg-onscroll");
        navHeader.classList.add("navbar-bg-onscroll--fade");
      }
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>