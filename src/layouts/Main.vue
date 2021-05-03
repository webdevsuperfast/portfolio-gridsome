<template>
  <section :id="sectionID" :class="['resume-section', 'p-3', 'p-lg-5', 'd-flex', 'align-items-center', sectionClass]">
    <slot />
  </section>
</template>
<script>
export default {
  props: {
    sectionClass: String,
    sectionID: String
  }
}
</script>