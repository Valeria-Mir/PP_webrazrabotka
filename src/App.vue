<template>
  <div class="app">
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, provide, shallowRef } from 'vue'
import SeoPage from './components/SeoPage.vue'
import ContextPage from './components/ContextPage.vue'
import SmmPage from './components/SmmPage.vue'
import AdvantagesPage from './components/AdvantagesPage.vue'

const currentComponent = shallowRef(SeoPage)

const switchPage = (page) => {
  if (page === 'seo') {
    currentComponent.value = SeoPage
  } else if (page === 'context') {
    currentComponent.value = ContextPage
  } else if (page === 'smm') {
    currentComponent.value = SmmPage
  }else if (page === 'advantages') {  // ← ДОБАВИТЬ
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
}
</style>