<template>
  <Layout>
  </Layout>
</template>

<page-query>
{
  allWordPressExperience {
    edges {
      node {
        id,
        title,
        acf {
          company: experienceCompany,
          position: experiencePosition,
          dates: experienceDate {
            start,
            end
          },
          summary: experienceSummary  {
            list
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Experience"
  },
  data() {
    return {
      pageTitle: "Experience"
    };
  }
};
</script>