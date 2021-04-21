<template>
  <b-container class="p-0" fluid>
    <slot />
  </b-container>
</template>

<script>

export default {
  props: [
    'sidebar',
    'title'
  ]
}
</script>