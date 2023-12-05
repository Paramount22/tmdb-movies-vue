<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({ url: String });
</script>

<template>
  <div class="relative z-20 max-w-screen-xl w-screen m-auto px-10 pt-5">
    <RouterLink class="text-white text-xl mt-3" :to="`/${url}`">
      <i class="fa-solid fa-arrow-left text-white"></i> Back
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
