<template>
  <section :id="`section-${sectionID}`" :class="['resume-section', 'd-flex', 'align-items-center', `section-${sectionClass}`]">
    <b-container fluid="isFluid ? true : false">
      <slot />
    </b-container>
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