<template>
  <Layout>
    <section class="flex w-full items-center min-h-screen py-36">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="filter-container relative grid grid-cols-2 place-content-between items-center py-10">
          <h1 class="section-title text-4xl sm:text-6xl">Testimonials</h1>
        </div>
        
        <div class="testimonials grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-14 gap-y-14">
            <div 
              class="testimonial w-100 flex flex-col space-between"
              v-for="( { node }, index ) in $page.allWordPressTestimonial.edges"
              :key="index">
              <blockquote class="grow rounded-2xl p-8 bg-gray-100 text-gray-900 rounded-br-none block text-xl mb-6" v-html="node.content">
              </blockquote>
              <div class="flex items-center content-end text-right flex-row-reverse">
                <g-image :src="node.featuredMedia.thumbnail.src" width="150" height="150" class="w-10 h-10 rounded-full ml-4 lazy"  :alt="node.title" />
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
      pageTitle: 'Testimonial'
    }
  },
  metaInfo: {
    title: "Testimonials"
  },
  components: {
    
  }
};
</script>