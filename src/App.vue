<script setup>
  import { ref, provide } from 'vue'
  import Header from './layout/Header.vue'
  import { RouterView } from 'vue-router'
  import Footer from './layout/Footer.vue'

  const appSettings = ref({
    layoutWidth: {
      default: '60ch',
      value: '60ch'
    },
    transition: {
      default: '600ms cubic-bezier(0.16, 1, 0.3, 1)',
      value: '600ms cubic-bezier(0.16, 1, 0.3, 1)'
    }
  })

  provide('appSettings', appSettings)
</script>

<template>
  <Header />
  <main :style="{maxWidth: appSettings.layoutWidth.value, transition: appSettings.transition.value}">
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
  }
</style>