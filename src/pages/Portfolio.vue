<template>
  <Layout>
    <section id="js-scroll-to-portfolio" class="flex w-full sm:min-h-screen relative py-36">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 relative">
        <div class="filter-container relative flex flex-nowrap place-content-between items-center py-10">
          <h2 class="section-title text-4xl sm:text-6xl grow">Portfolio</h2>
          <div class="filter-block">
            <div class="w-full items-center flex-none lg:mt-0 lg:w-auto sm:ml-auto flex space-x-8">
              <div
                :class="{ 'block lg:flex': filterOpen, 'hidden': ! filterOpen }"
                class="absolute right-0 top-[100px] filter-container z-10 rounded-xl flex-col bg-gray-900 lg:rounded-none lg:static lg:bg-transparent lg:bg-opacity-0 lg:flex-row lg:space-x-6 uppercase lg:text-xl"
              >
                <a
                  @click="filter('all')"
                  :class="initialFilter === 'all' ? 'text-rose-900 underline underline-offset-4' : ''"
                  data-filter="all" class="filter text-center uppercase hover:text-rose-900 hover:cursor-pointer transition-colors block py-1 px-6 lg:px-0 lg:py-0">All</a>
                  <a
                    v-for="{ node } in $page.allWordPressPortfolioCategory.edges"
                    :key="node.id"
                    @click="filter(node.slug)"
                    :class="initialFilter === node.slug ? 'text-rose-900 underline underline-offset-4' : ''"
                    class="filter uppercase text-center hover:text-rose-900 transition-colors hover:cursor-pointer block py-1 px-6 lg:px-0 lg:py-0" >{{ node.title }}</a>
              </div>
              <button
                @click="filterOpen = ! filterOpen"
                class="flex items-center space-x-2 focus:outline-none">
                <span class="text-xl uppercase" v-text="filterOpen ? '' : 'Filter'"></span>
                
                <div class="w-10 h-10 flex items-center justify-center relative">
                  <span 
                  :class="filterOpen ? '-translate-y-0 rotate-45' : '-translate-y-3'"
                  class="transform transition w-full rounded h-0.5 bg-current absolute"
                  ></span>
                  <span 
                  :class="filterOpen ? 'opacity-0 translate-x-3 w-10' : 'opacity-100'"
                  class="transform transition w-3/5 rounded h-0.5 bg-current absolute"
                  ></span>
                  <span 
                  :class="filterOpen ? 'translate-y-0 -rotate-45 w-10' : 'translate-y-3 w-1/5'"
                  class="transform transition rounded h-0.5 bg-current absolute"
                  ></span>
                </div>
              </button>
              
            </div>
          </div>
        </div>

        <div class="collections grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-col-6 gap-8 snap-proximity overflow-x-auto relative overflow-y-hidden">
          <figure 
            :class="['portfolio', `portfolio-${node.id}`]"
            v-for="{ node } in filterPortfolio"
            :key="node.id"
            :id="`portfolio-${ node.id }`"
            class="mix portfolio w-100">
            <a class="glightbox group" :href="node.featuredMedia.fullImage.src">
              <g-image 
                width="445" 
                height="334" 
                class="portfolio-image rounded-xl rounded-br-none overflow-hidden mb-2 w-full object-cover h-[250px] lazy transition group-hover:scale-95 group-hover:grayscale group-hover:drop-shadow-lg" 
                :src="node.featuredMedia.fullImage.src" 
                :alt="node.title" />
              <figcaption class="portfolio-info">
                <h3 class="mb-0 text-white">{{ node.title }}</h3>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </section> <!-- Portfolio Section -->
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
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

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
      filterOpen: false
    };
  },
  components: {
    
  },
  computed: {
    filterPortfolio: function() {
      var filter = this.initialFilter;
      console.log(this.initialFilter)
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
  },
  mounted: function() {
    this.lightbox = new GLightbox({
      selector: '.glightbox'
    })
  }
};
</script>