<script setup>
  import { onMounted } from 'vue'
  import * as d3 from 'd3'

  onMounted(() => {
    let wrapper = d3.select('.wrapper')
    const stops = 36;

    for (let i = 0; i < stops; i++) {
      let newWrapper = wrapper.append('div')
        .classed('layer', true)

      wrapper = newWrapper
    }
  })
</script>

<template>
  <div class="wrapper">
  </div>
</template>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .layer {
    transform: rotate(45deg);
    width: 70vmin;
    aspect-ratio: 1 / 1;
    background-color: hsla(240, 10%, var(--ifLightThenDarkElseLight), .1);
    position: absolute;
    animation:
      12s spin infinite ease-in-out alternate;
    overflow: hidden;
    border-radius: 100% 0;
  }

  .layer > .layer {
    top: 50%;
    left: 50%;
    width: 95%;
    height: 95%;
    transform: translate(-50%, -50%) rotate(var(--rot));
  }

  @property --rot {
    syntax: "<angle>";
    inherits: true;
    initial-value: 3deg;
  }

  @keyframes spin {
    0% { --rot: -137.5deg; }
    100% { --rot: 137.5deg; }
  }
</style>