<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <Navigation />
      <About>
        <div class="w-100">
          <div class="skill-section row mb-5">
            <div v-for="{ node } in $page.allSkills.edges" :key="node.id" :class="['skill', 'col-sm-12']" :id="node.id">
              <h5 class="mb-1 d-flex align-items-center">{{node.name}} <div class="stars ml-auto" :style="`--rating: ${node.value}`" :aria-label="`Rating is ${node.value}%`"></div></h5>
              
            </div>
          </div>
        </div>
      </About>
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

import About from "@/layouts/About";
import Main from "@/layouts/Main";
import Navigation from "@/components/About";

export default {
  metaInfo: {
    title: "Skills"
  },
  data() {
    return {
      pageTitle: "Skills"
    }
  },
  components: {
    Main,
    About,
    Navigation
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
      // -webkit-background-clip: text;
      // background-clip: text;
    }
  }
</style>