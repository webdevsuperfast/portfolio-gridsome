// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import BootstrapVue from 'bootstrap-vue'

// Google Fonts
require('typeface-cabin')
require('typeface-roboto-condensed')

// Import Global SCSS File
import '~/assets/scss/resume.scss'

// Import Global Default Layout
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Bootstrap Vue
  Vue.use(BootstrapVue)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add Global Filters
  Vue.filter('LowerCase', (value) => {
    return value.toLowerCase();
  })

  // Slugify
  // @link https://gist.github.com/mathewbyrne/1280286
  Vue.filter('slugify', (value) => {
    return value.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  })
}
