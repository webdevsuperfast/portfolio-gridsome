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
            v-for="{ node } in $page.allPortfolioCategory.edges"
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
            lg="4"
            xl="4"
            :class="['portfolio', `portfolio-${node.id}`]"
            v-for="{ node } in filterPortfolio"
            :key="node.id"
            :id="`portfolio-${node.id}`"
          >
            <figure>
              <g-image
                class="img-fluid portfolio-image"
                :src="node.thumbnail"
              />
              <figcaption class="portfolio-content">
                <h4 class="mb-0">{{ node.title }}</h4>
              </figcaption>
              <transition name="slideLeft">
                <div class="portfolio-image-overlay sidebar" v-show="node.id == selectedPortfolio">
                  <g-image :src="node.fullImage" />
                  <div class="portfolio-information d-flex flex-column flex-md-row justify-content-between">
                    <div class="portfolio-name mb-0 text-uppercase">{{ node.title }}</div>
                    <div class="portfolio-link mb-0 text-uppercase text-light">
                      <g-link  v-if="node.website" :href="node.website">Visit Site <arrow-right-icon class="ml-2" size="1x" /></g-link>
                    </div>
                  </div>
                  <b-button
                    id="hamburger-3"
                    :class="['hamburger', 'sidebar-toggle', {active: isHover}]"
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
        fullImage: imagePath(width: 565, height: 565, fit: inside, quality: 80, background: "#fff")
      }
    }
  }
  allPortfolioCategory {
    edges {
      node {
        id,
        title,
        slug
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
        return this.$page.allPortfolio.edges.filter(function(item) {
          return item.node.category.indexOf(filter) !== -1;
        });
      } else {
        return this.$page.allPortfolio.edges;
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

<style lang="scss" scoped>
.portfolio-link {
  a {
    display: flex;
    align-items: center;
    color: #eceeec;
    transition: color .2s ease-in-out;
    &:hover {
      color: #666;
    }
  }
}
</style>