<template>
  <header class="header glass">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="info-block" v-for="info in headerInfo" :key="info.label">
          <div class="clock">
            <p><span>{{ info.days }}</span> {{ info.hours }}</p>
          </div>
          <div class="contact-info">
            <p class="label">{{ info.label }}</p>
            <a :href="`tel:${info.phone}`">{{ info.phoneFormatted }}</a>
          </div>
        </div>
        <div class="city-select">
          <p class="label">Выбранный город:</p>
          <select v-model="selectedCity">
            <option>Нижний Новгород</option>
            <option>Москва</option>
            <option>Санкт-Петербург</option>
            <option>Казань</option>
          </select>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="header-bottom-inner">
        <div class="logo" data-glow>
          <div class="logo-icon pulse">
            <img src="@/assets/logo.png" alt="logo">
          </div>
          <div class="logo-text">
            <span>АГЕНТСТВО ИНТЕРНЕТ-МАРКЕТИНГА</span>
            <span class="name">ВЕБРАЗРАБОТКА</span>
          </div>
        </div>
        <div class="nav">
          <div class="burger-menu" @click="$emit('toggleMenu')">
            <span class="burger" :class="{ active: menuOpen }"></span>
          </div>
          <button class="manager-btn neon-btn" @click="$emit('showManagers')">Выбрать менеджера</button>
          <button class="callback-btn neon-btn" @click="$emit('showOrder')">Перезвонить мне</button>
          <a href="#" class="about-link" @click.prevent="$emit('scrollToCompany')">О КОМПАНИИ</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  menuOpen: Boolean
})

defineEmits(['toggleMenu', 'showManagers', 'showOrder', 'scrollToCompany'])

const selectedCity = ref('Нижний Новгород')

const headerInfo = [
  { days: 'ПН', hours: '09 - 21', label: 'Заказать сайт', phone: '+79056611860', phoneFormatted: '+7 (905) 661-18-60' },
  { days: 'ПН-ЧТ', hours: '09 - 18', label: 'Тех. Поддержка/IT/Сео', phone: '+78314228599', phoneFormatted: '+7 (831) 422-85-59' },
  { days: 'ПН-ЧТ', hours: '09 - 18', label: 'Дизайн/Каталоги', phone: '+78314228599', phoneFormatted: '+7 (831) 422-85-99' }
]
</script>

<style scoped>
.header { position: sticky; top: 0; z-index: 1000; background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(204, 0, 0, 0.2); }
.header-top { padding: 15px 30px; border-bottom: 1px solid #eee; }
.header-top-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.info-block { display: flex; align-items: center; gap: 15px; }
.clock p { color: #666; font-size: 12px; }
.clock span { color: #cc0000; font-weight: bold; }
.contact-info .label { font-size: 11px; color: #999; }
.contact-info a { color: #333; text-decoration: none; font-size: 16px; font-weight: bold; transition: color 0.3s; }
.contact-info a:hover { color: #cc0000; }
.city-select select { background: #ffffff; border: 1px solid #ddd; color: #333; padding: 5px; border-radius: 4px; }
.header-bottom { padding: 20px 30px; }
.header-bottom-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.logo { display: flex; align-items: center; gap: 15px; cursor: pointer; }
.logo-icon img { width: 40px; height: 40px; object-fit: contain; }
.logo-text { display: flex; flex-direction: column; }
.logo-text span:first-child { font-size: 10px; color: #999; }
.logo-text .name { font-size: 18px; font-weight: bold; color: #000000; }
.nav { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.neon-btn {
  background: #cc0000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.neon-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}
.neon-btn:hover:before { left: 100%; }
.neon-btn:hover { background: #ff1a1a; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(204, 0, 0, 0.3); }
.about-link { color: #333; text-decoration: none; font-weight: 500; transition: color 0.3s; cursor: pointer; }
.about-link:hover { color: #cc0000; }
.burger-menu { cursor: pointer; z-index: 1001; }
.burger {
  display: block;
  width: 25px;
  height: 3px;
  background: #cc0000;
  position: relative;
  transition: all 0.3s ease;
}
.burger:before, .burger:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background: #cc0000;
  transition: all 0.3s ease;
}
.burger:before { top: -8px; }
.burger:after { bottom: -8px; }
.burger.active { background: transparent; }
.burger.active:before { transform: rotate(45deg); top: 0; }
.burger.active:after { transform: rotate(-45deg); bottom: 0; }
.pulse { animation: pulse 2s ease-in-out infinite; }
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>