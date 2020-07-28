// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Bernard Zhao",
  siteDescription: "",
  siteURL: "https:/www.bernardzhao.com/",
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