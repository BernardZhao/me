<template>
  <Layout>
    <article class="p-8">
      <div class="flex justify-between items-center">
        <g-link class="hover:underline lg:text-lg" to="/blog">&larr; Go Back</g-link>
        <a href="/feed.xml">
          <svg width=20 height=20 xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 448 448"><circle cx="64" cy="384" r="64"/><path d="M0 149.344v85.344c117.632 0 213.344 95.68 213.344 213.312h85.312c0-164.672-133.984-298.656-298.656-298.656z"/><path d="M0 0v85.344C200 85.344 362.688 248 362.688 448H448C448 200.96 247.04 0 0 0z"/></svg>
        </a>
      </div>
      <div>
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">{{$page.post.title}}</h1>
        <p class="lg:text-lg text-gray-900">{{ $page.post.date}} | <span class="italic">{{$page.post.timeToRead}} min read</span></p>
      </div>
      <div class="prose prose-sm lg:prose-lg xl:prose-xl max-w-none">
        <div v-html="$page.post.content" />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
    description
    date (format: "D MMMM YYYY")
    path
    timeToRead
  }
}
</page-query>

<static-query>
query { metadata { siteUrl } }
</static-query>


<script>
export default {
  name: "Post",
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.description },
        // open-graph tags
        {
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          property: 'og:description',
          content: this.$page.post.description
        },
        // {
        //   property: 'og:image',
        //   content: this.$page.post.cover_image || ''
        // },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.post.path
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@bernyzhao" },
        // { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@bernyzhao" }
      ],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: "Subscribe",
          href: '/feed.xml'
        }
      ]
    }
  }
};
</script>
