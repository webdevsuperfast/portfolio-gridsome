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
          <b-media :right-align="index % 2 ? true : false" class="testimonial-image">
            <template v-slot:aside>
              <b-img-lazy class="img-fluid portfolio-image" rounded="circle" :src="node.featuredMedia.thumbnail.src" />
            </template>
            <div class="testimonial-content mb-2">
              <blockquote v-html="node.content" class="mb-0"></blockquote>
            </div>
            <div class="author-information">
              <h4 class="testimonial-title mb-0">{{ node.title }}</h4>
              <p class="small text-secondary">{{ node.acf.location }}</p>
            </div>
          </b-media>
        </div>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allWordPressTestimonial {
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
          thumbnail: downloadedImages(width: 80, height: 80)
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