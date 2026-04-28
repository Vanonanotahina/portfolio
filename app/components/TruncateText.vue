<template>
  <p @click="toggleText">
    {{ expanded ? props.text : truncatedText }}
  </p>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  text: String,
  max: { type: Number, default: 100 }
})

const expanded = ref(false)
const isMobile = ref(false)

const truncatedText = computed(() => {
  if (!isMobile.value) return props.text

  return props.text.length > props.max
    ? props.text.substring(0, props.max) + "..."
    : props.text
})

function toggleText() {
  expanded.value = !expanded.value
}

onMounted(() => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    isMobile.value = true
  }
})
</script>