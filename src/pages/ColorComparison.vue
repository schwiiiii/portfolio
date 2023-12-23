<script setup>
  import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
  import ColorInput from '../components/ColorInput.vue'
  import BsButton from '../components/BsButton.vue'

  const colors = ref([
    { value: '#ff0000' }
  ])

  const computedColors = computed(() => {
    // TODO compute all the values
  })

  const appSettings = inject('appSettings')

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
    <div class="grid">
      <table>
        <thead>
          <tr>
            <th></th>
            <th
              v-for="(color, i) in colors"
              :style="{backgroundColor: color.value, height: '1.5em'}"
              :key="i"
            >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(color1, i1) in colors"
            :key="i1"
          >
            <td :style="{color: color1.value}">{{ color1.value }}</td>
            <td
              v-for="(color2, i2) in colors"
              :key="i2"
              :style="i1 === i2 ? {} : {color: color1.value, backgroundColor: color2.value}"
            >
              {{ i1 === i2 ? '&nbsp;' : color2.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
  .comparison-wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 7fr;
  }

  .sidebar {
    border-right: 1px solid var(--accent);
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>