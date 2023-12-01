<script setup>
const props = defineProps({ isLoading: Boolean });
</script>

<template>
  <div
    v-if="isLoading"
    class="bg-slate-200 h-full w-full fixed inset-0 flex justify-center items-center z-30"
  >
    <img src="../../public/images/loading.svg" alt="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
