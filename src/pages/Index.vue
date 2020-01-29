<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <!-- <div class="w-100">
        <div class="subheading text-uppercase text-secondary">I'm Rotsen Mark</div>
        <transition name="fade">
          <h1 class="headlines">
            Web & WordPress Developer
          </h1>
        </transition>
        <b-button variant="outline-success" to="/contact">Hire Me</b-button>
      </div> -->
    </Main>
  </Layout>
</template>

<script>
import Aside from "@/layouts/Aside";
import Main from "@/layouts/Main";
import Sidebar from "@/components/Sidebar";

export default {
  data() {
    return {
      pageTitle: "Home",
      index: 0,
      rotated: false,
      headlines: [
        'Web Developer',
        'Frontend Developer',
        'Freelancer',
        'Logician'
      ]
    }
  },
  metaInfo: {
    title: 'Rotsen Mark Acob',
    titleTemplate: '%s - Web Developer',
    bodyAttrs: {
      class: 'home'
    }
  },
  components: {
    Aside,
    Main,
    Sidebar
  },
  methods: {
    rotateText: function() {
      setTimeout(() => {
        this.index += 1;
        if ( this.index >= this.headlines.length) {
          this.index = 0;
        }
        this.rotateText();
      }, 3000);
    }
  },
  mounted() {
    this.rotateText();
    this.rotated = true;
  }
}
</script>