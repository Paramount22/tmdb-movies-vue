import { ref } from 'vue';

export default function useGoBack() {
  const showBack = ref(false);
  const selected = ref('popular');

  const goBack = (fetchType) => {
    fetchType;
    selected.value = 'popular';
    showBack.value = false;
  };

  return {
    goBack,
    showBack,
    selected,
  };
}
