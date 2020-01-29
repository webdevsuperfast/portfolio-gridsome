<template>
  <b-container class="p-0" fluid>
    <section :id="`section-${sectionID}`" :class="['resume-section', 'd-flex', 'align-items-center', `section-${sectionClass}`]">
      <slot />
    </section>
  </b-container>
</template>
<script>
export default {
  props: {
    sectionClass: String,
    sectionID: String
  }
}
</script>