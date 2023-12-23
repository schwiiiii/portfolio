<script setup>
  import { ref, provide } from 'vue'
  import Header from './layout/Header.vue'
  import { RouterView } from 'vue-router'
  import Footer from './layout/Footer.vue'

  const appSettings = ref({
    layoutWidth: {
      default: '60ch',
      value: '60ch'
    }
  })

  provide('appSettings', appSettings)
</script>

<template>
  <Header />
  <main :style="{maxWidth: appSettings.layoutWidth.value}">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-inline: auto;
    width: 100%;
    transition: 200ms ease-out;
  }
</style>