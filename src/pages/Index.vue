<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <div class="lead" v-html="$page.wordPressPage.content"></div>
        <b-dropdown split text="Follow Me" class="social-links">
          <b-dropdown-item v-for="{ social, index } in $page.wordPressPage.acf.socialMedia" :key="index" :href="social.url" target="_blank">
            {{ social.name }}
          </b-dropdown-item>
        </b-dropdown>
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
    content,
    acf {
      socialMedia {
        social {
          name,
          url
        }
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