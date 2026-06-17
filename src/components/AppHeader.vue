<template>
  <header class="header glass">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="info-block"
             v-for="(info, index) in headerInfo"
             :key="info.label"
             :class="{ 'first-block': index === 0 }">
          <div class="clock">
            <p><span>{{ info.days }}</span> {{ info.hours }}</p>
          </div>
          <div class="contact-info">
            <p class="label" :class="{ 'order-label': index === 0 }">{{ info.label }}</p>
            <a :href="`tel:${info.phone}`" :class="{ 'first-phone': index === 0 }">{{ info.phoneFormatted }}</a>
          </div>
        </div>
        <div class="city-select">
          <p class="label">Выбранный город:</p>
          <select v-model="selectedCity">
            <option>Нижний Новгород</option>
            <option>Москва</option>
          </select>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-inner">
        <div class="logo" data-glow>
          <div class="logo-icon pulse">
            <img src="/assets/logo.png" alt="logo">
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
import {ref} from 'vue'

defineProps({
  menuOpen: Boolean
})

defineEmits(['toggleMenu', 'showManagers', 'showOrder', 'scrollToCompany'])

const selectedCity = ref('Нижний Новгород')

const headerInfo = [
  {days: 'ПН', hours: '09 - 21', label: 'Заказать сайт', phone: '+79056611860', phoneFormatted: '+7 (905) 661-18-60'},
  {
    days: 'ПН-ЧТ',
    hours: '09 - 18',
    label: 'Тех. Поддержка/IT/Сео',
    phone: '+78314228599',
    phoneFormatted: '+7 (831) 422-85-59'
  },
  {
    days: 'ПН-ЧТ',
    hours: '09 - 18',
    label: 'Дизайн/Каталоги',
    phone: '+78314228599',
    phoneFormatted: '+7 (831) 422-85-99'
  }
]
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(204, 0, 0, 0.2);
}

.header-top {
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
}

.header-top-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.info-block {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 0 1 auto;
  min-width: 200px;
}

/* Стили для первого блока */
.first-block {
  padding: 8px 15px;
  border-radius: 12px;
  position: relative;
}

.first-block::before {
  font-size: 12px;
  position: absolute;
  top: -6px;
  right: -6px;
  background: white;
  padding: 0 4px;
}

/* Стиль для лейбла "Заказать сайт" */
.order-label {
  margin-left: 12px;
}

.first-phone {
  font-size: 17px !important;
  margin-left: 6px;
}

.first-phone:hover {
  color: #ff1a1a !important;
  text-shadow: 0 0 20px rgba(204, 0, 0, 0.3);
}

.clock p {
  color: #666;
  font-size: 12px;
  white-space: nowrap;
}

.clock span {
  color: #cc0000;
  font-weight: bold;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-info .label {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
}

.contact-info a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  white-space: nowrap;
}

.contact-info a:hover {
  color: #cc0000;
}

.city-select {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.city-select .label {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
}

.city-select select {
  background: #ffffff;
  border: 1px solid #ddd;
  color: #333;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}

.header-bottom {
  padding: 20px 30px;
}

.header-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  flex-shrink: 0;
}

.logo-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-text span:first-child {
  font-size: 10px;
  color: #999;
}

.logo-text .name {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

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
  white-space: nowrap;
}

.neon-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.neon-btn:hover:before {
  left: 100%;
}

.neon-btn:hover {
  background: #ff1a1a;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(204, 0, 0, 0.3);
}

.about-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
  white-space: nowrap;
}

.about-link:hover {
  color: #cc0000;
}

.burger-menu {
  cursor: pointer;
  z-index: 1001;
  display: none;
}

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

.burger:before {
  top: -8px;
}

.burger:after {
  bottom: -8px;
}

.burger.active {
  background: transparent;
}

.burger.active:before {
  transform: rotate(45deg);
  top: 0;
}

.burger.active:after {
  transform: rotate(-45deg);
  bottom: 0;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Адаптив */
@media (max-width: 1200px) {
  .header-top {
    padding: 12px 20px;
  }

  .header-bottom {
    padding: 15px 20px;
  }

  .info-block {
    min-width: 170px;
  }

  .contact-info a {
    font-size: 14px;
  }

  .first-phone {
    font-size: 15px !important;
  }

  .first-block {
    padding: 6px 12px;
  }

  .order-label {
    font-size: 11px !important;
  }
}

@media (max-width: 992px) {
  .header-top-inner {
    justify-content: center;
  }

  .info-block {
    flex: 1 1 auto;
    min-width: 150px;
  }

  .city-select {
    flex: 1 1 100%;
    justify-content: center;
  }

  .first-block {
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .header-top {
    padding: 10px 15px;
  }

  .header-bottom {
    padding: 12px 15px;
  }

  .header-top-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .info-block {
    flex: 1 1 auto;
    min-width: 100%;
    justify-content: flex-start;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .info-block:last-of-type {
    border-bottom: none;
  }

  .contact-info a {
    font-size: 14px;
  }

  .city-select {
    flex: 1 1 100%;
    justify-content: flex-start;
    padding-top: 5px;
  }

  .burger-menu {
    display: block;
  }

  .nav {
    gap: 12px;
  }

  .neon-btn {
    padding: 8px 14px;
    font-size: 13px;
  }

  .about-link {
    font-size: 13px;
  }

  .logo-text .name {
    font-size: 16px;
  }

  .logo-icon img {
    width: 32px;
    height: 32px;
  }

  .first-block {
    padding: 8px 12px;
    margin-bottom: 2px;
  }

  .first-block::before {
    font-size: 10px;
    top: -4px;
    right: -4px;
  }

  .first-phone {
    font-size: 15px !important;
  }

  .order-label {
    font-size: 11px !important;
  }
}

@media (max-width: 480px) {
  .header-top {
    padding: 8px 10px;
  }

  .header-bottom {
    padding: 10px 10px;
  }

  .info-block {
    gap: 10px;
    padding: 6px 0;
  }

  .clock p {
    font-size: 11px;
  }

  .contact-info .label {
    font-size: 10px;
  }

  .contact-info a {
    font-size: 13px;
  }

  .neon-btn {
    padding: 6px 12px;
    font-size: 12px;
  }

  .about-link {
    font-size: 12px;
  }

  .logo-text span:first-child {
    font-size: 8px;
  }

  .logo-text .name {
    font-size: 14px;
  }

  .logo-icon img {
    width: 28px;
    height: 28px;
  }

  .city-select select {
    font-size: 12px;
    padding: 4px 8px;
  }

  .first-block {
    padding: 6px 10px;
  }

  .first-block::before {
    font-size: 9px;
    top: -3px;
    right: -3px;
  }

  .first-phone {
    font-size: 14px !important;
  }

  .order-label {
    font-size: 10px !important;
  }
}
</style>