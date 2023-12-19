<script setup>
  import { faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import FontAwesomeIcon from './FontAwesomeIcon.vue';
</script>

<template>
  <footer>
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
  </footer>
</template>

<style>
  footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--accent);
  }

  footer .footer-nav {
    list-style: none;
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  footer a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }
</style>