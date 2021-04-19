<template>
  <b-navbar-brand to="#app">
    <span class="d-block d-lg-none">{{ $static.metadata.siteName }}</span>
    <span class="d-none d-lg-block">
      <b-img-lazy class="img-fluid img-profile rounded-circle mx-auto mb-2" src="~/images/logo.svg" :alt="$static.metadata.siteName" />
    </span>
  </b-navbar-brand>
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
  
};
</script>