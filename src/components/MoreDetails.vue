<script setup>
const props = defineProps({ type: String, typeId: Number });
</script>

<template>
  <a
    :href="`https://www.themoviedb.org/${type}/${typeId}`"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-slate-200 text-sm py-1 px-2 rounded hover:bg-teal-600 hover:text-white transition-all"
    >See more details</a
  >
</template>

<style lang="scss" scoped></style>
