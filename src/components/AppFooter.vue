<template>
  <footer class="footer-modern">
    <div class="footer-inner">
      <div class="footer-logo">
        <div class="logo-icon pulse">
          <img src="/assets/logo.png" alt="logo">
        </div>
        <div class="logo-text">
          <span>АГЕНТСТВО ИНТЕРНЕТ-МАРКЕТИНГА</span>
          <span class="name">ВЕБРАЗРАБОТКА</span>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Услуги</h4>
          <a href="#">Разработка сайтов</a>
          <a href="#" @click.prevent="goToSeoPage">SEO продвижение</a>
          <a href="#" @click.prevent="goToContextPage">Контекстная реклама</a>
          <a href="#" @click.prevent="goToSmmPage">SMM продвижение</a>
        </div>
        <div class="footer-col">
          <h4>Компания</h4>
          <a href="#">О нас</a>
          <a href="#">Кейсы</a>
          <a href="#">Отзывы</a>
          <a href="#">Контакты</a>
        </div>
        <div class="footer-col">
          <h4>Контакты</h4>
          <a href="tel:+79056611860">+7 (905) 661-18-60</a>
          <a href="mailto:info@webrazrabotka.ru">info@webrazrabotka.ru</a>
          <div class="social-links">
            <a href="#" class="social-link">TG</a>
            <a href="#" class="social-link">VK</a>
            <a href="#" class="social-link">WA</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2006-2025 ООО «ВЕБРАЗРАБОТКА»</p>
        <p>Информация на сайте не является публичной офертой</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'

const switchPage = inject('switchPage')

const goToSeoPage = () => {
  switchPage('seo')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const goToContextPage = () => {
  switchPage('context')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const goToSmmPage = () => {
  switchPage('smm')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer-modern {
  background: #0a0a0a;
  color: #ffffff;
  padding: 60px 30px 30px;
  margin-top: 60px;
}
.footer-inner { max-width: 1200px; margin: 0 auto; }
.footer-logo { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; }
.footer-logo .logo-icon img { width: 40px; height: 40px; object-fit: contain; filter: brightness(0) invert(1); }
.footer-logo .logo-text span:first-child { font-size: 10px; color: #888; }
.footer-logo .logo-text .name { font-size: 18px; font-weight: bold; color: #ffffff;margin-left: 7px; }
.footer-links { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; }
.footer-col h4 { color: #cc0000; margin-bottom: 15px; font-size: 16px; }
.footer-col a { display: flex; color: #aaa; text-decoration: none; font-size: 14px; margin-bottom: 10px; transition: color 0.3s; cursor: pointer; }
.footer-col a:hover { color: #cc0000; }
.social-links { display: flex; gap: 15px; margin-top: 15px; }
.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
}
.social-link:hover { background: #cc0000; transform: translateY(-2px); }
.footer-bottom { text-align: center; padding-top: 30px; border-top: 1px solid #222; }
.footer-bottom p { color: #666; font-size: 12px; margin-bottom: 5px; }
.pulse { animation: pulse 2s ease-in-out infinite; }
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>
