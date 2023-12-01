import { ref } from 'vue';
import axios from 'axios';

const movies = ref([]);
const isLoading = ref(false);
const apiKey = '8335b966aa0001f618384081f205b83d';
const baseUrl = 'https://api.themoviedb.org/3/';

export default function useMovie() {
  const fetchSearchedMovies = () => {};
}

return {
  fetchSearchedMovies,
};
