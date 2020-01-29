<template>
  <div class="site-container" id="app">
    <Navigation />
    <transition name="fade">
      <router-view />
    </transition>
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