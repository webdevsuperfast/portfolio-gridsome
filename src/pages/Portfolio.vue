<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main sectionClass="flex-column" :sectionID="pageTitle | slugify">
      <div class="w-100">
        <b-nav align="end" class="d-none d-sm-flex">
          <b-nav-item active exact exact-active-class="active" @click="filter('all')">All</b-nav-item>
          <b-nav-item
            v-for="{ node } in $page.allWordPressPortfolioCategory.edges"
            :key="node.id"
            exact
            exact-active-class="active"
            :class="node.slug"
            @click="filter(node.slug)"
          >{{ node.title }}</b-nav-item>
        </b-nav>
        <b-dropdown
          text="Filter Portfolio"
          class="d-sm-none"
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
            xl="2"
            :class="['portfolio', `portfolio-${node.id}`]"
            v-for="{ node } in filterPortfolio"
            :key="node.id"
            :id="`portfolio-${node.id}`"
          >
            <figure>
              <g-image :src="node.featuredMedia.thumbnail" class="img-fluid portfolio-image mb-2" fit="fill" />
              <figcaption class="portfolio-content">
                <p class="mb-0" v-html="node.title"></p>
              </figcaption>
              <transition name="slideLeft">
                <div class="portfolio-image-overlay sidebar" v-show="node.id == selectedPortfolio">
                  <b-img-lazy :src="node.featuredMedia.fullImage.src" :alt="node.title" />
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
            </figure>
          </b-col>
        </b-row>
      </div>
    </Main>
  </Layout>
</template>


<page-query>
{
  allWordPressPortfolioCategory {
    edges {
      node {
        id,
        title,
        slug
      }
    }
  },
  allWordPressPortfolio {
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