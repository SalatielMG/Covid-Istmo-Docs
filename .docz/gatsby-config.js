const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Covid Istmo',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Covid Istmo',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo',
          templates:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz',
          cache: 'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\.cache',
          app: 'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app',
          appPackageJson:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\package.json',
          appTsConfig:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\tsconfig.json',
          gatsbyConfig:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\gatsby-node.js',
          gatsbySSR:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\gatsby-ssr.js',
          importsJs:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app\\index.html',
          db:
            'C:\\Node\\Covid-Itsmo\\Resource\\covid-istmo\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
