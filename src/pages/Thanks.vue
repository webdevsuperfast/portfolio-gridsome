<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <h2 class="mb-2">Thank you for your submission!</h2>
        <p class="lead">We'll be geing back to you, shortly.</p>
        <b-button variant="outline-primary" to="/">Back to Home</b-button>
      </div>
    </Main>
  </Layout>
</template>

<script>
import Main from "@/layouts/Main";

export default {
  metaInfo: {
    title: "Thank You"
  },
  data() {
    return {
      pageTitle: "Thank You"
    }
  },
  components: {
    Main
  }
}
</script>