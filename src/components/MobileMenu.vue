<template>
  <!-- Оверлей для закрытия меню при клике на фон -->
  <Teleport to="body">
    <div
        class="mobile-overlay"
        :class="{ open: menuOpen }"
        @click="closeMenu"
        @touchstart="closeMenu"
    ></div>
  </Teleport>

  <!-- Само меню -->
  <div class="mobile-menu" :class="{ open: menuOpen }">
    <div class="mobile-menu-inner">
      <div class="mobile-menu-close" @click="closeMenu">
        <span>✕</span>
      </div>

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
import { inject, watch } from 'vue'

const props = defineProps({
  menuOpen: Boolean
})

const emit = defineEmits(['close'])

const switchPage = inject('switchPage')

const closeMenu = () => {
  emit('close')
  document.body.style.overflow = ''
}

const goToSeoPage = () => {
  switchPage('seo')
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToContextPage = () => {
  switchPage('context')
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToSmmPage = () => {
  switchPage('smm')
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToAdvantagesPage = () => {
  switchPage('advantages')
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Блокируем скролл при открытии меню
watch(() => props.menuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Оверлей - затемненный фон */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1500; /* БОЛЬШЕ чем у хэдера (1000) */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  cursor: pointer;
}

.mobile-overlay.open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: #ffffff;
  z-index: 1600; /* БОЛЬШЕ чем у оверлея */
  transition: left 0.3s ease;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.mobile-menu.open {
  left: 0;
}

.mobile-menu-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  background: #f5f5f5;
  z-index: 10;
}

.mobile-menu-close:hover {
  background: #cc0000;
  color: white;
  transform: rotate(90deg);
}

.mobile-menu-inner {
  padding: 80px 25px 40px;
}

.mobile-menu-section {
  margin-bottom: 30px;
}

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

/* Адаптив */
@media (max-width: 480px) {
  .mobile-menu {
    width: 85%;
    max-width: 320px;
  }
  .mobile-menu-inner {
    padding: 70px 20px 30px;
  }
  .mobile-menu-close {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>