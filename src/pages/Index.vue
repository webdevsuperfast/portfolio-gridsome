<template>
  <Layout>
    <Section id="section-home" class="section-home">
      <div class="w-100">
        <p
          class="lead"
        >I’m a web developer, a self-proclaimed introvert and a *NIX enthusiast.</p>
        <b-dropdown split text="Follow Me" class="social-links">
          <b-dropdown-item v-for="{node} in $page.allSocial.edges" :key="node.id" :href="node.url" target="_blank">
            {{ node.name }}
          </b-dropdown-item>
        </b-dropdown>
        <b-button variant="outline-success" to="/contact">Hire Me</b-button>
      </div>
    </Section>
    <Section id="section-abilities" class="section-abilities">
      <div class="w-100">
        <h2 class="section-title">Skills</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ node } in $page.allSkills.edges" :key="node.id" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">
              {{ node.name }}
              <star-rating
                :rating="node.value | rating"
                :increment="0.5"
                read-only
                :star-size="12"
                :show-rating="false"
                inactive-color="#adb5bd"
                active-color="#4582EC"
                inline
              />
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="w-100">
        <h2 class="section-title">Tools</h2>
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ node } in $page.allTools.edges" :key="node.id" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">
              {{ node.name }}
              <star-rating
                :rating="node.value | rating"
                :increment="0.5"
                read-only
                :star-size="12"
                :show-rating="false"
                inactive-color="#adb5bd"
                active-color="#4582EC"
                inline
              />
            </p>
          </b-col>
        </b-row>
      </div>
    </Section>
    <Section id="section-experience" class="section-experience">
      <div class="w-100">
        <div
          class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          v-for="({node}, index) in $page.allExperience.edges"
          :key="index"
        >
          <div class="resume-content">
            <b-media class="resume-image">
              <template v-slot:aside></template>
              <div class="resume-data">
                <h4 class="mb-0">
                  {{ node.position }},
                  <span class="text-muted">{{ node.company }}</span>
                </h4>
                <div class="resume-date mb-0">
                  <p
                    class="text-muted"
                    v-for="(date, index) in node.date"
                    :key="index"
                  >{{ date.start }} - {{ date.end }}</p>
                </div>
              </div>
            </b-media>
            <ul class="mb-0 summary-list">
              <li v-for="(summary, key) in node.summary" :key="key">{{ summary }}</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
    <Section id="section-portfolio" class="section-portfolio">
      <div class="w-100 d-sm-none">
        <b-dropdown
          text="Filter Portfolio"
          menu-class="w-100"
          size="sm"
          variant="primary"
          block
          split
          split-variant="outline-primary"
        >
          <b-dropdown-item @click="filter('all')">All</b-dropdown-item>
          <b-dropdown-item
            v-for="{ node } in $page.allPortfolioCategory.edges"
            :key="node.id"
            :active="initialFilter == node.slug ? true : false"
            @click="filter(node.slug); initialFilter = node.slug"
          >{{ node.title }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="w-100 d-none d-sm-block">
        <b-nav pills align="center">
          <b-nav-item @click="filter('all')" :active="initialFilter == 'all' ? true : false">All</b-nav-item>
          <b-nav-item
            v-for="{ node } in $page.allPortfolioCategory.edges"
            :key="node.id"
            :active="initialFilter == node.slug ? true : false"
            @click="filter(node.slug)"
          >{{ node.title }}</b-nav-item>
        </b-nav>
      </div>
      <div class="w-100">
        <b-row>
          <b-col
            cols="6"
            sm="4"
            md="4"
            lg="2"
            xl="2"
            :class="['portfolio', `portfolio-${node.id}`]"
            v-for="{ node } in filterPortfolio"
            :key="node.id"
            :id="`portfolio-${node.id}`"
          >
            <figure>
              <g-image class="img-fluid portfolio-image mb-2" :src="node.thumbnail" />
              <figcaption class="portfolio-content">
                <h4 class="mb-0">{{ node.title }}</h4>
              </figcaption>
              <a
                :href="node.imageSrc"
                data-type="image"
                class="glightbox"
                :data-glightbox="`title: ${node.title}; description: .description-${node.id}`"
              >Hover</a>
              <div :class="`glightbox-desc description-${node.id}`">
                <a :href="node.website" v-if="node.website">Visit Site</a>
              </div>
            </figure>
          </b-col>
        </b-row>
      </div>
    </Section>
    <Section id="section-testimonials" class="section-testimonials">
      <div class="w-100">
        <h2>What Clients Say About Me</h2>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            v-for="({ node }, index)  in $page.allTestimonials.edges"
            :key="index"
            :class="['testimonial', `testimonial-${node.id}`]"
          >
            <div class="testimonial-content mb-2">
              <blockquote v-html="node.review" class="mb-0"></blockquote>
            </div>
            <b-media class="testimonial-image">
              <template v-slot:aside>
                <g-image
                  class="img-fluid portfolio-image"
                  src="~/images/upwork.png"
                  width="60"
                  height="60"
                />
              </template>
              <div class="author-information">
                <h4 class="testimonial-title mb-0">{{ node.name }}</h4>
                <p class="small text-secondary">{{ node.location }}</p>
              </div>
            </b-media>
          </b-col>
        </b-row>
      </div>
    </Section>
    <Section id="section-contact" class="section-contact">
      <div class="w-100">
        <h2>Let's Talk</h2>
        <p
          class="lead mb-4"
        >Thanks for dropping by. Send me an information about your project so I can determine how can I help you.</p>
        <b-form
          @submit.prevent="handleSubmit"
          name="contact"
          class="text-center w-md-75 mx-auto"
          method="POST"
          action="https://formspree.io/xlegeved"
        >
          <b-form-input name="form-name" value="contact" hidden></b-form-input>

          <b-row>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.name.$model"
                type="text"
                class="form-control"
                placeholder="Name"
                name="name"
                aria-describedby="name-live-feedback"
                :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
              ></b-form-input>
              <b-form-invalid-feedback
                id="name-live-feedback"
              >Field is required and name must have at least {{ $v.form.name.$params.minLength.min }} characters.</b-form-invalid-feedback>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.email.$model"
                type="email"
                class="form-control"
                placeholder="Email Address"
                name="email"
                aria-describedby="email-live-feedback"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
              ></b-form-input>
              <b-form-invalid-feedback
                id="email-live-feedback"
              >Field is required and email must be a valid email.</b-form-invalid-feedback>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-select v-model.trim="$v.form.service.$model">
                <template v-slot:first>
                  <b-form-select-option :value="null">Service you're interested in?</b-form-select-option>
                </template>
                <b-form-select-option
                  v-for="{ node } in $page.allPortfolioCategory.edges"
                  :key="node.id"
                  :value="node.slug"
                >{{node.title}}</b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col lg="6" class="form-group">
              <b-form-input
                v-model.trim="$v.form.website.$model"
                type="url"
                class="form-control"
                placeholder="Website"
                name="website"
                aria-describedby="website-live-feedback"
                :state="$v.form.website.$dirty ? !$v.form.website.$error : null"
              ></b-form-input>
            </b-col>
            <b-col lg="12" class="form-group">
              <b-form-input
                v-model.trim="$v.form.subject.$model"
                type="text"
                class="form-control"
                placeholder="Subject"
                name="subject"
                aria-describedby="subject-live-feedback"
                :state="$v.form.subject.$dirty ? !$v.form.subject.$error : null"
              ></b-form-input>
            </b-col>
            <b-col lg="12" class="form-group">
              <b-form-textarea
                v-model.trim="$v.form.message.$model"
                name="message"
                cols="80"
                rows="10"
                class="form-control form-control-lg"
                placeholder="Tell me more about your project"
                aria-describedby="message-live-feedback"
                :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
              ></b-form-textarea>
              <b-form-invalid-feedback id="message-live-feedback">Field is required</b-form-invalid-feedback>
            </b-col>
            <b-col lg="12" class="text-left mb-4">
              <b-button
                type="submit"
                :disabled="submitStatus === 'PENDING'"
                variant="outline-primary"
              >Submit</b-button>
            </b-col>
            <b-col lg="12" class="text-center">
              <b-alert :show="submitStatus === 'OK'" variant="success">Thanks for your submission!</b-alert>
              <b-alert
                :show="submitStatus === 'ERROR'"
                variant="danger"
              >Please fill the form correctly.</b-alert>
              <b-alert :show="submitStatus === 'PENDING'" variant="info">Sending...</b-alert>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </Section>
  </Layout>
</template>

<page-query>
query {
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
  allNavigation(order: ASC) {
    edges {
      node {
        id,
        name,
        path,
        icon
      }
    }
  }
  allSkills(sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        value
      }
    }
  }
  allTools(sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        value
      }
    }
  }
  allExperience(sortBy: "date", order: ASC) {
    edges {
      node {
        id,
        company,
        position,
        date {
          start,
          end
        },
        summary
      }
    }
  }
  allPortfolio(sortBy: "title", order: ASC) {
    edges {
      node {
        id,
        title,
        client,
        website,
        image,
        category,
        thumbnail: imagePath(width: 190, height: 190, fit: cover, quality: 80),
        fullImage: imagePath(width: 565, height: 565, fit: inside, quality: 80, background: "#fff"),
        imageSrc
      }
    }
  }
  allPortfolioCategory(sortBy: "slug", order: ASC) {
    edges {
      node {
        id,
        title,
        slug
      }
    }
  }
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
import StarRating from "vue-star-rating/src";
import Section from "@/layouts/Main";

import gLightbox from "glightbox";

import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      pageTitle: "Home",
      initialFilter: "all",
      show: false,
      selectedPortfolio: null,
      isActive: false,
      form: {
        name: "",
        email: "",
        service: null,
        website: "",
        subject: "",
        message: ""
      },
      submitStatus: null
    };
  },
  metaInfo: {
    title: "Rotsen Mark Acob",
    titleTemplate: "%s - Web Developer",
    bodyAttrs: {
      class: "home"
    }
  },
  components: {
    Section,
    "star-rating": StarRating
  },
  computed: {
    filterPortfolio: function() {
      var filter = this.initialFilter;
      if (filter != "all") {
        return this.$page.allPortfolio.edges.filter(function(item) {
          return item.node.category.indexOf(filter) !== -1;
        });
      } else {
        return this.$page.allPortfolio.edges;
      }
    },
    addPortfolioCategory: function() {
      let categories = this.$page.allPortfolioCategory.edges;
      return Object.assign(
        {
          id: Math.random()
            .toString(36)
            .substr(2, 8),
          title: "All",
          slug: "all"
        },
        categories
      );
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      service: {},
      website: {},
      subject: {},
      message: {
        required
      }
    }
  },
  methods: {
    filter: function(tag) {
      this.initialFilter = tag;
    },
    getPortfolioId: function(id) {
      this.selectedPortfolio = id;
    },
    encode: function(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit: function() {
      this.$v.form.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          fetch("https://formspree.io/xlegeved", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "contact",
              ...this.form
            })
          })
            .then(() => {
              this.submitStatus = "OK";
            })
            .catch(error => {
              this.submitStatus = "ERROR";
            })
            .finally(() => {
              this.$router.push("/thanks");
            });
        }, 500);
      }
    }
  },
  mounted() {
    const lightbox = new gLightbox({
      onOpen: () => {
        console.log("Success");
      }
    });
  }
};
</script>