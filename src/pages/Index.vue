<template>
  <Layout>
    <div class="flex p-6 items-center justify-center">
      <div class="text-left w-full">
        <h1 class="name text-gray-900">Bernard Zhao</h1>
        <a href="https://github.com/BernardZhao" class="text-xl">@<span class="hover:underline">BernardZhao</span></a>
        <p class="italic" @click="increment" @mouseover="hover = true" @mouseleave="hover = false">
          {{quotes[counter][0]}}
          <transition
            enter-active-class="transition-opacity duration-150 ease-in-out"
            leave-active-class="transition-opacity duration-150 ease-in-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <span v-if="hover">- {{quotes[counter][1]}}</span>
          </transition>
        </p>
      </div>
      <g-image alt="portrait" src="~/assets/1.jpg" width="800" />
    </div>

    <div class="flex flex-col md:flex-row justify-center"></div>

    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      <h3>About</h3>

      <p>Hi</p>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Me"
  },
  data() {
    return {
      hover: false,
      counter: 0,
      quotes: [
        ["We not new to it, we countin' fluent", "Gunna"],
        ["I'm a salt water alligator eater", "Quavo"]
      ],
      images: [
        
      ]
    };
  },
  methods: {
    increment() {
      if (this.counter < this.quotes.length - 1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    }
  }
};
</script>

<style>
.name {
  font-size: 5rem;
  font-family: alte_din;
}
</style>