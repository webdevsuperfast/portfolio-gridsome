<template>
  <b-navbar
    toggleable="sm"
    type="dark"
    variant="primary"
  >
    <b-navbar-brand to="/">
      <g-image src="~/images/logo.svg" width="75" :alt="$static.metadata.siteName" />
    </b-navbar-brand>
    <!-- <b-button variant="outline-light" size="md" class="ml-auto" href="https://drive.google.com/file/d/1ydxEniaVfuIeyUb7oPKUnLuv1jUGUEpT/view?usp=sharing" target="_blank">Resume</b-button> -->
    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
    <b-collapse id="navbarSupportedContent" is-nav>
      <b-navbar-nav v-b-scrollspy class="ml-auto">
        <b-nav-item
          to="/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Home</b-nav-item>
        <b-nav-item
          to="/experience/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Experience</b-nav-item>
        <b-nav-item
          to="/abilities/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Abilities</b-nav-item>
        <b-nav-item
          to="/portfolio/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Portfolio</b-nav-item>
        <b-nav-item
          to="/testimonials/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Testimonials</b-nav-item>
        <b-nav-item
          to="/contact/"
          exact
          exact-active-class="active"
          @click="visible = false"
        >Contact</b-nav-item>
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