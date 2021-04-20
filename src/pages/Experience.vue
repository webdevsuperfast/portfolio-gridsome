<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <div
          class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          v-for="({node}, index) in $page.allWordPressExperience.edges"
          :key="index"
        >
          <div class="resume-content">
            <b-media class="resume-image">
              <template v-slot:aside>
                <calendar-icon size="3x" />
              </template>
              <div class="resume-data">
                <h4 class="mb-0">{{ node.acf.position }}, <span class="text-muted">{{ node.acf.company }}</span></h4>
                <div class="resume-date mb-0">
                  <p
                    class="text-muted"
                  >{{ node.acf.dates.start }} - {{ node.acf.dates.end }}</p>
                </div>
              </div>
            </b-media>
            <ul class="mb-0 summary-list">
              <li
                v-for="(summary, key) in node.acf.summary"
                :key="key"
              >
                <check-circle-icon size="1x" class="mr-1" />
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
query Experience {
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
import {
  CheckCircleIcon,
  CalendarIcon
} from "vue-feather-icons";

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
    Main,
    CheckCircleIcon,
    CalendarIcon
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