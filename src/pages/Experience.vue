<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div 
        v-for="{ node } in $page.allExperience.edges" 
        :key="node.id"
        :class="['experience', 'w-100', `experience-${node.id}`]"
      >
        
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allExperience {
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
import { CodeIcon } from "vue-feather-icons";

import Main from "@/layouts/Main";

export default {
  data() {
    return {
      pageTitle: "Experience"
    }
  },
  metaInfo: {
    title: "My Work Experience"
  },
  components: {
    CodeIcon,
    Main
  }
}
</script>