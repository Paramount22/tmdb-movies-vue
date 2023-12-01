<script setup>
import { onMounted, onBeforeMount } from 'vue';
import useBackToTop from '../composables/useBackToTop';
const { backToTop, userScroll, scrollToTop } = useBackToTop();

onMounted(() => {
  window.addEventListener('scroll', userScroll);
});
onBeforeMount(() => {
  window.removeEventListener('scroll', userScroll);
});
</script>

<template>
  <button
    ref="backToTop"
    class="bg-gray-400 hidden justify-center items-center p-3 rounded-full fixed bottom-10 right-10"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-angle-up text-2xl text-gray-900"></i>
  </button>
</template>
