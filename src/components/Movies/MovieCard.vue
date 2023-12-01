<script setup>
import { RouterLink } from 'vue-router';
import useMovie from '../../composables/useMovie';
import { useDateFormat } from '@vueuse/core';

const props = defineProps({ movie: Object });

const { percentage, getClassByVote } = useMovie();

const movieRealeseYear = useDateFormat(props.movie.release_date, 'YYYY');
</script>

<template>
  <div
    class="card bg-white min-h-full rounded-md shadow-2xl relative transition transform hover:-translate-y-1"
    v-if="movie.poster_path"
  >
    <RouterLink :to="{ name: 'MovieSingle', params: { id: movie.id } }">
      <img
        :src="`https://image.tmdb.org/t/p/w1280${movie.poster_path}`"
        :alt="movie.original_title"
        class="w-full rounded-t-md object-cover"
      />
      <span
        class="absolute top-2 left-2 text-white font-bold h-7 w-7 p-5 flex items-center justify-center rounded-full"
        :class="getClassByVote(movie.vote_average)"
      >
        {{ percentage(movie.vote_average) }}%</span
      >
      <div class="px-2 py-4 flex justify-between items-center">
        <h2
          class="movie-card-title font-bold text-sm relative top-1 text-gray-800 mb-2 hover:text-teal-500"
          :title="movie.title"
        >
          {{ movie.title }}
        </h2>
        <p class="movie-card-year ml-2 text-slate-800">
          {{ movieRealeseYear }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
