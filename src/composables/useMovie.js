import { ref } from 'vue';
import axios from 'axios';

export default function useMovie() {
  const movies = ref([]);
  const movie = ref({});
  const isLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref('');
  const selected = ref('popular');
  const message = ref('');
  const apiKey = '8335b966aa0001f618384081f205b83d';
  const baseUrl = 'https://api.themoviedb.org/3/';
  const getPopularMovies = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page.value}&language=en`;
  const getTopRatedMovies = `${baseUrl}movie/top_rated?sort_by=popularity.desc&api_key=${apiKey}&page=${page.value}&language=en`;
  const nowPlayingMovies = `${baseUrl}movie/now_playing?api_key=${apiKey}&page=${page.value}`;
  const upcomingMovies = `${baseUrl}movie/upcoming?api_key=${apiKey}&page=${page.value}`;

  const getMovies = (moviesType) => {
    isLoading.value = true;
    emptyMoviesArray;

    axios
      .get(moviesType)
      .then((response) => {
        // handle success
        movies.value = response.data.results;
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const emptyMoviesArray = () => {
    movies.value.splice(0, movies.value.length);
  };

  // all movies
  const fetchAllMovies = () => {
    getMovies(getPopularMovies);
  };

  const fetchTopRatedMovies = () => {
    getMovies(getTopRatedMovies);
  };

  const fetchNowPlayingMovies = () => {
    getMovies(nowPlayingMovies);
  };

  const fetchUpcomingMovies = () => {
    getMovies(upcomingMovies);
  };

  const fetchSearchedMovies = () => {
    isLoading.value = true;
    emptyMoviesArray;
    axios
      .get(
        `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&page=${
          page.value
        }&query=${encodeURI(searchQuery.value)}`
      )
      .then((response) => {
        movies.value = response.data.results;
        isLoading.value = false;
      });
  };

  const fetchMorePopularMovies = () => {
    isLoading.value = true;
    page.value++;

    axios
      .get(
        `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page.value}&language=en`
      )
      .then((response) => {
        // handle success

        response.data.results.forEach((data) => {
          movies.value.push(data);
        });
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  // single movie
  const fetchSingleMovie = (id) => {
    isLoading.value = true;
    axios
      .get(`${baseUrl}movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        // handle success
        // console.log(response.data);
        movie.value = response.data;
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const percentage = (vote) => {
    return Math.floor(vote * 10);
  };

  const getClassByVote = (rating) => {
    if (rating >= 7) return 'bg-red-700';
    if (rating >= 4 && rating < 7) return 'bg-sky-400';
    if (rating < 4 && rating > 0) return 'bg-gray-500';
  };

  const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const usCurrency = (money) => {
    return moneyFormat.format(money);
  };

  const test = () => {
    console.log('OK');
  };

  return {
    fetchAllMovies,
    fetchSingleMovie,
    percentage,
    getClassByVote,
    fetchMorePopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchUpcomingMovies,
    fetchSearchedMovies,
    usCurrency,
    movie,
    movies,
    isLoading,
    searchQuery,
    selected,
    message,
    test,
  };
}
