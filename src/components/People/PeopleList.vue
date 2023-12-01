<script setup>
import { onMounted, ref } from 'vue';
import usePeople from '../../composables/usePeople';
import useGoBack from '../../composables/useGoBack.js';
import PersonCard from './PersonCard.vue';
import LoadingIcon from '../../components/LoadingIcon.vue';
import LoadMore from '../LoadMore.vue';
import SearchForm from '../SearchForm.vue';
import GoBack from '../GoBack.vue';

const {
  isLoading,
  people,
  searchQuery,
  fetchPopularPeople,
  fetchMorePopularPeople,
  fetchSearchedPerson,
} = usePeople();

const { goBack, showBack, selected } = useGoBack();

onMounted(() => {
  fetchPopularPeople();
});
</script>

<template>
  <div
    class="grid grid-cols-3 grid-rows-3 gap-3 md:flex md:justify-between md:items-center mb-8"
  >
    <h2
      v-if="selected === 'popular'"
      class="col-start-1 col-end-4 title text-2xl md:mb-2 font-semibold"
    >
      Popular People
    </h2>
    <h2
      v-if="selected === searchQuery"
      class="col-start-1 col-end-4 title text-2xl md:mb-2 font-semibold"
    >
      {{ searchQuery }}
    </h2>

    <SearchForm
      search-for="Person"
      @search-data="(searchQuery = $event), fetchSearchedPerson()"
      @start-search="(showBack = true), (selected = searchQuery)"
    />
    <div></div>
  </div>
  <GoBack v-show="showBack" @go-back="goBack(fetchPopularPeople())" />
  <TransitionGroup
    tag="div"
    name="fade"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
  >
    <PersonCard v-for="person in people" :person="person" :key="person.id" />
  </TransitionGroup>

  <div class="flex justify-center items-center mt-5">
    <LoadMore @load-more-data="fetchMorePopularPeople" :selected="selected" />
  </div>

  <LoadingIcon :isLoading="isLoading" />
</template>

<style lang="scss" scoped></style>
