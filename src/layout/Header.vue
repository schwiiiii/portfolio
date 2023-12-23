<script setup>
  import { inject } from 'vue'
  import DarkMode from '../components/DarkMode.vue'
  import BsMenu from './BsMenu.vue'
  import { RouterLink } from 'vue-router'

  const appSettings = inject('appSettings')
</script>

<template>
  <header :style="{maxWidth: appSettings.layoutWidth.value}">
    <RouterLink class="logo" to="portfolio">BS</RouterLink>
    <div style="display: flex; gap: 10px; align-items: center">
      <DarkMode />
      <BsMenu />
    </div>
  </header>
</template>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;
    width: 100%;
    transition: 200ms ease-out;
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