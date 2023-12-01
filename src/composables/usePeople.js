import { ref } from 'vue';
import axios from 'axios';

export default function usePeople() {
  const people = ref([]);
  const person = ref({});
  const isLoading = ref(false);
  const searchQuery = ref('');
  const apiKey = '8335b966aa0001f618384081f205b83d';
  const baseUrl = 'https://api.themoviedb.org/3/';
  const page = ref(1);
  const getPopularPeople = `${baseUrl}person/popular?api_key=${apiKey}&page=${page.value}&language=en`;

  const fetchPopularPeople = () => {
    isLoading.value = true;
    axios
      .get(getPopularPeople)
      .then((response) => {
        // handle success

        people.value = response.data.results;
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const fetchMorePopularPeople = () => {
    isLoading.value = true;
    page.value++;
    axios
      .get(
        `${baseUrl}person/popular?api_key=${apiKey}&page=${page.value}&language=en`
      )
      .then((response) => {
        // handle success

        response.data.results.forEach((data) => {
          people.value.push(data);
        });
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  // single person
  const fetchSinglePerson = (id) => {
    isLoading.value = true;
    axios
      .get(`${baseUrl}person/${id}?api_key=${apiKey}`)
      .then((response) => {
        // handle success
        // console.log(response.data);
        person.value = response.data;
        isLoading.value = false;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const fetchSearchedPerson = () => {
    isLoading.value = true;
    people.value = [];
    axios
      .get(
        `${baseUrl}search/person?api_key=${apiKey}&language=en-US&page=${
          page.value
        }&query=${encodeURI(searchQuery.value)}`
      )
      .then((response) => {
        people.value = response.data.results;
        isLoading.value = false;
      });
  };

  return {
    people,
    person,
    isLoading,
    searchQuery,
    fetchPopularPeople,
    fetchMorePopularPeople,
    fetchSinglePerson,
    fetchSearchedPerson,
  };
}
