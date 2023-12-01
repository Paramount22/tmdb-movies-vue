<script setup>
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode({
  attribute: 'theme',
});
</script>

<template>
  <button
    class="border-2 border-white text-white rounded py-1 px-2 text-sm mt-2 sm:mt-0"
    @click="colorMode === 'dark' ? (colorMode = 'light') : (colorMode = 'dark')"
  >
    <span v-show="colorMode === 'light'">
      Dark <i class="fa-regular fa-moon ml-1"></i>
    </span>
    <span v-show="colorMode === 'dark'">
      Light <i class="fa-regular fa-sun ml-1"></i>
    </span>
  </button>
</template>

<style scoped>
.showButton {
  display: block;
}
</style>
