// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rotsen Mark Acob',
  siteDescription: 'Web Developer, Frontend Developer and Freelancer',
  siteUrl: 'https://rotsenacob.com',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.NODE_ENV === 'production' ? 'https://cdn.rotsenacob.com' : 'https://rotsenacob.ddev.site',
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10
      }
    },
    'gridsome-plugin-robots-txt',
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        typeName: 'WordPressAttachment',
        sourceField: 'sourceUrl',
        targetField: 'downloadedImages',
        targetPath: './src/assets/remote/images'
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  templates: {
    
  }
}