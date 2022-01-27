<template>
  <div class="site-container" id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>