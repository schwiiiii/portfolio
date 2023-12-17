<script setup>
  import { faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import FontAwesomeIcon from './FontAwesomeIcon.vue';
</script>

<template>
  <menu class="footer-nav">
    <li>
      <a
        href="https://codepen.io/schwiiiii"
        target="_blank"
        title="External link in a new tab to my Codepen profile"
      ><FontAwesomeIcon :icon="faCodepen" />Schwiiiii</a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/brett-schwickerath/"
        target="_blank"
        title="External link in a new tab to my LinkedIn profile"
      ><FontAwesomeIcon :icon="faLinkedin" />brett-schwickerath</a>
    </li>
  </menu>
</template>
