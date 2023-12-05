<script setup>
import { RouterLink, RouterView } from 'vue-router';
import MoviesDarkLightTheme from './components/MoviesDarkLightTheme.vue';
import BackToTop from './components/BackToTop.vue';
</script>

<template>
  <header class="bg-cyan-900 py-5 flex items-center justify-center">
    <div class="max-w-screen-xl px-10 w-screen flex justify-between flex-wrap">
      <nav class="flex justify-start items-center gap-3 mb-2 sm:mb-0">
        <RouterLink to="/movies">
          <img
            src="../public/images/logo.svg"
            width="150"
            alt="Movie database"
          />
        </RouterLink>

        <RouterLink to="/movies"
          ><span class="text-white font-bold hover:text-slate-200 transition"
            >Movies</span
          ></RouterLink
        >
        <RouterLink to="/people"
          ><span class="text-white font-bold hover:text-slate-200 transition"
            >People</span
          ></RouterLink
        >
      </nav>
      <MoviesDarkLightTheme />
    </div>
  </header>
  <main>
    <RouterView />
  </main>

  <BackToTop />

  <footer class="bg-cyan-900 h-20 flex items-center justify-center">
    <div class="max-w-screen-xl px-10 w-screen flex justify-between">
      <nav class="flex justify-start items-center gap-3">
        <RouterLink to="/movies">
          <img
            src="../public/images/logo.svg"
            width="150"
            alt="Movie database"
          />
        </RouterLink>
      </nav>
      <MoviesDarkLightTheme />
    </div>
  </footer>
</template>

<style scoped></style>
