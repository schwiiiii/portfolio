<script setup>
  import { computed } from 'vue';
  const currentTheme = computed({
    get: () => {
      if (
        localStorage.getItem('theme')
        || window.matchMedia('(prefers-color-scheme: dark)').matches
      ) return 1;
      return 0;
    },
    set: (value) => {
      if (value) localStorage.setItem('theme', 1);
      else localStorage.removeItem('theme');
    },
  });
</script>

<template>
  <label>
    <input v-model="currentTheme" type="checkbox" />
  </label>
</template>
