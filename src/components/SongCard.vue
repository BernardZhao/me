<template>
  <div class="flex items-center p-2">
    <div class="mr-4 flex-shrink-0">
      <img class="w-20 h-20 rounded-full" :class="nowplaying ? 'animate-spin-slow' : ''" :src="track.image[3]['#text']" alt="album art">
    </div>
    <div>
      <h class="text-xl">{{track.name}}<span v-if="nowplaying" class="text-gray-600"> - Now Playing</span></h>
      <p class="text-gray-800">{{track.album['#text']}}</p>
      <p class="text-gray-600">{{track.artist['#text']}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongCard",
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  computed: {
    nowplaying() {
      return this.track['@attr'] && this.track['@attr'].nowplaying ? true : false
    }
  }
};
</script>