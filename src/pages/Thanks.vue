<template>
  <Layout>
    <div class="w-100">
      <h2 class="mb-2">Thank you for contacting me!</h2>
      <p class="lead">I'll be getting back to you, shortly.</p>
      <b-button variant="outline-primary" to="/">Return to Homepage</b-button>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Thank You",
  },
  data() {
    return {
      pageTitle: "Thank You",
    };
  },
  components: {},
};
</script>
