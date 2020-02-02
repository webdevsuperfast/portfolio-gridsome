<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <h2 class="section-title">Skills</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="({ node }, index) in $page.allSkills.edges" :key="node.id" cols=12>
            <p class="mb-1 text-uppercase">{{ node.name }} - {{ node.value }} %</p>
            <div class="progress mb-3" style="height: 5px;">
              <div
                :class="['progress-bar', `bg-${index % 2 ? 'secondary' : 'secondary'}`]"
                role="progressbar"
                :style="`width: ${ node.value }%`"
                :aria-valuenow="`${ node.value }`"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="w-100">
        <h2 class="section-title">Tools</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="({ node }, index) in $page.allTools.edges" :key="node.id" cols=12>
            <p class="mb-1 text-uppercase">{{ node.name }} - {{ node.value }} %</p>
            <div class="progress mb-3" style="height: 5px;">
              <div
                :class="['progress-bar', `bg-${index % 2 ? 'secondary' : 'secondary'}`]"
                role="progressbar"
                :style="`width: ${ node.value }%`"
                :aria-valuenow="`${ node.value }`"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
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
    Main
  },
}
</script>

<style lang="scss" scoped>
  .stars {
    --percent: calc(var(--rating) / 100 * 100%);
    display: inline-block;
    font-size: var(--star-size);
    line-height: 1.2;
    &::before {
      content: "*****";
      letter-spacing: 3px;
      background: linear-gradient(90deg, var(--primary) var(--percent), var(--secondary) var(--percent));
      -webkit-text-fill-color: transparent;
    }
  }
</style>