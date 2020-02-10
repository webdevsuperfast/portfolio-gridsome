// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

const httpServer = process.env.NODE_ENV === 'production' ? 'https://portfolio-wds-data.herokuapp.com' : 'http://localhost:3000'

const path = require('path')
const { imageType } = require('gridsome/lib/graphql/types/image')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(httpServer + '/education');
    const education = actions.addCollection('Education');

    for (const item of data) {
      education.addNode({
        id: item.id,
        school: item.school,
        degree: item.degree,
        program: item.program,
        date: item.date
      });
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get(httpServer + '/experience');
    const experience = actions.addCollection('Experience');

    for (const item of data) {
      experience.addNode({
        id: item.id,
        company: item.company,
        position: item.position,
        date: item.date,
        summary: item.summary
      })
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get(httpServer + '/portfolio');
    const portfolio = actions.addCollection('Portfolio');

    for( const item of data ) {
      portfolio.addNode({
        id: item.id,
        title: item.title,
        client: item.client,
        website: item.website,
        image: item.image,
        thumbnail: item.thumbnail,
        category: item.category
      })
    }
  })

  api.loadSource( async actions => {
    const { data } = await axios.get(httpServer + '/skills');
    const skills = actions.addCollection('Skills');

    for( const item of data ) {
      skills.addNode({
        id: item.id,
        name: item.name,
        value: item.value
      })
    }
  })

  api.loadSource( async actions => {
    const { data } = await axios.get(httpServer + '/tools');
    const tools = actions.addCollection('Tools');

    for( const item of data ) {
      tools.addNode({
        id: item.id,
        name: item.name,
        value: item.value
      })
    }
  })

  api.loadSource( async actions => {
    const { data } = await axios.get(httpServer + '/social');
    const social = actions.addCollection('Social');

    for( const item of data ) {
      social.addNode({
        id: item.id,
        name: item.name,
        url: item.url,
        title: item.title,
        icon: item.icon
      })
    }
  } )

  api.loadSource( async actions => {
    const { data } = await axios.get(httpServer + '/testimonials');
    const testimonials = actions.addCollection('Testimonials');

    for( const item of data ) {
      testimonials.addNode({
        id: item.id,
        name: item.name,
        location: item.location,
        review: item.review,
        score: item.score
      })
    }
  } )

  api.loadSource( async actions => {
    const { data } = await axios.get(httpServer + '/portfolio_category')
    const categories = actions.addCollection('PortfolioCategory');

    for ( const item of data ) {
      categories.addNode({
        id: item.id,
        title: item.title,
        slug: item.slug
      })
    }
  } )

  // Adds schema resolver essential to dynamic image handling
  // @link https://github.com/gridsome/gridsome/issues/292#issuecomment-483347365
  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Portfolio: {
        imagePath: {
          args: imageType.args,
          type: imageType.type,
          async resolve(obj, args, context, info) {
            const value = path.join(__dirname, 'src', 'images', `${obj.image}`)

            try {
              result = await context.assets.add(value, args)
            } catch (err) {
              return null
            }
        
            if (result.isUrl) {
              return result.src
            }
        
            return {
              type: result.type,
              mimeType: result.mimeType,
              src: result.src,
              size: result.size,
              sizes: result.sizes,
              srcset: result.srcset,
              dataUri: result.dataUri
            }
          }
        }
      }
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
