<template>
  <div class="sidebar d-flex align-items-center text-center m-auto">
    <div class="w-100">
      <div class="logo m-auto" v-if="title == 'Home'">
        <g-image class="img-fluid mb-0 mb-4 mb-sm-0" src="~/images/logo.svg" :alt="$static.metadata.siteName" />
      </div>
      <h1 class="page-title" v-else>{{ title }}</h1>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    title: String
  }
};
</script>