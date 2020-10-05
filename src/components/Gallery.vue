<template>
  <!-- Terrible workaround, until https://github.com/gridsome/gridsome/issues/292 gets fixed. -->
  <figure class="md:ml-4 max-w-lg max-h-lg min-w-lg min-h-lg">
    <g-image
      v-if="portraits_counter == 0"
      @click="increment('portraits_counter', 5)"
      class="rounded-full md:rounded-none object-cover h-64 w-64 md:w-auto md:h-auto"
      src="~/assets/images/1.jpg"
    />
    <g-image
      v-else-if="portraits_counter == 1"
      @click="increment('portraits_counter', 5)"
      class="rounded-full md:rounded-none object-cover h-64 w-64 md:w-auto md:h-auto"
      src="~/assets/images/2.jpg"
    />
    <g-image
      v-else-if="portraits_counter == 2"
      @click="increment('portraits_counter', 5)"
      class="rounded-full md:rounded-none object-cover h-64 w-64 md:w-auto md:h-auto"
      src="~/assets/images/3.jpg"
    />
    <g-image
      v-else-if="portraits_counter == 3"
      @click="increment('portraits_counter', 5)"
      class="rounded-full md:rounded-none object-cover h-64 w-64 md:w-auto md:h-auto"
      src="~/assets/images/4.jpg"
    />
    <g-image
      v-else-if="portraits_counter == 4"
      @click="increment('portraits_counter', 5)"
      class="rounded-full md:rounded-none object-cover h-64 w-64 md:w-auto md:h-auto"
      src="~/assets/images/5.png"
    />
  </figure>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      portraits_counter: 0,
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