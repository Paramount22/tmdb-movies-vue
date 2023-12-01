<script setup>
import { onMounted, watch } from 'vue';
import usePost from '../composables/usePost';
import useUser from '../composables/useUser';
import { useRoute } from 'vue-router';

const { post, fetchSinglePost } = usePost();
const { user, fetchSingleUser } = useUser();
const route = useRoute();

onMounted(() => {
  /* (async () => {
    await fetchSinglePost(route.params.id);
    await fetchSingleUser(post.value.userId);
  })(); */

  /*  fetchSinglePost(route.params.id).then(() => {
    fetchSingleUser(post.value.userId);
  }); */
  fetchSinglePost(route.params.id);
});

watch(
  () => ({ ...post.value }),
  () => fetchSingleUser(post.value.userId)
);

/* const post = {
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
}; */
/* const user = {
  name: 'Leanne Graham',
}; */
</script>

<template>
  <div v-if="post && user" class="px-10">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
