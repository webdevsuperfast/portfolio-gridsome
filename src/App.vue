<template>
  <div class="site-container" id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  components: {
    Navigation
  }
}
</script>