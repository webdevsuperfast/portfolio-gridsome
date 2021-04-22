<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <p class="lead" v-html="$page.wordPressPage.content" />
        <b-button variant="outline-success" to="/contact">Contact</b-button>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  wordPressPage(id: 439) {
    id,
    title,
    content
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