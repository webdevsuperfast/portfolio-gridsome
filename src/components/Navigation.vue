<template>
  <b-navbar toggleable="lg" type="dark" class="bg-primary fixed-top" id="sideNav">
    <b-navbar-brand to="#app">
      <span class="d-block d-lg-none">Rotsen Acob</span>
      <span class="d-none d-lg-block">
        <b-img-lazy class="img-fluid img-profile rounded-circle mx-auto mb-2" src="~/images/logo.svg" alt="" />
      </span>
    </b-navbar-brand>
    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
    <b-collapse id="navbarSupportedContent" is-nav>
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
export default {
  name: "Navigation",
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