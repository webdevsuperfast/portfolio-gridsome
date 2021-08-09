<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <div
          class="resume-item mb-5"
          v-for="{ node } in $page.allWordPressExperience.edges"
          :key="node.id"
        >
          <div class="resume-content">
            <b-media class="resume-image">
              <div class="resume-data">
                <h4 class="mb-0">{{ node.acf.position }}, <span class="text-muted">{{ node.acf.company }}</span></h4>
                <div class="resume-date mb-0">
                  <p class="mb-0">{{ node.acf.dates.start }} - {{ node.acf.dates.end }}</p>
                </div>
              </div>
            </b-media>
            <ul class="mb-0 summary-list">
              <li
                v-for="(summary, key) in node.acf.summary"
                :key="key"
              >
                {{ summary.list }}
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