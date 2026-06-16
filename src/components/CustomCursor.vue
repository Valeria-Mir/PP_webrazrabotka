<template>
  <div class="cursor" :style="{ transform: `translate(${cursorX}px, ${cursorY}px)` }"></div>
  <div class="cursor-follower" :style="{ transform: `translate(${cursorXFollower}px, ${cursorYFollower}px)` }"></div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const cursorX = ref(0)
const cursorY = ref(0)
const cursorXFollower = ref(0)
const cursorYFollower = ref(0)
let timeoutId
const handleMouseMove = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  timeoutId = setTimeout(() => {
    cursorXFollower.value = e.clientX
    cursorYFollower.value = e.clientY
  }, 50)
}
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #cc0000;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
}
.cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #cc0000;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s;
}
@media (max-width: 768px) {
  .cursor, .cursor-follower { display: none; }
}
</style>
