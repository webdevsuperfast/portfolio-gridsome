<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionClass="pageTitle | slugify" :sectionID="pageTitle | slugify">
      <div class="w-100">
        <h2>What Clients Say About Me</h2>
        <div
          v-for="({ node }, index)  in $page.allWordPressTestimonial.edges"
          :key="index"
          :class="['testimonial', `testimonial-${node.id}`, index % 2 ? 'right-image' : 'left-image']"
        >
          <div class="testimonial-content mb-3">
            <blockquote v-html="node.content" class="mb-0"></blockquote>
          </div>
          <b-media :right-align="index % 2 ? true : false" :class="index % 2 ? 'text-right': 'text-left'" vertical-align="center">
            <template v-slot:aside>
              <b-img-lazy class="img-fluid portfolio-image" rounded="circle" :src="node.featuredMedia.thumbnail.src" />
            </template>
            <h4 class="testimonial-title mb-0">{{ node.title }}</h4>
            <p class="small text-secondary mb-0">{{ node.acf.location }}</p>
          </b-media>
        </div>
      </div>
    </Main>
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
import Main from "@/layouts/Main";

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
    Main
  }
};
</script>