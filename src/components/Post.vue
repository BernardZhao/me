<template>
  <div class="shadow-xl hover:shadow-2xl p-10 my-6">
    <p class="text-gray-500 text-sm" v-html="post.date" />
    <g-link :to="post.path" class="read">
      <h1 class="font-serif text-4xl text-gray-900" v-html="post.title" />
    </g-link>
    <p class="description" v-html="post.description" />
    <b class="text-sm">{{post.timeToRead}} min read</b> &nbsp;
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  }
};
</script>