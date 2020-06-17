// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Bernard Zhao's personal site",
  siteDescription: "Bernard Zhao's personal site",
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      // Create posts from markdown files
      use: 'gridsome-plugin-tailwindcss',
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