<script setup>
const emit = defineEmits(['load-more-data']);
const props = defineProps({ selected: String });
</script>

<template>
  <button
    class="bg-cyan-500 py-2 px-4 rounded-md text-white shadow-md hover:bg-cyan-900 transition-all"
    @click="emit('load-more-data')"
    v-show="selected === 'popular'"
  >
    Load more
  </button>
</template>

<style lang="scss" scoped></style>
