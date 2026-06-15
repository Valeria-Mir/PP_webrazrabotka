<template>
  <div class="scroll-top" v-show="show" @click="scrollToTop">
    <span>↑</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const handleScroll = () => {
  show.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #cc0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(204, 0, 0, 0.3);
}
.scroll-top:hover {
  transform: scale(1.1);
  background: #ff1a1a;
}
.scroll-top span {
  color: white;
  font-size: 24px;
}
</style>
