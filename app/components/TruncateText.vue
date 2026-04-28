<template>
  <p>{{ displayText }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: String,
  max: { type: Number, default: 100 }
})

const displayText = ref(props.text)

onMounted(() => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    if (props.text.length > props.max) {
      displayText.value = props.text.substring(0, props.max) + "..."
    }
  }
})
</script>