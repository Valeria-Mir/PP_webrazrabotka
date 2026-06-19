<template>
  <div class="app">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, provide, shallowRef } from 'vue'
import HomePage from './components/HomePage.vue'
import SeoPage from './components/SeoPage.vue'
import ContextPage from './components/ContextPage.vue'
import SmmPage from './components/SmmPage.vue'
import AdvantagesPage from './components/AdvantagesPage.vue'

const currentComponent = shallowRef(HomePage)

const switchPage = (page) => {
  if (page === 'home') {
    currentComponent.value = HomePage
  } else if (page === 'seo') {
    currentComponent.value = SeoPage
  } else if (page === 'context') {
    currentComponent.value = ContextPage
  } else if (page === 'smm') {
    currentComponent.value = SmmPage
  } else if (page === 'advantages') {
    currentComponent.value = AdvantagesPage
  }
}

provide('switchPage', switchPage)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  background: #ffffff;
  color: #1a1a1a;
  transition: background 0.3s ease, color 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0a0a0a;
    color: #f0f0f0;
  }
}

/* Глобальные стили для тёмной темы */
@media (prefers-color-scheme: dark) {
  .glass-card {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
  }
  .glass-card:hover {
    box-shadow: 0 20px 50px rgba(204, 0, 0, 0.15) !important;
    border-color: rgba(204, 0, 0, 0.3) !important;
  }

  .section-title {
    color: #f0f0f0 !important;
  }

  .section-desc {
    color: #aaaaaa !important;
  }

  .section-tag {
    color: #cc0000 !important;
  }
}

</style>