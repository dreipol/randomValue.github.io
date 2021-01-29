var jsonImporter = require('node-sass-json-importer')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  sassOptions: {
    importer: jsonImporter(),
  },
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/' : '',
}
