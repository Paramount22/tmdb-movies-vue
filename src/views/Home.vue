<script setup>
import { onMounted } from 'vue';
import usePost from '../composables/usePost.js';
import PostCard from '../components/PostCard.vue';

const { posts, fetchAllPosts } = usePost();

onMounted(() => {
  fetchAllPosts();
});

/* const posts = [
  { id: 1, userId: 1, title: 'Post 1', body: 'Lorem ipsum' },
  { id: 2, userId: 1, title: 'Post 2', body: 'Lorem ipsum' },
  { id: 3, userId: 1, title: 'Post 3', body: 'Lorem ipsum' },
]; */
</script>

<template>
  <main class="px-10">
    <div class="flex flex-wrap flex-grow">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
