<script setup>
  import DarkMode from './DarkMode.vue';
</script>

<template>
  <a class="logo" href="/portfolio">
    BS
  </a>
  <DarkMode />
</template>

<style>
  #header .logo {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
  }

  #header nav ul {
    display: flex;
    list-style: none;
    gap: 10px;
    margin: 0;
    padding: 0;
  }
</style>