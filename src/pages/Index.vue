<template>
  <Layout>
    <div class="flex flex-col-reverse md:flex-row p-6 items-center justify-center">
      <div class="text-center md:text-left w-full md:mr-4 pb-4">
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
      <gallery/>
    </div>

    <article class="prose prose-sm lg:prose-lg xl:prose-xl pl-8 pr-8 pt-8 max-w-none">
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

      <h3>What I've been listening to</h3>
    </article>
    <div class="pl-8 pr-8 pt-4 max-w-none">
      <lastfm :request="{method: 'user.getrecenttracks', user: 'BernardZhao', limit: 5, format: 'json'}">
        <template slot-scope="{ data, error, loading }">
          <div v-if="loading"> Loading... </div>
          <div v-else-if="error">{{error}}</div>
          <div v-else-if="data">
            <song-card v-for="(track, index) in data.recenttracks.track" :key="index" :track="track" />
          </div>
        </template>
      </lastfm>
    </div>
  </Layout>
</template>

<script>
import lastfm from "@/components/LastFM"
import SongCard from "@/components/SongCard"
import Gallery from "@/components/Gallery"
export default {
  metaInfo: {
    title: "Me",
  },
  components: {
    lastfm,
    SongCard,
    Gallery
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