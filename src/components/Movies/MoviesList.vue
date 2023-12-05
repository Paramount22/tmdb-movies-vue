<script setup>
import { onMounted } from 'vue';
import LoadingIcon from '../../components/LoadingIcon.vue';
import useMovie from '../../composables/useMovie.js';
import useGoBack from '../../composables/useGoBack';
import MovieCard from '../../components/Movies/MovieCard.vue';
import LoadMore from '../LoadMore.vue';
import MovieSelected from '../../components/Movies/MoviesSelected.vue';
import SearchForm from '../SearchForm.vue';
import GoBack from '../../components/GoBack.vue';
import MoviesCategoryTitle from '../Movies/MoviesCategoryTitle.vue';

const props = defineProps({ movies: Array });

const {
  fetchAllMovies,
  fetchMorePopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchSearchedMovies,
  searchQuery,
  movies,
  isLoading,
} = useMovie();

const { selected, showBack, message, goBack } = useGoBack();

onMounted(() => {
  fetchAllMovies();
});
</script>

<template>
  <div
    class="grid grid-cols-3 grid-rows-3 gap-3 md:flex md:justify-between md:items-center mb-8"
  >
    <MoviesCategoryTitle v-if="selected === 'popular'"
      >Popular Movies</MoviesCategoryTitle
    >
    <MoviesCategoryTitle v-if="selected === 'top-rated'"
      >Top Rated Movies</MoviesCategoryTitle
    >
    <MoviesCategoryTitle v-if="selected === 'now-playing'"
      >Now Playnig Movies</MoviesCategoryTitle
    >
    <MoviesCategoryTitle v-if="selected === 'upcoming'"
      >Upcoming Movies</MoviesCategoryTitle
    >
    <MoviesCategoryTitle v-if="selected === searchQuery">{{
      searchQuery
    }}</MoviesCategoryTitle>

    <SearchForm
      search-for="Movie"
      @search-data="(searchQuery = $event), fetchSearchedMovies()"
      @start-search="(showBack = true), (selected = searchQuery)"
    />

    <MovieSelected
      @top-rated-movies="fetchTopRatedMovies(), (selected = $event)"
      @popular-movies="fetchAllMovies(), (selected = $event)"
      @now-playing="fetchNowPlayingMovies(), (selected = $event)"
      @upcoming-movies="fetchUpcomingMovies(), (selected = $event)"
    />
  </div>

  <GoBack v-show="showBack" @go-back="goBack(fetchAllMovies())" />
  <h2 v-if="message">{{ message }}</h2>
  <TransitionGroup
    tag="div"
    name="fade"
    class="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
    v-cloak
  >
    <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
  </TransitionGroup>
  <div class="flex justify-center items-center mt-5">
    <LoadMore @load-more-data="fetchMorePopularMovies" :selected="selected" />
  </div>

  <LoadingIcon :isLoading="isLoading" />
</template>

<style scoped></style>
