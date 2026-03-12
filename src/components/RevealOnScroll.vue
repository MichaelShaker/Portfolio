<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const elementRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
  )

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div
      ref="elementRef"
      class="reveal"
      :class="{ visible: isVisible }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(45px);
  transition:
      opacity 0.8s ease,
      transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>