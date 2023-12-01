import { ref } from 'vue';

export default function useBackToTop() {
  const backToTop = ref();

  const userScroll = () => {
    if (window.scrollY > 500) {
      backToTop.value.classList.add('show-btn');
    } else {
      backToTop.value.classList.remove('show-btn');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    backToTop,
    userScroll,
    scrollToTop,
  };
}
