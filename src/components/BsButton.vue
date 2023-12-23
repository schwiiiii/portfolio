<script setup>

</script>

<template>
  <button
    style="
      color: var(--bg);
      border: 0;
      background-color: var(--accent);
      padding: 5px;
      cursor: pointer;
      border-radius: 5px;
    "
  >
    <slot />
  </button>
</template>