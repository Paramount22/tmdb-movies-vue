<script setup>
import { RouterLink } from 'vue-router';
const emit = defineEmits(['go-back']);
</script>

<template>
  <span @click.prevent="emit('go-back')" class="text-white cursor-pointer">
    <i
      @click.prevent="emit('go-back')"
      class="fa-solid fa-arrow-left text-white"
    ></i>
    Back</span
  >
</template>

<style lang="scss" scoped></style>
