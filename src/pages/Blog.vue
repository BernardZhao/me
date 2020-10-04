<template>
  <Layout>
    <div class="p-6 text-center sm:text-left">
      <h1 class="text-5xl md:text-7xl font-serif text-gray-900"><g-link class="underline sm:no-underline hover:underline" to="/">Berny's</g-link> Blog</h1>
      <div>
        <section class="posts">
          <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          description
          date (format: "D MMMM YYYY")
          path
        }
      }
    }
  }
</page-query>

<script>
import Post from "@/components/Post";
export default {
  components: { Post },
  metaInfo: {
    title: "Blog",
    link: [
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: "Subscribe",
        href: '/feed.xml'
      }
    ]
  }
};
</script>
