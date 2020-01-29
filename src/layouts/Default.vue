<template>
  <div class="site-inner">
    <div id="sideNav" class="p-0 container-fluid" v-if="sidebar">
      <Sidebar :title="title" />
    </div>
    <slot />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Sidebar
  },
  props: [
    'sidebar',
    'title'
  ]
}
</script>