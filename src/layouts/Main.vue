<template>
  <section :id="`section-${sectionID}`" :class="['resume-section', 'd-flex', 'align-items-center', `section-${sectionClass}`]">
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