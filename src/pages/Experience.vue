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
            <h4 class="mb-0">{{ node.position }}, <span class="text-muted">{{ node.company }}</span></h4>
            <!-- <div class="subheading mb-0 text-muted">{{ node.company }}</div> -->
            <div class="resume-date mb-3">
              <p
                class="text-muted"
                v-for="(date, index) in node.date"
                :key="index"
              >{{ date.start }} - {{ date.end }}</p>
            </div>
            <ul class="mb-0 summary-list">
              <li
                v-for="(summary, key) in node.summary"
                :key="key"
              >
                <check-circle-icon size="1x" class="mr-1" />
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
import {
  CheckCircleIcon
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
    CheckCircleIcon
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