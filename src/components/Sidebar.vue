<template>
  <div class="sidebar d-flex align-items-center text-center m-auto">
    <div class="w-100">
      <div class="logo m-auto" v-if="title == 'Home'">
        <g-image class="img-fluid mb-0 mb-4 mb-sm-0" src="~/images/logo.svg" alt="Rotsen Mark Acob" />
        <!-- <div class="position text-light text-uppercase headlines">
          <span v-html="headlines[index]"></span>
        </div> -->
      </div>
      <h1 class="page-title" v-else>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  components: {},
  data() {
    return {
      index: 0,
      rotated: false,
      headlines: [
        'Web Developer',
        'WordPress Developer',
        'Front End Developer',
        'Freelancer'
      ]
    }
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
};
</script>