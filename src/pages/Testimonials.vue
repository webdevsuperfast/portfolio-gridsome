<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionClass="pageTitle | slugify" :sectionID="pageTitle | slugify">
      <div class="w-100">
        <h2>What Clients Say About Me</h2>
        <b-row>
          <b-col cols="12" sm="6"
            v-for="({ node }, index)  in $page.allTestimonials.edges"
            :key="index"
            :class="['testimonial', `testimonial-${node.id}`]"
          >
            <div class="testimonial-content mb-2">
              <blockquote v-html="node.review" class="mb-0"></blockquote>
            </div>
            <b-media class="testimonial-image">
              <template v-slot:aside>
                <g-image class="img-fluid portfolio-image" src="~/images/upwork.png" width="60" height="60" />
              </template>
              <div class="author-information">
                <h4 class="testimonial-title mb-0">{{ node.name }}</h4>
                <p class="small text-secondary">{{ node.location }}</p>
              </div>
            </b-media>
          </b-col>
        </b-row>
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