<script setup>
  import DarkMode from './DarkMode.vue';
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink class="logo" to="portfolio">BS</RouterLink>
    <DarkMode />
  </header>
</template>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .logo {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
  }

  header nav ul {
    display: flex;
    list-style: none;
    gap: 10px;
    margin: 0;
    padding: 0;
  }
</style>