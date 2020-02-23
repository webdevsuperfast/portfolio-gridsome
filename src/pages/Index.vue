<template>
  <Layout>
    <Main sectionID="home" sectionClass="home">
      <b-container fluid>
        <b-row>
          <b-col cols="6" sm="4" v-for="({ node }, index) in $page.allNavigation.edges" :key="node.id" :class="index">
            {{ node.name }}
          </b-col>
        </b-row>
      </b-container>
    </Main>
  </Layout>
</template>

<page-query>
query {
  allSocial {
    edges {
      node {
        id,
        name,
        url,
        title,
        icon
      }
    }
  }
  allNavigation(order: ASC) {
    edges {
      node {
        id,
        name,
        path,
        icon
      }
    }
  }
}
</page-query>

<script>
import Aside from "@/layouts/Aside";
import Main from "@/layouts/Main";
import Sidebar from "@/components/Sidebar";

export default {
  data() {
    return {
      pageTitle: "Home"
    }
  },
  metaInfo: {
    title: 'Rotsen Mark Acob',
    titleTemplate: '%s - Web Developer',
    bodyAttrs: {
      class: 'home'
    }
  },
  components: {
    Aside,
    Main,
    Sidebar
  }
}
</script>