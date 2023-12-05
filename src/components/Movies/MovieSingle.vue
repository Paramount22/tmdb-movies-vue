<script setup>
import { onMounted } from 'vue';
import LoadingIcon from '../LoadingIcon.vue';
import MoreDetails from '../MoreDetails.vue';
import useMovie from '../../composables/useMovie';
import useDate from '../../composables/useDate';
import MoviePersonSinleBack from '../MoviePersonSinleBack.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { formatDate } = useDate();

const {
  movie,
  fetchSingleMovie,
  isLoading,
  percentage,
  getClassByVote,
  usCurrency,
} = useMovie();

onMounted(() => {
  fetchSingleMovie(route.params.id);
});
</script>

<template>
  <section
    class="content bg-no-repeat bg-center relative"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/w1280/${movie.poster_path})`,
    }"
  >
    <MoviePersonSinleBack url="movies" />

    <div class="movie-info relative z-20 max-w-screen-xl w-screen m-auto p-10">
      <div class="grid grid-cols-4 gap-5">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :alt="movie.title"
          class="w-full rounded-lg object-cover border-4 hidden lg:block"
        />
        <div class="col-start-1 col-end-5 lg:col-start-2 lg:col-end-4">
          <header class="">
            <h1 class="text-3xl md:text-4xl mb-5 text-white">
              {{ movie.title }}
            </h1>
          </header>
          <div class="flex gap-2 mb-3">
            <p
              class="bg-slate-200 p-1 rounded text-sm"
              v-for="country in movie.production_countries"
            >
              {{ country.name }}
            </p>
          </div>

          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5"
          >
            <p class="text-white pb-2 sm:pb-0">
              <i class="fa-regular fa-clock"></i> {{ movie.runtime }} min
            </p>
            <p class="text-white pb-2 sm:pb-0">
              {{ formatDate(movie.release_date) }}
            </p>
            <p class="text-white">Revenue: {{ usCurrency(movie.revenue) }}</p>
          </div>

          <p class="text-white mb-3 italic text-lg">{{ movie.tagline }}</p>
          <p class="mb-5 text-white text-justify">{{ movie.overview }}</p>
          <div
            class="flex flex-col items-start sm:flex-row justify-between sm:items-center gap-3 mb-5"
          >
            <div class="flex mb-2 sm:mb-0">
              <p
                class="bg-teal-500 mr-2 py-1 px-2 rounded text-white text-sm"
                v-for="genre in movie.genres"
                :key="genre.id"
              >
                {{ genre.name }}
              </p>
            </div>

            <MoreDetails type="movie" :typeId="movie.id" />
          </div>
        </div>
        <span
          class="hidden lg:flex items-center justify-center lg:col-start-4 lg:col-end-5 justify-self-end text-white font-bold h-20 w-20 text-2xl rounded-full"
          :class="getClassByVote(movie.vote_average)"
        >
          {{ percentage(movie.vote_average) }}%</span
        >
      </div>
    </div>

    <div class="overlay absolute w-full h-auto inset-0 z-10"></div>
  </section>

  <LoadingIcon :isLoading="isLoading" />
</template>

<style scoped></style>
