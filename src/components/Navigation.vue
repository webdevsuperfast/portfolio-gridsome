<template>
  <b-navbar
    toggleable
    type="light"
    variant="faded"
    fixed="top"
    :class="`${visible == true ? 'bg-primary' : ''}`"
  >
    <b-navbar-brand to="/">
      <g-image src="~/images/logo.svg" width="40" height="40" alt="MyDevHouse" class="d-lg-none" />
    </b-navbar-brand>
    <b-button variant="outline-light" size="md" class="mr-4 ml-auto" to="#">Resume</b-button>
    <b-button
      :class="['hamburger navbar-toggle', 'x', `${ visible ? 'active' : '' }`]"
      id="hamburger-1"
      data-toggle="collapse"
      data-target="navbarSupportedContent"
      @click="visible = !visible"
    >
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </b-button>
    <b-collapse id="navbarSupportedContent" is-nav v-model="visible">
      <b-navbar-nav v-b-scrollspy>
        <b-nav-item
          v-for="(navigation, index) in navigationList"
          :key="index"
          :to="navigation.path"
          exact
          exact-active-class="active"
          @click="visible = false"
        >{{ navigation.name }}</b-nav-item>
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