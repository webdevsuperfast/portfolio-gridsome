<template>
  <b-container class="p-0" fluid>
    <slot />
  </b-container>
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