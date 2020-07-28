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
      date (format: "D MMMM YYYY")
      timeToRead
    }
  }
</page-query>
<script>
export default {
  name: "Post",
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
};
</script>
