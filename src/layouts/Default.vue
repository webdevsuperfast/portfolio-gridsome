<template>
  <main class="site-content text-gray-100">
    <slot />
  </main>
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