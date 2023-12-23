<script setup>
  import { ref, computed, onMounted } from 'vue'
  import * as d3 from 'd3'

  const props = defineProps({
    icon: Object
  })

  const linearGradient = ref(null)

  const viewBox = computed(() => `0 0 ${props.icon.icon[0]} ${props.icon.icon[1]}`)
  const path = computed(() => props.icon.icon[4])

  onMounted(() => {
    let gradientArray = []
    let stops = 24

    for (let i = 1; i < stops; i++) {
      gradientArray.push({
        percentage: (i == 1 ? i : (i - 1)) / stops,
        color: d3.scaleSequential(d3.interpolatePlasma)(i / stops)
      })

      if (i !== 1) {
        gradientArray.push({
          percentage: i / stops,
          color: d3.scaleSequential(d3.interpolatePlasma)(i / stops)
        })
      }
      
      if (i == stops - 1) {
        gradientArray.push({
          percentage: i / stops,
          color: d3.scaleSequential(d3.interpolatePlasma)(1)
        })

        gradientArray.push({
          percentage: 1,
          color: d3.scaleSequential(d3.interpolatePlasma)(1)
        })
      }
    }

    d3.select(linearGradient.value)
      .selectAll('stop')
      .data(gradientArray)
      .join('stop')
      .attr('offset', d => `${d.percentage * 100}%`)
      .attr('stop-color', d => d.color)
  })
</script>

<template>
  <svg version="1.1"
    height="1em"
    width="1em"
    :viewBox="viewBox"
    baseProfile="full"
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:ev="http://www.w3.org/2001/xml-events"
  >
    <defs>
      <linearGradient ref="linearGradient" id="rainbow" x1="0" x2="100%" y1="100%" y2="0%" >
      </linearGradient>
    </defs>
    <path :d="path" fill="url('#rainbow')" />
  </svg>
</template>

<style>
  .icon {
    filter: drop-shadow(0 0 0 var(--bg));
    transition: 200ms ease-out;
    cursor: pointer;
    vertical-align: bottom;
  }
  
  .icon:hover {
    filter: drop-shadow(0 5px 5px hsla(240, 10%, 10%, .25));
    transform: scale(1.25);
  }

  .icon:not(:hover) path {
    fill: currentColor !important;
  }
</style>