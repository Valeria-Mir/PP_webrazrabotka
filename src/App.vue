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
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(204, 0, 0, 0.1);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(204, 0, 0, 0.1);
}

.section-title {
  color: #1a1a1a;
}

.section-desc {
  color: #888;
}

.section-tag {
  color: #cc0000;
}
</style>