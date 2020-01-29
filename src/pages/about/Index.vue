<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionClass="pageTitle | slugify" :sectionID="pageTitle | slugify">
      <Navigation />
      <About>
        <p
          class="lead"
        >I’m a web developer, a self-proclaimed introvert and a *NIX enthusiast.</p>
        <b-dropdown split text="Follow Me" class="mr-2 mb-0">
          <b-dropdown-item v-for="{node} in $page.allSocial.edges" :key="node.id" :href="node.url">
            {{ node.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-button variant="outline-success" to="/contact">Hire Me</b-button>
      </About>
    </Main>
  </Layout>
</template>

<page-query>
{
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
}
</page-query>

<script>
import Main from "@/layouts/Main";
import About from "@/layouts/About";
import Navigation from "@/components/About";
export default {
  data() {
    return {
      pageTitle: "About"
    }
  },
  metaInfo: {
    title: 'About Me'
  },
  components: {
    Main,
    About,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
  div.w-100:nth-child(2) {
    margin: auto;
  }
</style>