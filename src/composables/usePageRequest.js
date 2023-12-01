import { reactive, computed } from 'vue';

export default function usePageRequest() {
  const activeRequest = reactive([]);

  const isLoading = computed(() => (activeRequest.length ? true : false));

  const makeRequest = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
  };

  return { isLoading, makeRequest };
}
