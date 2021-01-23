<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <p
          class="lead"
        >I’m a web developer, a self-proclaimed introvert and a *NIX enthusiast.</p>
        <b-dropdown split text="Follow Me" class="social-links">
          <b-dropdown-item v-for="{node} in $page.allSocial.edges" :key="node.id" :href="node.url" target="_blank">
            {{ node.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-button variant="outline-success" to="/contact">Contact</b-button>
      </div>
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