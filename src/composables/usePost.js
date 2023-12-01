import { ref } from 'vue';

export default function usePost() {
  const posts = ref([]);
  const post = ref({});
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  const fetchAllPosts = async () => {
    const response = await fetch(baseUrl);
    posts.value = await response.json();
  };

  const fetchSinglePost = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);

    post.value = await response.json();
  };

  return {
    posts,
    post,
    fetchAllPosts,
    fetchSinglePost,
  };
}
