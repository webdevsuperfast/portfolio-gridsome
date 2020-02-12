<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <h2 class="section-title">Skills</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ node } in $page.allSkills.edges" :key="node.id" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">{{ node.name }} 
              <star-rating :rating="node.value | rating" :increment="0.5" read-only :star-size="12" :show-rating="false" inactive-color="#eceeec" active-color="#222222" inline />
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="w-100">
        <h2 class="section-title">Tools</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ node } in $page.allTools.edges" :key="node.id" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">{{ node.name }} 
              <star-rating :rating="node.value | rating" :increment="0.5" read-only :star-size="12" :show-rating="false" inactive-color="#eceeec" active-color="#222222" inline />
            </p>
          </b-col>
        </b-row>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allSkills(sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        value
      }
    }
  }
  allTools(sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        value
      }
    }
  }
}
</page-query>

<script>
import {
  ListIcon,
  CodeIcon,
  SearchIcon,
  TerminalIcon,
  SettingsIcon
} from "vue-feather-icons";

import StarRating from "vue-star-rating/src";

import Main from "@/layouts/Main";

export default {
  metaInfo: {
    title: "Abilities"
  },
  data() {
    return {
      pageTitle: "Abilities"
    }
  },
  components: {
    Main,
    'star-rating': StarRating
  }
}
</script>