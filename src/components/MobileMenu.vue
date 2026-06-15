<template>
  <div class="mobile-menu" :class="{ open: menuOpen }">
    <div class="mobile-menu-inner">
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Навигация</div>
        <a href="#" @click.prevent="goToSeoPage">SEO продвижение</a>
        <a href="#" @click.prevent="goToContextPage">Контекстная реклама</a>
        <a href="#" @click.prevent="goToSmmPage">SMM продвижение</a>
        <a href="#" @click.prevent="goToAdvantagesPage">Преимущества</a>
      </div>
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Разработка сайтов</div>
        <a href="#">Создание сайта на Bitrix</a>
        <a href="#">Перенос сайта</a>
        <a href="#">Сайт-визитка</a>
      </div>
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Продвижение сайта</div>
        <a href="#" @click.prevent="goToSeoPage">SEO продвижение</a>
        <a href="#" @click.prevent="goToSmmPage">SMM продвижение</a>
        <a href="#">Поисковое продвижение</a>
        <a href="#">Продвижение в Яндексе</a>
      </div>
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Реклама</div>
        <a href="#" @click.prevent="goToContextPage">Контекстная реклама</a>
        <a href="#" @click.prevent="goToSmmPage">SMM продвижение</a>
        <a href="#">Таргетированная реклама</a>
      </div>
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Дизайн</div>
        <a href="#">Создание дизайна</a>
        <a href="#">Разработка логотипа</a>
        <a href="#">Редизайн сайта</a>
      </div>
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">О компании</div>
        <a href="#">О нас</a>
        <a href="#">Кейсы</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  menuOpen: Boolean
})

const emit = defineEmits(['close'])

const switchPage = inject('switchPage')

const goToSeoPage = () => {
  switchPage('seo')
  emit('close')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToContextPage = () => {
  switchPage('context')
  emit('close')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToSmmPage = () => {
  switchPage('smm')
  emit('close')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const goToAdvantagesPage = () => {
  switchPage('advantages')
  emit('close')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: #ffffff;
  z-index: 1000;
  transition: left 0.3s ease;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.mobile-menu.open { left: 0; }
.mobile-menu-inner { padding: 100px 25px 40px; }
.mobile-menu-section { margin-bottom: 30px; }
.mobile-menu-title {
  font-size: 18px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid #cc0000;
}
.mobile-menu-section a {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.3s;
  font-size: 14px;
  cursor: pointer;
}
.mobile-menu-section a:hover {
  color: #cc0000;
  padding-left: 10px;
}
</style>