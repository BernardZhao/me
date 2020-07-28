<template>
  <Layout>
    <article class="p-8">
      <g-link class="hover:underline lg:text-lg" to="/blog">&larr; Go Back</g-link>
      <div>
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">{{$page.post.title}}</h1>
        <p class="lg:text-lg text-gray-900">{{ $page.post.date}} | <span class="italic">{{$page.post.timeToRead}} min read</span></p>
      </div>
      <div class="prose prose-sm lg:prose-lg xl:prose-xl max-w-none">
        <p v-html="$page.post.content" />
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
      ]
    }
  }
};
</script>
