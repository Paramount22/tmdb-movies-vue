<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import usePeople from '../../composables/usePeople';
import useDate from '../../composables/useDate';
import MoreDetails from '../MoreDetails.vue';

import LoadingIcon from '../../components/LoadingIcon.vue';
const route = useRoute();

const { person, isLoading, fetchSinglePerson } = usePeople();
const { formatDate } = useDate();
onMounted(() => {
  fetchSinglePerson(route.params.id);
});
</script>

<template>
  <section
    class="content bg-no-repeat bg-center relative"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/w1280/${person.profile_path})`,
    }"
  >
    <div class="movie-info relative z-20 max-w-screen-xl w-screen m-auto p-10">
      <div class="grid grid-cols-4 gap-5">
        <img
          v-if="person.profile_path"
          :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
          :alt="person.name"
          class="w-full rounded-lg object-cover border-4 hidden lg:block"
        />

        <img
          v-else
          src="../../../public/images/no-image.png"
          :alt="person.name"
          class="w-full rounded-lg object-cover border-4 hidden lg:block"
        />
        <div class="col-start-1 col-end-5 lg:col-start-2 lg:col-end-5">
          <header class="">
            <h1 class="text-3xl md:text-4xl mb-5 text-white">
              {{ person.name }}
            </h1>
          </header>
          <div class="flex items-center gap-2 mb-3">
            <p v-if="person.place_of_birth" class="text-white text-sm">
              Birth: {{ formatDate(person.birthday) }}
              {{ person.place_of_birth }}
            </p>
            <span v-if="person.deathday !== null" class="text-white">-</span>
            <p class="text-white text-sm" v-if="person.deathday !== null">
              Death: {{ formatDate(person.deathday) }}
            </p>
          </div>

          <div class="flex gap-2 mb-3">
            <p class="bg-slate-200 p-1 rounded text-sm">
              {{ person.known_for_department }}
            </p>
          </div>
          <p class="mb-5 text-white text-justify">{{ person.biography }}</p>
          <MoreDetails type="person" :typeId="person.id" />
        </div>
      </div>
    </div>

    <div class="overlay absolute w-full h-auto inset-0 z-10"></div>
  </section>
  <LoadingIcon :isLoading="isLoading" />
</template>

<style lang="scss" scoped></style>
