<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs-inner">
      <a href="/">Главная</a>
      <span class="separator">›</span>
      <span>{{ currentPage }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentPage: String
})
</script>

<style scoped>
.breadcrumbs {
  padding: 15px 30px;
  background: #f8f8f8;
  margin-bottom: 20px;
  padding: 10px 0 !important;
  margin: 0 !important;
}
.breadcrumbs a {
  color: #cc0000;
  text-decoration: none;
  cursor: pointer;
  margin-left: 12px;
}
.breadcrumbs .separator {
  margin: 0 8px;
  color: #999;
}
.breadcrumbs span:last-child {
  color: #666;
}
/* ===== ТЕМНАЯ ТЕМА ===== */
.site-full.dark-mode .breadcrumbs {
  background: rgba(255, 255, 255, 0.03);
}

.site-full.dark-mode .breadcrumbs span:last-child {
  color: #aaaaaa;
}

.site-full.dark-mode .breadcrumbs .separator {
  color: #666;
}
</style>
