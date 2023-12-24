<script setup>
  defineProps({
    modelValue: String
  })

  defineEmits(['update:modelValue'])
</script>

<template>
  <input
    ref="input"
    type="color"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    style="
      width: 100%;
      border-radius: 5px;
      border: 0;
      background-color: var(--accent);
      border: 0;
    "
  />
</template>