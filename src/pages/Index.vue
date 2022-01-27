<template>
  <Layout>
    <div class="flex w-full lg:h-screen items-center justify-center py-24 lg:py-0">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content">
          <h1 class="text-9xl lg:text-12xl xl:text-16xl font-barlow-condensed font-black text-rose-900" v-html="$page.wordPressPage.title"></h1>
          <div 
            class="text-2xl pt-8 md:pt-14 lead-9 mb-12" 
            v-html="$page.wordPressPage.content"></div>

          <div class="button-container flex space-x-6">
            <g-link 
              to="/contact" 
              class="block sm:inline-block uppercase text-xl lg:text-2xl hover:bg-transparent hover:text-rose-900 transition-all hover:-translate-y-1 border-2 border-rose-900 bg-rose-900 px-8 py-3 lg:px-10 lg:py-3 rounded-xl rounded-br-none">Contact</g-link>

            <a 
              href="https://standardresume.co/r/YRlivh8oXpoft8SgKK2y9" 
              class="bg-transparent block sm:inline-block uppercase text-xl text-rose-900 lg:text-2xl hover:bg-rose-900 hover:text-white border-2 border-rose-900 bg-rose-900 px-8 py-3 lg:px-10 lg:py-3 rounded-xl rounded-br-none hover:-translate-y-1 transition-all" 
              target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </div>
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
import Layout from '@/layouts/Default';
export default {
  data() {
    return {
      pageTitle: "Home"
    }
  },
  metaInfo: {
    title: 'Rotsen Mark Acob',
    titleTemplate: '%s - Jamstack Developer'
  },
  components: {
    Layout
  }
}
</script>