<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    relevant: Boolean,
    column: Number,
    color: String,
    backgroundColor: String,
    text: String
  })
  
  const computedContentStyles = computed(() => {
    return props.relevant ? {
      color: props.color,
      backgroundColor: props.backgroundColor,
    } : {}
  })
</script>

<template>
  <div class="grid-cell" :class="{ relevant }" :style="{ gridColumn: column }">
    <p class="cell-content" :style="computedContentStyles">
      <svg
        width="calc(3em + 10%)"
        viewBox="0 0 50 12"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <text
          x="0"
          y="10"
          font-weight="700"
          font-size="smaller"
          textLength="100%"
        >{{ text || '' }}</text>
      </svg>
    </p>
  </div>
</template>

<style>
  .grid-cell {
    padding: 5px;
  }
  
  .cell-content {
    margin: 0;
    border-radius: 5px;
    overflow: hidden;
    line-height: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    transition: 200ms ease-out;
    height: 100%;
    padding: 5px;
  }

  .grid-cell.relevant .cell-content {
    border: 1px solid hsla(240, 10%, var(--ifLightThenDarkElseLight), 50%);
  }
</style>