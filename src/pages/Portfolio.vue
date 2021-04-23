<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main sectionClass="flex-column" :sectionID="pageTitle | slugify">
      <div class="w-100">
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
            v-for="{ node } in $page.allWordPressPortfolioCategory.edges"
            :key="node.id"
            @click="filter(node.slug)"
          >{{ node.title }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="w-100">
        <b-row>
          <b-col
            cols="6"
            sm="4"
            md="4"
            lg="3"
            xl="3"
            :class="['portfolio', `portfolio-${node.id}`]"
            v-for="{ node } in filterPortfolio"
            :key="node.id"
            :id="`portfolio-${node.id}`"
          >
            <figure>
              <g-image
                class="img-fluid portfolio-image mb-2"
                :src="node.featuredMedia.thumbnail"
                position="top"
              />
              <figcaption class="portfolio-content">
                <h4 class="mb-0" v-html="node.title" />
              </figcaption>
              <transition name="slideLeft">
                <div class="portfolio-image-overlay sidebar" v-show="node.id == selectedPortfolio">
                  <b-img-lazy :src="node.featuredMedia.fullImage.src" :alt="node.title" />
                  <div class="portfolio-information d-flex flex-column flex-md-row justify-content-between">
                    <div class="portfolio-name mb-0 text-uppercase" v-html="node.title" />
                    <div class="portfolio-link mb-0 text-uppercase text-light">
                      <b-button  v-if="node.acf.website" :href="node.acf.website" target="_blank" size="sm" variant="primary">Visit Site</b-button>
                    </div>
                  </div>
                  <b-button
                    id="hamburger-3"
                    :class="['hamburger', 'sidebar-toggle']"
                    @click="selectedPortfolio = !selectedPortfolio"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </b-button>
                </div>
              </transition>
              <a href="#" class="glightbox" @click="getPortfolioId(node.id)">Hover</a>
            </figure>
          </b-col>
        </b-row>
      </div>
    </Main>
  </Layout>
</template>


<page-query>
{
  allWordPressPortfolioCategory(sortBy: "title", order: ASC) {
    edges {
      node {
        id,
        title,
        slug
      }
    }
  },
  allWordPressPortfolio(sortBy: "slug", order: ASC) {
    edges {
      node {
        id,
        title,
        category: portfolioCategory {
          slug
        },
				featuredMedia {
          thumbnail: downloadedImages(width: 250, height: 250),
          fullImage: downloadedImages
        },
        acf {
          client: clientName,
          website: clientWebsite
        }
      }
    }
  }
}
</page-query>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';
import Aside from "@/layouts/Aside";
import Main from "@/layouts/Main";

export default {
  metaInfo: {
    title: "Portfolio"
  },
  data() {
    return {
      pageTitle: "Portfolio",
      initialFilter: "all",
      show: false,
      selectedPortfolio: null
    };
  },
  components: {
    Aside,
    Main,
    ArrowRightIcon
  },
  computed: {
    filterPortfolio: function() {
      var filter = this.initialFilter;
      if (filter != "all") {
        return this.$page.allWordPressPortfolio.edges.filter(function(item) {
          return item.node.category[0].slug.indexOf(filter) !== -1;
        });
      } else {
        return this.$page.allWordPressPortfolio.edges;
      }
    }
  },
  methods: {
    filter: function(tag) {
      this.initialFilter = tag;
    },
    getPortfolioId: function(id) {
      this.selectedPortfolio = id;
    }
  }
};
</script>