<script setup>
  import { ref, onMounted } from 'vue';
  import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons'
  import FontAwesomeIcon from './FontAwesomeIcon.vue';

  const animationActive = ref(false);

  let localTheme = localStorage.getItem('theme')
  let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  const lightTheme = ref(Boolean((localTheme === null && systemTheme) || (parseInt(localTheme))))

  onMounted(() => {
    updateBodyCustomProperty()
  })
  
  function updateLocal(event) {
    localStorage.setItem('theme', event.target._modelValue ? 1 : 0)
    updateBodyCustomProperty()
    animationActive.value = true
    setTimeout(function() {
      animationActive.value = false
    }, 200)
  }

  function updateBodyCustomProperty() {
    document.body.style.setProperty('--theme', lightTheme.value ? 1 : 0)
  }
</script>

<template>
  <label class="dark-mode" :class="{animate: animationActive}">
    <FontAwesomeIcon :icon="lightTheme ? faCloudMoon : faSun" />

    <input
      v-model="lightTheme"
      type="checkbox"
      @change="updateLocal($event)"
      class="swcag-hidden"
    />
  </label>
</template>

<style>
  .dark-mode {
    font-size: 2rem;
    line-height: 1;
  }

  .dark-mode.animate svg path {
    transform-origin: 50% 50%;
    animation-name: spin;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-duration: 200ms;
    animation-timing-function: ease-out;
  }
  
  .wcag-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  @keyframes spin {
    from {
      transform: rotate(-.125turn);
    }
    to {
      transform: rotate(0);
    }
  }
</style>