import axios from 'axios'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    async routes() {
      const pages = await axios
        .get('https://tmtkg.microcms.io/api/v1/blog?limit=100', {
          headers: {
            'X-API-KEY': '90a9f7ef-a60e-49e0-bbbc-c9a154625917'
          }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: 'memo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
