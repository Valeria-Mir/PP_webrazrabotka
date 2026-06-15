<template>
  <div class="notification" v-if="show">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  message: String
})
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #cc0000;
  color: white;
  padding: 12px 24px;
  border-radius: 40px;
  z-index: 2000;
  animation: slideIn 0.3s ease;
  box-shadow: 0 5px 20px rgba(204,0,0,0.3);
}
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
