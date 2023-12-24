<script setup>
  import * as d3 from 'd3'
  import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
  import ColorInput from '../components/ColorInput.vue'
  import BsButton from '../components/BsButton.vue'
  import ColorComparisonGridCell from '../components/ColorComparisonGridCell.vue';

  const colors = ref([0, .2, .4, .6, .8, 1].map(v => {
    return {value: d3.scaleSequential(d3.interpolatePlasma)(v)}
  }))

  const computedColors = computed(() => {
    // TODO compute all the values
  })

  const appSettings = inject('appSettings')

  const computedGridHoverEffects = computed(() => {
    const results = [`.grid { grid-template-columns: ${new Array(colors.value.length + 1).fill('1fr').join(' ')}; grid-template-rows: ${new Array(colors.value.length + 1).fill('1fr').join(' ')}}`]
    let length = colors.value.length
    for (let i = 0; i < length; i++) {
      let colFrs = new Array(length + 1).fill('1fr')
      colFrs.splice(i + 1, 1, '3fr')
      colFrs = colFrs.join(' ')
      let rowFrs = new Array(length + 1).fill('1fr')
      rowFrs.splice(i + 1, 1, '3fr')
      rowFrs = rowFrs.join(' ')
      results.push(
        `.grid:has(.grid-cell:nth-child(${length + 1}n+${i + 1}):hover){grid-template-columns:${colFrs} !important;}.grid:has(.grid-cell:nth-child(-n+${length + ((i + 1) * (length + 1))}):nth-child(n+${(i + 1) * (length + 1)}):hover) { grid-template-rows: ${rowFrs} !important; }`
      )
    }
    return `<style>${results.join('')}</style>`
  })

  onMounted(() => {
    appSettings.value.layoutWidth.value = '100%'
  })

  onUnmounted(() => {
    appSettings.value.layoutWidth.value = appSettings.value.layoutWidth.default
  })

  function addColor() {
    colors.value.push({value: '#ff0000'})
  }

  function removeColor(i) {
    colors.value.splice(i, 1)
  }
</script>

<template>
  <div v-html="computedGridHoverEffects"></div>
  <div class="comparison-wrapper">
    <div class="sidebar">
      <div
        v-for="(color, i) in colors"
        :key="i"
        style="display: flex; gap: 10px;"
      >
        <ColorInput v-model="color.value" />
        <BsButton @click="removeColor(i)">&nbsp;-&nbsp;</BsButton>
      </div>
      <BsButton @click="addColor()">+ Add Color</BsButton>
    </div>
    <div
      class="grid"
      :style="{transition: appSettings.transition.value}"
    >
      <!-- Headings -->
      <ColorComparisonGridCell
        v-for="(color, i) in colors"
        :key="i"
        :column="i + 2"
        :background-color="color.value"
        relevant
      />

      <!-- Rows -->
      <template
        v-for="(color1, i1) in colors"
        :key="i1"
      >
        <!-- Row Heading -->
        <ColorComparisonGridCell
          :column="1"
          :color="color1.value"
          :text="color1.value"
          relevant
        />

        <!-- Grid Cells -->
        <ColorComparisonGridCell
          v-for="(color2, i2) in colors"
          :key="i2"
          :column="i2 + 2"
          :color="color1.value"
          :backgroundColor="color2.value"
          :text="i1 === i2 ? '' : color1.value"
          :relevant="i1 !== i2"
        />
      </template>
    </div>
  </div>
</template>

<style>
  .comparison-wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .sidebar {
    border-right: 1px solid var(--accent);
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 10px;
  }

  .grid {
    display: grid;
    transition: 200ms ease-out;
  }
</style>