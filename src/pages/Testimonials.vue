<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionClass="pageTitle | slugify" :sectionID="pageTitle | slugify">
      <div class="w-100">
        <h2>What Clients Say About Me</h2>
        <div
          v-for="({ node }, index)  in $page.allTestimonials.edges"
          :key="index"
          :class="['testimonial', `testimonial-${node.id}`]"
        >
          <b-media :right-align="index % 2 ? true : false" class="testimonial-image">
            <template v-slot:aside>
              <g-image class="img-fluid portfolio-image" src="~/images/upwork.png" width="100" height="100" />
            </template>
            <div class="testimonial-content mb-2">
              <blockquote v-html="node.review" class="mb-0"></blockquote>
            </div>
            <div class="author-information">
              <h4 class="testimonial-title mb-0">{{ node.name }}</h4>
              <p class="small text-secondary">{{ node.location }}</p>
            </div>
          </b-media>
        </div>
      </div>
    </Main>
  </Layout>
</template>

<page-query>
{
  allTestimonials {
    edges {
      node {
        id,
        name,
        location,
        review,
        score
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