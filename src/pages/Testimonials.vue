<template>
  <Layout>
    <section class="flex items-center w-full min-h-screen py-36">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div
          class="relative grid items-center grid-cols-2 py-10 filter-container place-content-between"
        >
          <h1 class="text-4xl section-title sm:text-6xl">Testimonials</h1>
        </div>

        <div
          class="grid grid-cols-none testimonials sm:grid-cols-2 lg:grid-cols-3 gap-14 gap-y-14"
        >
          <div
            class="flex flex-col testimonial w-100 space-between"
            v-for="({ node }, index) in $page.allWordPressTestimonial.edges"
            :key="index"
          >
            <blockquote
              class="block p-8 mb-6 text-xl text-gray-900 bg-gray-100 rounded-br-none grow rounded-2xl"
              v-html="node.content"
            ></blockquote>
            <div
              class="flex flex-row-reverse items-center content-end text-right"
            >
              <g-image
                :src="node.featuredMedia.thumbnail.src"
                width="150"
                height="150"
                class="w-10 h-10 ml-4 rounded-full lazy"
                :alt="node.title"
              />
              <div class="text-sm">
                <p class="font-medium">{{ node.title }}</p>
                <p class="text-xs">{{ node.acf.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
{
  allWordPressTestimonial(sortBy: "title", order: ASC) {
    edges {
      node {
        id,
        title,
        content,
        slug,
        acf {
          score: testimonialScore,
          location: testimonialLocation
        },
        featuredMedia {
          thumbnail: downloadedImages(width: 50, height: 50)
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      pageTitle: "Testimonial",
    };
  },
  metaInfo: {
    title: "Testimonials",
  },
  components: {},
};
</script>
