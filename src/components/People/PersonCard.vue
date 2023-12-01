<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({ person: Object });
</script>

<template>
  <div
    class="card bg-white min-h-full rounded-md shadow-2xl relative transition transform hover:-translate-y-1"
  >
    <RouterLink :to="{ name: 'PersonSingle', params: { id: person.id } }">
      <img
        v-if="person.profile_path"
        :src="`https://image.tmdb.org/t/p/w1280${person.profile_path}`"
        :alt="person.name"
        class="w-full rounded-t-md object-cover"
      />

      <img
        v-else
        src="../../../public/images/no-image.png"
        :alt="person.name"
        class="w-full rounded-t-md object-cover"
      />

      <div class="px-2 py-4 flex justify-between items-center">
        <h2
          class="movie-card-title font-bold text-sm relative top-1 text-gray-800 mb-2 hover:text-teal-500"
          :title="person.name"
        >
          {{ person.name }}
        </h2>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
