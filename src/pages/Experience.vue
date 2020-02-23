<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <div
          class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          v-for="({node}, index) in $page.allExperience.edges"
          :key="index"
        >
          <div class="resume-content">
            <b-media class="resume-image">
              <template v-slot:aside>
                
              </template>
              <div class="resume-data">
                <h4 class="mb-0">{{ node.position }}, <span class="text-muted">{{ node.company }}</span></h4>
                <div class="resume-date mb-0">
                  <p
                    class="text-muted"
                    v-for="(date, index) in node.date"
                    :key="index"
                  >{{ date.start }} - {{ date.end }}</p>
                </div>
              </div>
            </b-media>
            <ul class="mb-0 summary-list">
              <li
                v-for="(summary, key) in node.summary"
                :key="key"
              >
                {{ summary }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allExperience(sortBy: "date", order: ASC) {
    edges {
      node {
        id,
        company,
        position,
        date {
          start,
          end
        },
        summary
      }
    }
  }
}
</page-query>

<script>

import Main from "@/layouts/Main";

export default {
  metaInfo: {
    title: "Experience"
  },
  data() {
    return {
      pageTitle: "Experience"
    };
  },
  components: {
    Main
  }
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: block;
      padding-left: 0;
    }
  }
  h4 {
    span {
      font-weight: 400;
    }
  }
</style>