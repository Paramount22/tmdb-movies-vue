<script setup>
import { ref } from 'vue';
const props = defineProps({ searchFor: String });
const emit = defineEmits(['search-data', 'start-search']);

const query = ref('');

const formSubmitted = () => {
  if (!query.value) return;
  emit('search-data', query.value);
  emit('start-search');
  query.value = '';
};
</script>

<template>
  <form
    class="flex col-start-1 col-end-5 row-start-3 row-end-4"
    @submit.prevent="formSubmitted"
  >
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <input
        type="search"
        id="default-search"
        class="bg-slate-50 border border-slate-300 text-gray-900 px-3 py-2 ps-10 rounded-l-lg outline-none"
        :placeholder="`Search ${searchFor}`"
        v-model="query"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-cyan-900 hover:bg-teal-500 font-medium rounded-r-lg text-sm p-2 transition"
    >
      Search
    </button>
  </form>
</template>

<style scoped></style>
