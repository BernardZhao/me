// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const marked = require('marked')

module.exports = {
  siteName: "Bernard Zhao",
  siteDescription: "",
  siteUrl: "https:/www.bernardzhao.com",
  templates: {
    Post: '/blog/:title',
  },
  // For g-image workaround
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'blog/posts/*.md',
      }
    },
    {
    use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Bernard Zhao',
          description: "Bernard's personal blog"
        },
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date,
          content: marked(node.content)
        })
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}