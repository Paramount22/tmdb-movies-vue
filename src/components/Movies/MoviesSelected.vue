<script setup>
import { ref } from 'vue';
import useGoBack from '../../composables/useGoBack.js';

const emit = defineEmits([
  'top-rated-movies',
  'popular-movies',
  'now-playing',
  'upcoming-movies',
]);

const { selected } = useGoBack();

const options = ref([
  { label: 'Popular', value: 'popular' },
  { label: 'Top rated', value: 'top-rated' },
  { label: 'Now Playing', value: 'now-playing' },
  { label: 'Upcoming', value: 'upcoming' },
]);

const handleOptionChange = () => {
  if (selected.value === 'popular') {
    emit('popular-movies', selected);
  }

  if (selected.value === 'top-rated') {
    emit('top-rated-movies', selected);
  }

  if (selected.value === 'now-playing') {
    emit('now-playing', selected);
  }

  if (selected.value === 'upcoming') {
    emit('upcoming-movies', selected);
  }
};
</script>

<template>
  <select
    v-model="selected"
    @change="handleOptionChange(selected)"
    class="col-start-1 col-end-3 row-start-2 row-end-3 bg-slate-50 border border-slate-300 text-gray-900 px-3 py-2 rounded-lg"
  >
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped></style>
