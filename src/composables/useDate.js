import { useDateFormat } from '@vueuse/core';

export default function useDate() {
  const formatDate = (date) => {
    return useDateFormat(date, 'DD/MM/YYYY');
  };

  return {
    formatDate,
  };
}
