<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main sectionClass="flex-column" :sectionID="pageTitle | slugify">
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
            :active="active == node.slug ? true : false"
            @click="filter(node.slug); active = node.slug"
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
              <g-image
                class="img-fluid portfolio-image mb-2"
                :src="node.thumbnail"
              />
              <figcaption class="portfolio-content">
                <h4 class="mb-0">{{ node.title }}</h4>
              </figcaption>
              <a :href="node.imageSrc" data-type="image" class="glightbox" :data-glightbox="`title: ${node.title}; description: .description-${node.id}`">Hover</a>
              <div :class="`glightbox-desc description-${node.id}`">
                <a :href="node.website" v-if="node.website">Visit Site</a>
              </div>
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
}
</page-query>
<script>
import gLightbox from 'glightbox'
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
      selectedPortfolio: null,
      isActive: false
    };
  },
  components: {
    Aside,
    Main
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
      let categories = this.$page.allPortfolioCategory.edges
      return Object.assign({
        id: Math.random().toString(36).substr(2, 8),
        title: 'All',
        slug: 'all'
      }, categories);
    }
  },
  methods: {
    filter: function(tag) {
      this.initialFilter = tag;
    },
    getPortfolioId: function(id) {
      this.selectedPortfolio = id;
    }
  },
  mounted() {
    const lightbox = new gLightbox({
      onOpen: () => {
        console.log('Success')
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.glightbox-clean {
  .gslide-description {
    background: blue !important;
    color: #fff;
  }
  .gslide-title {
    &.gslide-title {
      color: #fff;
    }
  }
  .gslide-desc {
    a {
      color: #fff;
    }
  }
}
</style>