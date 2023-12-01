<script setup>
import useGoBack from '../../composables/useGoBack.js';

const emit = defineEmits([
  'top-rated-movies',
  'popular-movies',
  'now-playing',
  'upcoming-movies',
]);

const { selected } = useGoBack();
</script>

<template>
  <select
    v-model="selected"
    class="col-start-1 col-end-3 row-start-2 row-end-3 bg-slate-50 border border-slate-300 text-gray-900 px-3 py-2 rounded-lg"
  >
    <option value="popular" @click="emit('popular-movies', selected)">
      Popular
    </option>
    <option @click="emit('top-rated-movies', selected)" value="top-rated">
      Top rated
    </option>
    <option value="now-playing" @click="emit('now-playing', selected)">
      Now Playing
    </option>
    <option value="upcoming" @click="emit('upcoming-movies', selected)">
      Upcoming
    </option>
  </select>
</template>

<style scoped></style>
