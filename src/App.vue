<template>
  <div id="app">
    <Navigation />
    <transition enter-active-class="animated fadeLeft" leave-active-class="animated fadeRight">
      <router-view appear />
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