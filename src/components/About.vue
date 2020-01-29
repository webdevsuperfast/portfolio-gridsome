<template>
  <div class="w-100">
    <b-nav align="end" class="d-none d-sm-flex">
      <b-nav-item to="/about/experience" exact exact-active-class="active">Experience</b-nav-item>
      <b-nav-item to="/about/skills" exact exact-active-class="active">Skills</b-nav-item>
      <b-nav-item to="/about/tools" exact exact-active-class="active">Tools</b-nav-item>
    </b-nav>

    <b-dropdown
      text="Navigate"
      class="d-sm-none"
      menu-class="w-100"
      size="sm"
      variant="primary"
      block
      split
      split-variant="outline-primary"
    >
      <b-dropdown-item to="/about/experience">Experience</b-dropdown-item>
      <b-dropdown-item to="/about/abilities">Abilities</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {};
</script>