<template>
  <!-- Оверлей для закрытия меню -->
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

      <div class="mobile-menu-logo">
        <img src="/assets/logo.png" alt="Вебразработка">
        <span>ВЕБРАЗРАБОТКА</span>
      </div>

      <!-- ===== ГЛАВНАЯ В САМОМ ВЕРХУ ===== -->
      <div class="mobile-menu-section">
        <div class="mobile-menu-title">Главная</div>
        <a href="#" @click.prevent="goToHomePage">На главную</a>
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
        <a href="#" @click.prevent="goToHomePage">Главная</a>
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

      <div class="mobile-menu-contacts">
        <a href="tel:+79056611860" class="mobile-phone">+7 (905) 661-18-60</a>
        <a href="mailto:info@webrazrabotka.ru" class="mobile-email">info@webrazrabotka.ru</a>
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

const goToHomePage = () => {
  switchPage('home')
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
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

watch(() => props.menuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1500;
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
  z-index: 1600;
  transition: left 0.3s ease;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

@media (prefers-color-scheme: dark) {
  .mobile-menu {
    background: #0d0d0d;
  }
  .mobile-menu-title {
    color: #cc0000 !important;
  }
  .mobile-menu-section a {
    color: #cccccc !important;
  }
  .mobile-menu-section a:hover {
    color: #cc0000 !important;
  }
  .mobile-menu-logo span {
    color: #f0f0f0 !important;
  }
  .mobile-phone,
  .mobile-email {
    color: #cccccc !important;
  }
  .mobile-phone:hover,
  .mobile-email:hover {
    color: #cc0000 !important;
  }
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

@media (prefers-color-scheme: dark) {
  .mobile-menu-close {
    background: #1a1a1a;
    color: #e0e0e0;
  }
}

.mobile-menu-close:hover {
  background: #cc0000;
  color: white;
  transform: rotate(90deg);
}

.mobile-menu-inner {
  padding: 80px 25px 40px;
}

.mobile-menu-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

@media (prefers-color-scheme: dark) {
  .mobile-menu-logo {
    border-bottom-color: rgba(255, 255, 255, 0.05);
  }
}

.mobile-menu-logo img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.mobile-menu-logo span {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.mobile-menu-section {
  margin-bottom: 25px;
}

.mobile-menu-title {
  font-size: 16px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 12px;
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

.mobile-menu-contacts {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (prefers-color-scheme: dark) {
  .mobile-menu-contacts {
    border-top-color: rgba(255, 255, 255, 0.05);
  }
}

.mobile-phone {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

.mobile-email {
  font-size: 14px;
  color: #666;
  text-decoration: none;
}

.mobile-phone:hover,
.mobile-email:hover {
  color: #cc0000;
}

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