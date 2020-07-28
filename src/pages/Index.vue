<template>
  <Layout>
    <div class="flex flex-col-reverse md:flex-row p-6 items-center justify-center">
      <div class="text-center md:text-left w-full md:mr-2 pb-4">
        <h1 class="name text-gray-900 leading-tight text-6xl md:text-7xl">Bernard Zhao</h1>
        <a href="https://github.com/BernardZhao" class="text-xl lg:text-2xl">
          @<span class="hover:underline">BernardZhao</span>
        </a>
        <p class="lg:text-lg">Computer Science @ UC Berkeley '21</p>
        <p class="lg:text-lg italic" @click="increment('quotes_counter', quotes.length)" @mouseover="hover = true" @mouseleave="hover = false">
          {{quotes[quotes_counter][0]}}
          <span
            :class="hover ? 'md:opacity-100' : ''"
            class="transition-opacity duration-150 ease-out opacity-100 md:opacity-0 whitespace-no-wrap"
          >- {{quotes[quotes_counter][1]}}</span>
        </p>
      </div>
      <!-- Terrible workaround, until https://github.com/gridsome/gridsome/issues/292 gets fixed. -->
      <g-image
        @click="increment('portraits_counter', 5)"
        class="md:ml-2 rounded-full md:rounded-none object-cover h-64 w-64 md:h-auto md:w-auto"
        :src="require(`!!assets-loader?width=800&quality=100!@images/${portraits[portraits_counter]}`)"
      />
    </div>

    <article class="prose prose-sm lg:prose-lg xl:prose-2xl p-8 max-w-none">
      <h3>About</h3>
      <p>
        I am a student originally from the 916 Sacramento area.
        I love talking about videogames, new rap releases, open source,
        and I'm always working on new hobbies like tennis and photography.
        Hmu to play pool, SSBM, or go shoot photos if you're in the Bay Area!
        The best way to reach me is on
        <a
          href="https://t.me/bernardzhao"
        >Telegram</a>, but also feel free to shoot me an 
        <a href="mailto:bernard.zhao.us@gmail.com">
          email.
        </a>
      </p>
      <p>
        I have been trying to upload more photos to
        <a
          href="https://www.flickr.com/photos/bernardzhao/"
        >Flickr</a>
        , but I'm too lazy 🥱
      </p>

      <h3>Experience</h3>
      <p>
        Check out my resume
        <a href="/Resume.pdf">here</a>.
      </p>

      <g-link to="/blog">
        <h3>Blog &rarr;</h3>
      </g-link>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Me",
  },
  data() {
    return {
      hover: false,
      quotes_counter: 0,
      quotes: [
        ["We not new to it, we countin' fluent", "Gunna"],
        ["I'm a poggrammer", "Me"],
        ["I'm a salt water alligator eater", "Quavo"],
      ],
      portraits_counter: 0,
      portraits: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.png",
      ]
    };
  },
  methods: {
    increment(property, limit) {
      if (this[property] < limit - 1) {
        this[property]++;
      } else {
        this[property] = 0;
      }
    },
  },
};
</script>

<style>
.name {
  font-family: alte_din;
}
</style>