<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionClass="pageTitle | slugify" :sectionID="pageTitle | slugify">
      <div class="w-100">
        <h2 class="mb-2">Not Found, error 404</h2>
        <p class="lead">The page you are looking for no longer exists. Perhaps you can return back to the <g-link class="text-secondary" to="/">homepage</g-link> and see if you can find what you are looking for.</p>
      </div>
    </Main>
  </Layout>
</template>

<script>
import Main from "@/layouts/Main";

export default {
  data() {
    return {
      pageTitle: "Error"
    }
  },
  metaInfo: {
    title: 'Page not found'
  },
  components: {
    Main,
  }
}
</script>
