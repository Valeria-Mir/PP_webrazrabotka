<template>
  <div class="site-full">
    <CustomCursor />

    <AppHeader
        :menuOpen="menuOpen"
        @toggleMenu="toggleMenu"
        @showManagers="showManagersModal = true"
        @showOrder="showOrderModal = true"
        @scrollToCompany="scrollToCompany"
    />

    <MobileMenu :menuOpen="menuOpen" @close="closeMenu" />

    <!-- ГЕРОЙ -->
    <section class="hero-section">
      <div class="hero-bg">
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
        <div class="glow glow-3"></div>
        <div class="line-group">
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
        </div>
        <div class="dot-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-label">АГЕНТСТВО ИНТЕРНЕТ-МАРКЕТИНГА</div>
          <h1 class="hero-title">
            <span class="title-light">ВЕБ</span>
            <span class="title-bold">РАЗРАБОТКА</span>
          </h1>
          <p class="hero-desc">Создание сайтов, реклама, продвижение, дизайн, Авито в Нижнем Новгороде</p>
          <div class="hero-actions">
            <button class="btn-primary" @click="showOrderModal = true">Заказать сайт</button>
            <button class="btn-secondary" @click="scrollToServices">Узнать больше</button>
          </div>
          <div class="hero-metrics">
            <div class="metric" v-for="m in metrics" :key="m.label">
              <span class="metric-value">{{ m.value }}</span>
              <span class="metric-label">{{ m.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- УСЛУГИ -->
    <section class="services-section" id="services">
      <div class="section-bg">
        <div class="wave wave-s-1"></div>
        <div class="wave wave-s-2"></div>
        <div class="glow glow-s-1"></div>
        <div class="glow glow-s-2"></div>
        <div class="line-group line-group-s">
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
        </div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Услуги</span>
          <h2 class="section-title">Что мы <span>делаем</span></h2>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(s, i) in services" :key="i">
            <div class="service-icon">
              <img :src="s.icon" :alt="s.title">
            </div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <button class="service-link" @click="goToServicePage(i)">Подробнее →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ПРЕДЛОЖЕНИЯ -->
    <section class="offers-section">
      <div class="section-bg">
        <div class="wave wave-o-1"></div>
        <div class="wave wave-o-2"></div>
        <div class="glow glow-o-1"></div>
        <div class="glow glow-o-2"></div>
        <div class="dot-pattern dot-pattern-o"></div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Предложения</span>
          <h2 class="section-title">Для вашего <span>бизнеса</span></h2>
        </div>
        <div class="offers-grid">
          <div class="offer-card" v-for="(o, i) in offers" :key="i">
            <div class="offer-number">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ o.title }}</h3>
            <p>{{ o.desc }}</p>
            <button class="offer-btn" @click="showOrderModal = true">Открыть форму →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- РЕШЕНИЯ -->
    <section class="solutions-section">
      <div class="section-bg">
        <div class="wave wave-sol-1"></div>
        <div class="glow glow-sol-1"></div>
        <div class="glow glow-sol-2"></div>
        <div class="line-group line-group-sol">
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
        </div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Решения</span>
          <h2 class="section-title">Эффективные <span>инструменты</span></h2>
        </div>
        <div class="solutions-grid">
          <div class="solution-item" v-for="s in solutions" :key="s.title">
            <div class="solution-icon">
              <img :src="s.icon" :alt="s.title">
            </div>
            <div class="solution-price">{{ s.price }}</div>
            <div class="solution-name">{{ s.title }}</div>
          </div>
        </div>
        <div class="bonus-list">
          <span class="bonus" v-for="b in bonuses" :key="b">{{ b }}</span>
        </div>
      </div>
    </section>

    <!-- ЦИФРЫ -->
    <section class="stats-section">
      <div class="section-bg">
        <div class="wave wave-st-1"></div>
        <div class="wave wave-st-2"></div>
        <div class="glow glow-st-1"></div>
        <div class="glow glow-st-2"></div>
        <div class="dot-pattern dot-pattern-st"></div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Цифры</span>
          <h2 class="section-title">Мы в <span>цифрах</span></h2>
        </div>
        <div class="stats-grid">
          <div class="stat-block" v-for="s in statsData" :key="s.label">
            <span class="stat-num">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
        <div class="stats-text">
          <p>Более 2500 сайтов за 16 лет — маркетинговый подход с продуманными инструментами для увеличения продаж. Предлагаем супервыгодное предложение — пакеты "всё включено".</p>
          <button class="btn-outline" @click="scrollToPrices">Подробнее →</button>
        </div>
      </div>
    </section>

    <!-- ЦЕНЫ -->
    <section class="prices-section" id="prices">
      <div class="section-bg">
        <div class="wave wave-p-1"></div>
        <div class="glow glow-p-1"></div>
        <div class="glow glow-p-2"></div>
        <div class="line-group line-group-p">
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
        </div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Цены</span>
          <h2 class="section-title">Наши <span>тарифы</span></h2>
        </div>
        <div class="prices-grid">
          <div class="price-card" v-for="(p, i) in prices" :key="i" :class="{ featured: i % 3 === 1 }">
            <h3>{{ p.title }}</h3>
            <div class="price-amount">{{ p.price }}</div>
            <p>{{ p.desc }}</p>
            <button class="price-btn" @click="showOrderModal = true">Заказать</button>
          </div>
        </div>
      </div>
    </section>

    <!-- КАЛЬКУЛЯТОР -->
    <section class="calculator-section">
      <div class="section-bg">
        <div class="wave wave-c-1"></div>
        <div class="wave wave-c-2"></div>
        <div class="glow glow-c-1"></div>
        <div class="glow glow-c-2"></div>
        <div class="glow glow-c-3"></div>
        <div class="dot-pattern dot-pattern-c"></div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Калькулятор</span>
          <h2 class="section-title">Рассчитайте <span>стоимость</span></h2>
        </div>
        <div class="calculator-box">
          <div class="calc-tabs">
            <button class="calc-tab" v-for="(t, i) in calcTabs" :key="i" :class="{ active: activeTab === i }" @click="activeTab = i">{{ t }}</button>
          </div>
          <div class="calc-items">
            <div class="calc-item" v-for="(s, i) in currentServices" :key="i">
              <label class="calc-check">
                <input type="checkbox" @change="toggleCalc(i)">
                <span class="checkmark"></span>
              </label>
              <div class="calc-info">
                <h4>{{ s.title }}</h4>
                <p>{{ s.desc }}</p>
              </div>
              <span class="calc-price">{{ s.price }}</span>
            </div>
          </div>
          <div class="calc-total">
            <span>Цена:</span>
            <span class="total-amount">{{ totalPrice }}</span>
            <button class="btn-primary" @click="showOrderModal = true">ДАЛЕЕ →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- МЕНЕДЖЕРЫ -->
    <section class="managers-section">
      <div class="section-bg">
        <div class="wave wave-m-1"></div>
        <div class="glow glow-m-1"></div>
        <div class="glow glow-m-2"></div>
        <div class="line-group line-group-m">
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
          <span class="line-item"></span>
        </div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Команда</span>
          <h2 class="section-title">Выберите <span>менеджера</span></h2>
        </div>
        <div class="managers-grid">
          <div class="manager-card" v-for="m in managers" :key="m.id" @click="selectManager(m)">
            <div class="manager-photo">
              <img :src="m.image" :alt="m.name">
            </div>
            <h4>{{ m.name }}</h4>
            <span class="manager-role">менеджер</span>
            <span class="manager-phone">{{ m.phoneFormatted }}</span>
            <button class="manager-btn">Выбрать</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ФОРМА -->
    <section class="form-section">
      <div class="section-bg">
        <div class="wave wave-f-1"></div>
        <div class="wave wave-f-2"></div>
        <div class="glow glow-f-1"></div>
        <div class="glow glow-f-2"></div>
        <div class="glow glow-f-3"></div>
        <div class="dot-pattern dot-pattern-f"></div>
      </div>
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Контакты</span>
          <h2 class="section-title">Свяжитесь <span>с нами</span></h2>
        </div>
        <div class="form-wrapper">
          <div class="form-info">
            <h3>Индивидуальные условия для вашего бизнеса</h3>
            <p>Оставьте заявку — мы свяжемся с вами для консультации</p>
            <div class="form-contacts">
              <a href="tel:+79056611860">+7 (905) 661-18-60</a>
              <a href="mailto:info@webrazrabotka.ru">info@webrazrabotka.ru</a>
            </div>
          </div>
          <form class="form-fields" @submit.prevent="submitForm" novalidate>
            <div class="field-group">
              <div class="form-group" :class="{ 'has-error': errors.name }">
                <input
                    type="text"
                    v-model="form.name"
                    placeholder="Имя *"
                    @blur="validateField('name')"
                    @input="validateField('name')"
                    required
                >
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <div class="form-group">
                <input type="text" v-model="form.company" placeholder="Компания">
              </div>
            </div>
            <div class="field-group">
              <div class="form-group" :class="{ 'has-error': errors.phone }">
                <input
                    type="tel"
                    v-model="form.phone"
                    placeholder="+7 (___) ___-__-__"
                    @blur="validateField('phone')"
                    @input="handlePhoneInput"
                    required
                    maxlength="18"
                >
                <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
              </div>
              <div class="form-group" :class="{ 'has-error': errors.email }">
                <input
                    type="email"
                    v-model="form.email"
                    placeholder="Email *"
                    @blur="validateField('email')"
                    @input="validateField('email')"
                    required
                >
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
            </div>
            <div class="field-group">
              <div class="form-group">
                <input type="text" v-model="form.site" placeholder="Адрес сайта">
              </div>
              <div class="form-group">
                <input type="text" v-model="form.city" placeholder="Город">
              </div>
            </div>
            <div class="form-group">
              <select v-model="form.service">
                <option value="" disabled selected>Выберите услугу</option>
                <option>Разработка сайта</option>
                <option>Контекстная реклама</option>
                <option>SEO продвижение</option>
                <option>SMM продвижение</option>
                <option>Ведение Авито</option>
              </select>
            </div>
            <div class="form-group" :class="{ 'has-error': errors.agree }">
              <label class="agree">
                <input type="checkbox" v-model="form.agree" @change="validateField('agree')" required>
                <span>Согласие на обработку персональных данных</span>
              </label>
              <span class="error-message" v-if="errors.agree">{{ errors.agree }}</span>
            </div>
            <button type="submit" class="btn-primary full" :disabled="loading">
              {{ loading ? 'ОТПРАВКА...' : 'Отправить заявку' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <AppFooter />

    <Modals
        :showOrderModal="showOrderModal"
        :showManagersModal="showManagersModal"
        orderTitle="Заявка на услугу"
        :showSiteField="true"
        @update:showOrderModal="showOrderModal = $event"
        @update:showManagersModal="showManagersModal = $event"
        @orderSubmitted="handleNotification"
    />

    <ScrollTop />
    <Notification :show="notification.show" :message="notification.message" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive, inject } from 'vue'
import CustomCursor from './CustomCursor.vue'
import AppHeader from './AppHeader.vue'
import MobileMenu from './MobileMenu.vue'
import AppFooter from './AppFooter.vue'
import Modals from './Modals.vue'
import ScrollTop from './ScrollTop.vue'
import Notification from './Notification.vue'

import alenaImg from '/assets/alena_fominykh.jpg'
import svetlanaImg from '/assets/svetlana.jpeg'
import ritaImg from '/assets/rita.jpg'
import yuliyaImg from '/assets/yuliya.png'
import kristinaImg from '/assets/kristina.jpg'

const switchPage = inject('switchPage')

const showOrderModal = ref(false)
const showManagersModal = ref(false)
const menuOpen = ref(false)
const notification = ref({ show: false, message: '' })
const activeTab = ref(0)
const selectedServices = ref([])
const serviceCheckboxes = ref({})
const loading = ref(false)

let starInterval

const form = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  site: '',
  city: '',
  service: '',
  agree: false
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  agree: ''
})

// ===== ВАЛИДАЦИЯ =====

const validateName = (value) => {
  if (!value || value.trim().length === 0) {
    return 'Пожалуйста, введите ваше имя'
  }
  if (value.trim().length < 2) {
    return 'Имя должно содержать минимум 2 символа'
  }
  if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(value.trim())) {
    return 'Имя может содержать только буквы'
  }
  return ''
}

const validatePhone = (value) => {
  if (!value || value.trim().length === 0) {
    return 'Пожалуйста, введите номер телефона'
  }
  const digits = value.replace(/\D/g, '')
  if (digits.length === 0) {
    return 'Введите номер телефона'
  }
  if (digits.length < 10) {
    return 'Номер должен содержать минимум 10 цифр'
  }
  if (digits.length > 11) {
    return 'Номер слишком длинный (максимум 11 цифр)'
  }
  if (digits.length === 11) {
    const firstDigit = digits[0]
    if (firstDigit !== '7' && firstDigit !== '8') {
      return 'Номер должен начинаться с +7 или 8'
    }
    const operatorCode = digits.substring(1, 2)
    if (operatorCode !== '9') {
      return 'Некорректный код оператора (должен начинаться с 9)'
    }
  }
  if (digits.length === 10) {
    if (digits[0] !== '9') {
      return 'Номер должен начинаться с 9'
    }
  }
  return ''
}

const validateEmail = (value) => {
  if (!value || value.trim().length === 0) {
    return 'Пожалуйста, введите email'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value.trim())) {
    return 'Введите корректный email (например: name@domain.ru)'
  }
  return ''
}

const validateAgree = (value) => {
  if (!value) {
    return 'Необходимо согласие на обработку персональных данных'
  }
  return ''
}

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = validateName(form.name)
      break
    case 'phone':
      errors.phone = validatePhone(form.phone)
      break
    case 'email':
      errors.email = validateEmail(form.email)
      break
    case 'agree':
      errors.agree = validateAgree(form.agree)
      break
  }
}

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 0) return ''
  const limitedDigits = digits.slice(0, 11)
  let formatted = ''
  if (limitedDigits.length <= 1) {
    formatted = '+' + limitedDigits
  } else if (limitedDigits.length <= 4) {
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1)
    formatted = '+' + firstDigit + ' (' + areaCode
  } else if (limitedDigits.length <= 7) {
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart
  } else if (limitedDigits.length <= 9) {
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4, 7)
    const secondPart = limitedDigits.slice(7)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart + '-' + secondPart
  } else {
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4, 7)
    const secondPart = limitedDigits.slice(7, 9)
    const thirdPart = limitedDigits.slice(9, 11)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart + '-' + secondPart + '-' + thirdPart
  }
  return formatted
}

const handlePhoneInput = (e) => {
  const value = e.target.value
  const formatted = formatPhone(value)
  if (formatted !== form.phone) {
    form.phone = formatted
  }
  validateField('phone')
}

const isFormValid = computed(() => {
  const nameValid = form.name && form.name.trim().length >= 2 && /^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(form.name.trim())
  const phoneDigits = form.phone.replace(/\D/g, '')
  const phoneValid = phoneDigits && phoneDigits.length >= 10 && phoneDigits.length <= 11
  const emailValid = form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  const agreeValid = form.agree
  return nameValid && phoneValid && emailValid && agreeValid && !errors.name && !errors.phone && !errors.email && !errors.agree
})

const metrics = [
  { value: '16', label: 'лет на рынке' },
  { value: '2500+', label: 'сайтов создано' },
  { value: '2000+', label: 'рекламных кампаний' },
  { value: '100+', label: 'сайтов на поддержке' }
]

import homeIcon from '/assets/inet.png'
import mechokIcon from '/assets/reklama.png'
import chapockaIcon from '/assets/seo.png'
import moneyIcon from '/assets/avito2.svg'
import molniaIcon from '/assets/vk2.png'
import settingsIcon from '/assets/progrmirovanie.png'
import Telefon from '/assets/telefon.png'
import Obcl from '/assets/obclyzivanie.png'

const services = [
  { icon: homeIcon, title: 'Разработка сайтов', desc: 'Уникальные сайты под ключ с продуманной стратегией.' },
  { icon: mechokIcon, title: 'Контекстная реклама', desc: 'Настройка рекламных кампаний в Яндекс.Директ, Google Ads.' },
  { icon: chapockaIcon, title: 'SEO-продвижение', desc: 'Вывод сайта в ТОП поисковых систем и рост трафика.' },
  { icon: moneyIcon, title: 'Ведение Авито', desc: 'Профессиональное управление аккаунтами на Авито.' },
  { icon: molniaIcon, title: 'Продвижение в VK', desc: 'Комплексное SMM продвижение в социальных сетях.' },
  { icon: settingsIcon, title: 'Программирование', desc: 'Разработка сложных модулей и интеграций.' }
]

const offers = [
  { title: 'Для среднего и мелкого бизнеса', desc: 'Оптимальные решения для роста бизнеса с минимальными вложениями.' },
  { title: 'Для крупного бизнеса', desc: 'Комплексные решения для масштабирования и автоматизации.' }
]

const solutions = [
  { icon: homeIcon, price: 'от 40.000 ₽', title: 'Сайты' },
  { icon: Telefon, price: 'от 150.000 ₽', title: 'iOS, Android' },
  { icon: mechokIcon, price: 'от 4.500 ₽', title: 'Реклама' },
  { icon: Obcl, price: 'от 0 ₽', title: 'Обслуживание' }
]

const bonuses = [
  'Мобильная версия сайта в подарок',
  '1С Bitrix – любая сложность',
  'VK, Instagram от 10 тыс. руб.'
]

const statsData = [
  { value: '16', label: 'лет на рынке' },
  { value: '2500+', label: 'сайтов создано' },
  { value: '2000+', label: 'рекламных кампаний' },
  { value: '100+', label: 'сайтов на поддержке' }
]

const prices = [
  { title: 'Обслуживание в рамках хостинга', price: '0 ₽', desc: 'Обслуживание 100%' },
  { title: 'Быстрое продвижение по городам', price: 'от 15 000 ₽', desc: 'Быстрое продвижение' },
  { title: 'VK, Instagram от 10 тыс. руб.', price: '10 000 ₽', desc: 'VK, Instagram, Facebook' },
  { title: 'Программирование по ТЗ', price: '0 ₽', desc: 'Средний и Крупный бизнес' },
  { title: 'Мобильная версия в подарок', price: 'от 15 000 ₽', desc: 'Мобильная версия сайта' },
  { title: 'Продвижение - комплекс', price: '20 000 ₽', desc: 'Комплексное развитие' },
  { title: '1С Bitrix – любая сложность', price: '0 ₽', desc: '1С Bitrix' },
  { title: 'Яндекс Директ - бесплатно', price: '0 ₽', desc: 'При заказе пакета' },
  { title: 'Конфигураторы, конструкторы', price: 'от 4 000 ₽', desc: 'Индивидуальные решения' },
  { title: 'Мобильные приложения', price: '300 000 ₽', desc: 'Сложные онлайн решения' }
]

const calcTabs = ['Сайты', 'Мобильные приложения', 'Программирование', 'Контент', 'Реклама и SMM', 'Прочие услуги']

const calculatorData = {
  'Сайты': [
    { title: 'Сайт по макету', desc: '1 из 300 макетов на выбор. Замена текста и картинок. Сборка сайта. Сборка системы.', price: '25 000 ₽' },
    { title: 'Эксклюзивный сайт', desc: 'Эксклюзивный дизайн. Сборка сайта. Сборка системы.', price: '35 000 ₽' }
  ],
  'Мобильные приложения': [
    { title: 'iOS (без админ-панели)', desc: 'Разработка мобильного приложения для iOS.', price: '150 000 ₽' },
    { title: 'Android (без админ-панели)', desc: 'Разработка мобильного приложения для Android.', price: '150 000 ₽' },
    { title: 'iOS & Android (без панели)', desc: 'Разработка приложений для обеих платформ.', price: '250 000 ₽' },
    { title: 'iOS (с админ-панелью)', desc: 'Разработка iOS приложения с админ-панелью.', price: '300 000 ₽' },
    { title: 'Android (с админ-панелью)', desc: 'Разработка Android приложения с админ-панелью.', price: '300 000 ₽' },
    { title: 'iOS & Android (с панелью)', desc: 'Разработка приложений для обеих платформ с админ-панелью.', price: '500 000 ₽' }
  ],
  'Программирование': [
    { title: 'Разработка уникальных систем', desc: 'Создание сложных программных систем и решений.', price: 'от 100 000 ₽' },
    { title: 'Оптимизация скорости сайта', desc: 'Ускорение загрузки и оптимизация производительности.', price: 'от 8 000 ₽' },
    { title: 'Калькуляторы', desc: 'Разработка калькуляторов любой сложности.', price: 'от 8 000 ₽' },
    { title: 'Доработка функционала', desc: 'Модификация и доработка существующего функционала.', price: 'от 5 000 ₽' }
  ],
  'Контент': [
    { title: 'Наполнение сайта', desc: 'Заполнение сайта контентом и информацией.', price: 'от 10 000 ₽' },
    { title: 'Копирайтинг', desc: 'Написание уникальных текстов для сайта.', price: 'от 1 000 ₽/стр' }
  ],
  'Реклама и SMM': [
    { title: 'Контекстная реклама', desc: 'Настройка и ведение контекстной рекламы.', price: 'от 10 000 ₽' },
    { title: 'Ведение соцсетей', desc: 'Комплексное ведение социальных сетей.', price: 'от 15 000 ₽/мес' }
  ],
  'Прочие услуги': [
    { title: 'Техподдержка', desc: 'Техническая поддержка и обслуживание сайта.', price: 'от 5 000 ₽/мес' },
    { title: 'Аудит сайта', desc: 'Комплексный аудит сайта и рекомендации.', price: 'от 10 000 ₽' }
  ]
}

const currentServices = computed(() => {
  const tab = calcTabs[activeTab.value]
  return calculatorData[tab] || []
})

const managers = [
  { id: 1, name: 'Алёна', image: alenaImg, phone: '+79081670603', phoneFormatted: '+7 908 167-06-03', email: 'alena@webrazrabotka.ru' },
  { id: 2, name: 'Светлана', image: svetlanaImg, phone: '+79103884549', phoneFormatted: '+7 910 388-45-49', email: 'sveta@webbrazrabotka.ru' },
  { id: 3, name: 'Маргарита', image: ritaImg, phone: '+79081612062', phoneFormatted: '+7 908 161-20-62', email: 'rita@webbrazrabotka.ru' },
  { id: 4, name: 'Юлия', image: yuliyaImg, phone: '+79082318418', phoneFormatted: '+7 908 231-84-18', email: 'julia@webrazrabotka.ru' },
  { id: 5, name: 'Кристина', image: kristinaImg, phone: '+79990793009', phoneFormatted: '+7 999 079-30-09', email: 'kristina@webrazrabotka.ru' }
]

const totalPrice = computed(() => {
  const total = selectedServices.value.reduce((sum, s) => {
    const priceStr = s.price.replace(/[^\d]/g, '')
    const num = parseInt(priceStr)
    return sum + (isNaN(num) ? 0 : num)
  }, 0)
  return total > 0 ? `${total.toLocaleString()} ₽` : '0 ₽'
})

// ===== ФУНКЦИИ ПЕРЕХОДА НА СТРАНИЦЫ УСЛУГ =====
const goToServicePage = (index) => {
  const pageMap = {
    0: 'home',      // Разработка сайтов - на главную
    1: 'context',   // Контекстная реклама
    2: 'seo',       // SEO-продвижение
    3: 'home',      // Ведение Авито - на главную (если нет отдельной страницы)
    4: 'smm',       // Продвижение в VK
    5: 'home'       // Программирование - на главную
  }

  const page = pageMap[index] || 'home'
  switchPage(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToCompany = () => {
  document.querySelector('.hero-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToServices = () => {
  document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToPrices = () => {
  document.querySelector('.prices-section')?.scrollIntoView({ behavior: 'smooth' })
}

const toggleCalc = (idx) => {
  const services = currentServices.value
  const service = services[idx]
  const key = service.title + service.price

  if (serviceCheckboxes.value[key]) {
    delete serviceCheckboxes.value[key]
    selectedServices.value = selectedServices.value.filter(s => s.title !== service.title)
  } else {
    serviceCheckboxes.value[key] = true
    selectedServices.value.push(service)
  }
}

const selectManager = (manager) => {
  showManagersModal.value = false
  handleNotification({ message: `Вы выбрали менеджера ${manager.name}. Специалист свяжется с вами.` })
}

const submitForm = async () => {
  validateField('name')
  validateField('phone')
  validateField('email')
  validateField('agree')

  if (!isFormValid.value) {
    const firstError = document.querySelector('.form-group.has-error input, .form-group.has-error input[type="checkbox"]')
    if (firstError) {
      firstError.focus()
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    handleNotification({ message: 'Пожалуйста, исправьте ошибки в форме' })
    return
  }

  loading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    handleNotification({ message: 'Заявка отправлена! Менеджер свяжется с вами.' })
    form.name = ''
    form.company = ''
    form.phone = ''
    form.email = ''
    form.site = ''
    form.city = ''
    form.service = ''
    form.agree = false
    errors.name = ''
    errors.phone = ''
    errors.email = ''
    errors.agree = ''
  } catch (error) {
    handleNotification({ message: 'Произошла ошибка при отправке. Попробуйте позже.' })
  } finally {
    loading.value = false
  }
}

const handleNotification = (data) => {
  notification.value = { show: true, message: data.message }
  setTimeout(() => { notification.value.show = false }, 3000)
}

const createStars = () => {
  starInterval = setInterval(() => {
    const star = document.createElement('div')
    star.className = 'star'
    star.style.left = Math.random() * 100 + '%'
    star.style.top = Math.random() * 100 + '%'
    star.style.animationDuration = Math.random() * 3 + 2 + 's'
    document.body.appendChild(star)
    setTimeout(() => star.remove(), 5000)
  }, 3000)
}

onMounted(() => { createStars() })
onUnmounted(() => { if (starInterval) clearInterval(starInterval) })
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

.site-full {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
  position: relative;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 30px; position: relative; z-index: 1; }

/* ============================================ */
/* ===== ФОНОВЫЕ ЭЛЕМЕНТЫ ===== */
/* ============================================ */

.wave {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.08;
  animation: waveFloat 8s ease-in-out infinite;
}

.wave-1 { width: 500px; height: 500px; background: #cc0000; top: -200px; right: -100px; }
.wave-2 { width: 350px; height: 350px; background: #cc0000; bottom: -100px; left: -80px; animation-delay: 2s; }
.wave-3 { width: 250px; height: 250px; background: #cc0000; top: 40%; right: 30%; animation-delay: 4s; opacity: 0.05; }

@keyframes waveFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -40px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}

.glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  animation: glowPulse 6s ease-in-out infinite;
}

.glow-1 { width: 400px; height: 400px; background: rgba(204, 0, 0, 0.12); top: 10%; right: 5%; }
.glow-2 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.08); bottom: 20%; left: -50px; animation-delay: 2s; }
.glow-3 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.15); top: 50%; left: 20%; animation-delay: 4s; }

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 1; }
}

.line-group {
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0.06;
}

.line-item {
  display: block;
  width: 80px;
  height: 2px;
  background: #cc0000;
  border-radius: 2px;
  animation: lineSlide 4s ease-in-out infinite;
}
.line-item:nth-child(2) { width: 120px; animation-delay: 0.5s; }
.line-item:nth-child(3) { width: 60px; animation-delay: 1s; }
.line-item:nth-child(4) { width: 100px; animation-delay: 1.5s; }
.line-item:nth-child(5) { width: 140px; animation-delay: 2s; }

@keyframes lineSlide {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(20px); opacity: 1; }
}

.dot-pattern {
  position: absolute;
  pointer-events: none;
  background-image:
      radial-gradient(circle, rgba(204, 0, 0, 0.06) 2px, transparent 2px),
      radial-gradient(circle, rgba(204, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 40px 40px, 20px 20px;
  background-position: 0 0, 20px 20px;
  opacity: 0.5;
  animation: patternFloat 20s linear infinite;
}

@keyframes patternFloat {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

/* ============================================ */
/* ===== HERO ===== */
/* ============================================ */

.hero-section {
  padding: 80px 0 60px;
  background: linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.hero-bg .line-group { top: 15%; right: 8%; }
.hero-bg .dot-pattern { top: 20%; left: 5%; width: 300px; height: 300px; }

/* ============================================ */
/* ===== СЕКЦИИ ===== */
/* ============================================ */

.section-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.services-section,
.offers-section,
.solutions-section,
.stats-section,
.prices-section,
.calculator-section,
.managers-section,
.form-section {
  position: relative;
  overflow: hidden;
}

/* ----- SERVICES ----- */
.services-section { padding: 80px 0; background: #ffffff; }
.services-section .wave-s-1 { width: 300px; height: 300px; background: #cc0000; top: 10%; right: -50px; opacity: 0.06; animation-delay: 1s; }
.services-section .wave-s-2 { width: 200px; height: 200px; background: #cc0000; bottom: 5%; left: -30px; opacity: 0.08; animation-delay: 3s; }
.services-section .glow-s-1 { width: 250px; height: 250px; background: rgba(204, 0, 0, 0.08); top: 30%; left: -40px; animation-delay: 1s; }
.services-section .glow-s-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.06); bottom: 20%; right: 10%; animation-delay: 3s; }
.services-section .line-group-s { top: 25%; left: 5%; }

/* ----- OFFERS ----- */
.offers-section { padding: 80px 0; background: #f8f6f5; }
.offers-section .wave-o-1 { width: 350px; height: 350px; background: #cc0000; bottom: -80px; right: -80px; opacity: 0.06; animation-delay: 2s; }
.offers-section .wave-o-2 { width: 200px; height: 200px; background: #cc0000; top: 10%; left: -40px; opacity: 0.08; animation-delay: 4s; }
.offers-section .glow-o-1 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.07); top: 20%; right: 10%; animation-delay: 1s; }
.offers-section .glow-o-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 30%; left: 5%; animation-delay: 3s; }
.offers-section .dot-pattern-o { top: 30%; right: 5%; width: 250px; height: 250px; }

/* ----- SOLUTIONS ----- */
.solutions-section { padding: 80px 0; background: #ffffff; }
.solutions-section .wave-sol-1 { width: 280px; height: 280px; background: #cc0000; top: 15%; right: -40px; opacity: 0.06; animation-delay: 1.5s; }
.solutions-section .glow-sol-1 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.08); bottom: 10%; left: -30px; animation-delay: 2s; }
.solutions-section .glow-sol-2 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.10); top: 40%; right: 15%; animation-delay: 4s; }
.solutions-section .line-group-sol { top: 20%; right: 5%; }

/* ----- STATS ----- */
.stats-section { padding: 80px 0; background: #f8f6f5; }
.stats-section .wave-st-1 { width: 320px; height: 320px; background: #cc0000; top: -60px; left: -60px; opacity: 0.06; animation-delay: 1s; }
.stats-section .wave-st-2 { width: 220px; height: 220px; background: #cc0000; bottom: 10%; right: 5%; opacity: 0.08; animation-delay: 3s; }
.stats-section .glow-st-1 { width: 280px; height: 280px; background: rgba(204, 0, 0, 0.07); top: 30%; right: 10%; animation-delay: 1s; }
.stats-section .glow-st-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 20%; left: 5%; animation-delay: 3s; }
.stats-section .dot-pattern-st { top: 15%; left: 10%; width: 280px; height: 280px; }

/* ----- PRICES ----- */
.prices-section { padding: 80px 0; background: #ffffff; }
.prices-section .wave-p-1 { width: 250px; height: 250px; background: #cc0000; bottom: -50px; right: -30px; opacity: 0.07; animation-delay: 2s; }
.prices-section .glow-p-1 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.08); top: 20%; left: -20px; animation-delay: 1s; }
.prices-section .glow-p-2 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.06); bottom: 30%; right: 10%; animation-delay: 3s; }
.prices-section .line-group-p { top: 15%; left: 5%; }

/* ----- CALCULATOR ----- */
.calculator-section { padding: 80px 0; background: #f8f6f5; }
.calculator-section .wave-c-1 { width: 300px; height: 300px; background: #cc0000; top: -80px; right: -50px; opacity: 0.06; animation-delay: 1s; }
.calculator-section .wave-c-2 { width: 200px; height: 200px; background: #cc0000; bottom: 10%; left: -40px; opacity: 0.08; animation-delay: 3s; }
.calculator-section .glow-c-1 { width: 250px; height: 250px; background: rgba(204, 0, 0, 0.07); top: 25%; right: 10%; animation-delay: 1s; }
.calculator-section .glow-c-2 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.10); bottom: 20%; left: 10%; animation-delay: 3s; }
.calculator-section .glow-c-3 { width: 150px; height: 150px; background: rgba(204, 0, 0, 0.12); top: 50%; right: 30%; animation-delay: 5s; }
.calculator-section .dot-pattern-c { top: 30%; left: 5%; width: 250px; height: 250px; }

/* ----- MANAGERS ----- */
.managers-section { padding: 80px 0; background: #ffffff; }
.managers-section .wave-m-1 { width: 280px; height: 280px; background: #cc0000; bottom: -60px; right: -40px; opacity: 0.06; animation-delay: 2s; }
.managers-section .glow-m-1 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.08); top: 15%; left: -30px; animation-delay: 1s; }
.managers-section .glow-m-2 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.06); bottom: 25%; right: 10%; animation-delay: 3s; }
.managers-section .line-group-m { top: 30%; right: 5%; }

/* ----- FORM ----- */
.form-section { padding: 80px 0; background: #f8f6f5; }
.form-section .wave-f-1 { width: 350px; height: 350px; background: #cc0000; top: -100px; left: -80px; opacity: 0.05; animation-delay: 1s; }
.form-section .wave-f-2 { width: 250px; height: 250px; background: #cc0000; bottom: 10%; right: -50px; opacity: 0.07; animation-delay: 3s; }
.form-section .glow-f-1 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.07); top: 20%; right: 10%; animation-delay: 1s; }
.form-section .glow-f-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 30%; left: 5%; animation-delay: 3s; }
.form-section .glow-f-3 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.12); top: 45%; left: 25%; animation-delay: 5s; }
.form-section .dot-pattern-f { top: 10%; right: 5%; width: 300px; height: 300px; }

/* ============================================ */
/* ===== ОБЩИЕ СТИЛИ ===== */
/* ============================================ */

.section-tag {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #cc0000;
  font-weight: 600;
  margin-bottom: 10px;
}
.section-head { text-align: center; margin-bottom: 50px; }
.section-title { font-size: 38px; font-weight: 300; color: #1a1a1a; letter-spacing: -0.5px; }
.section-title span { color: #cc0000; font-weight: 600; }

/* BUTTONS */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background: #cc0000;
  color: #fff;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}
.btn-primary:hover { background: #b30000; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(204, 0, 0, 0.2); }
.btn-primary.full { width: 100%; justify-content: center; }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

.btn-secondary {
  padding: 14px 36px;
  background: transparent;
  color: #1a1a1a;
  border: 1.5px solid #e0e0e0;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary:hover { border-color: #cc0000; color: #cc0000; }

.btn-outline {
  padding: 12px 32px;
  background: transparent;
  color: #1a1a1a;
  border: 1.5px solid #e0e0e0;
  border-radius: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-outline:hover { border-color: #cc0000; color: #cc0000; }

/* HERO CONTENT */
.hero-content { position: relative; z-index: 1; }
.hero-label { font-size: 12px; letter-spacing: 4px; color: #999; text-transform: uppercase; margin-bottom: 16px; }
.hero-title { font-size: 64px; font-weight: 300; letter-spacing: 4px; line-height: 1.1; margin-bottom: 16px; }
.title-light { color: #cc0000; font-weight: 700; }
.title-bold { color: #1a1a1a; font-weight: 700; }
.hero-desc { font-size: 16px; color: #888; max-width: 500px; line-height: 1.6; margin-bottom: 32px; letter-spacing: 0.3px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 50px; }

/* ============================================ */
/* ===== HERO METRICS ===== */
/* ============================================ */

.hero-metrics {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  border-top: 1px solid #f0f0f0;
  padding-top: 30px;
  justify-content: space-between;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0;
  min-width: 140px;
}

.metric-value {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 1px;
  line-height: 1.2;
}

.metric-label {
  font-size: 11px;
  color: #999;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 4px;
  line-height: 1.3;
}

/* ============================================ */
/* ===== АДАПТИВ ДЛЯ МЕТРИК ===== */
/* ============================================ */

@media (max-width: 1024px) {
  .hero-metrics {
    gap: 20px;
    justify-content: center;
  }
  .metric {
    min-width: 120px;
    flex: 0 1 auto;
    align-items: center;
    text-align: center;
  }
  .metric-value { font-size: 28px; }
  .metric-label { font-size: 10px; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 40px; }
  .services-grid { grid-template-columns: 1fr; }
  .offers-grid { grid-template-columns: 1fr; gap: 20px; }
  .solutions-grid { grid-template-columns: 1fr 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .prices-grid { grid-template-columns: repeat(2, 1fr); }
  .managers-grid { grid-template-columns: repeat(2, 1fr); }
  .form-wrapper { grid-template-columns: 1fr; gap: 30px; padding: 24px; }
  .field-group { grid-template-columns: 1fr; }
  .section-title { font-size: 28px; }
  .bonus-list { gap: 20px; }
  .calculator-box { padding: 20px; }
  .calc-item { flex-wrap: wrap; gap: 10px; }
  .calc-price { min-width: 80px; }
  .calc-tabs { gap: 6px; }
  .calc-tab { padding: 8px 14px; font-size: 12px; }
  /* Убираем display: none для кругов, оставляем только для старых элементов */
  .wave, .glow, .line-group, .dot-pattern { display: none; }

  /* ===== МОБИЛЬНЫЙ ФОН С КРУГАМИ (усиленный) ===== */
  /* Красные круги на фоне для мобильной версии */
  .hero-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 8s ease-in-out infinite;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 10s ease-in-out infinite reverse;
  }

  .services-section::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -60px;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 7s ease-in-out infinite;
  }

  .services-section::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: -70px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.10) 0%, rgba(204, 0, 0, 0.03) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 9s ease-in-out infinite reverse;
  }

  .offers-section::before {
    content: '';
    position: absolute;
    top: 30%;
    right: -50px;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 6s ease-in-out infinite;
  }

  .solutions-section::before {
    content: '';
    position: absolute;
    top: 15%;
    left: -40px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 11s ease-in-out infinite;
  }

  .stats-section::before {
    content: '';
    position: absolute;
    bottom: 20%;
    right: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.13) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 8s ease-in-out infinite reverse;
  }

  .prices-section::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -50px;
    width: 170px;
    height: 170px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 7s ease-in-out infinite;
  }

  .calculator-section::before {
    content: '';
    position: absolute;
    bottom: 30%;
    right: -40px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.14) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 5s ease-in-out infinite;
  }

  .managers-section::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -30px;
    width: 110px;
    height: 110px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 4s ease-in-out infinite;
  }

  .form-section::before {
    content: '';
    position: absolute;
    bottom: 10%;
    left: -30px;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.13) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 6s ease-in-out infinite reverse;
  }

  /* Анимация плавающих кругов */
  @keyframes floatCircle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(10px, -15px) scale(1.05);
    }
    50% {
      transform: translate(-5px, 10px) scale(0.95);
    }
    75% {
      transform: translate(15px, 5px) scale(1.02);
    }
  }
}

/* ============================================ */
/* ===== МОБИЛЬНЫЙ ФОН С КРУГАМИ ДЛЯ 430px И МЕНЬШЕ ===== */
/* ============================================ */

@media (max-width: 430px) {
  /* Увеличиваем размеры и насыщенность кругов для маленьких экранов */
  .hero-section::before {
    width: 250px !important;
    height: 250px !important;
    top: -80px !important;
    right: -80px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.08) 30%, transparent 70%) !important;
  }

  .hero-section::after {
    width: 200px !important;
    height: 200px !important;
    bottom: -60px !important;
    left: -60px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .services-section::before {
    width: 180px !important;
    height: 180px !important;
    right: -40px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .services-section::after {
    width: 140px !important;
    height: 140px !important;
    left: -50px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 30%, transparent 70%) !important;
  }

  .offers-section::before {
    width: 120px !important;
    height: 120px !important;
    right: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .solutions-section::before {
    width: 180px !important;
    height: 180px !important;
    left: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.17) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .stats-section::before {
    width: 150px !important;
    height: 150px !important;
    right: -40px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.19) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .prices-section::before {
    width: 130px !important;
    height: 130px !important;
    left: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.17) 0%, rgba(204, 0, 0, 0.05) 30%, transparent 70%) !important;
  }

  .calculator-section::before {
    width: 100px !important;
    height: 100px !important;
    right: -25px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.07) 30%, transparent 70%) !important;
  }

  .managers-section::before {
    width: 90px !important;
    height: 90px !important;
    right: -20px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.07) 30%, transparent 70%) !important;
  }

  .form-section::before {
    width: 100px !important;
    height: 100px !important;
    left: -20px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }
}

/* ============================================ */
/* ===== СПЕЦИАЛЬНО ДЛЯ 367px И МЕНЬШЕ ===== */
/* ============================================ */

* { margin: 0; padding: 0; box-sizing: border-box; }

.site-full {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
  position: relative;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 30px; position: relative; z-index: 1; }

/* ============================================ */
/* ===== ФОНОВЫЕ ЭЛЕМЕНТЫ ===== */
/* ============================================ */

.wave {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.08;
  animation: waveFloat 8s ease-in-out infinite;
}

.wave-1 { width: 500px; height: 500px; background: #cc0000; top: -200px; right: -100px; }
.wave-2 { width: 350px; height: 350px; background: #cc0000; bottom: -100px; left: -80px; animation-delay: 2s; }
.wave-3 { width: 250px; height: 250px; background: #cc0000; top: 40%; right: 30%; animation-delay: 4s; opacity: 0.05; }

@keyframes waveFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -40px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}

.glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  animation: glowPulse 6s ease-in-out infinite;
}

.glow-1 { width: 400px; height: 400px; background: rgba(204, 0, 0, 0.12); top: 10%; right: 5%; }
.glow-2 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.08); bottom: 20%; left: -50px; animation-delay: 2s; }
.glow-3 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.15); top: 50%; left: 20%; animation-delay: 4s; }

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 1; }
}

.line-group {
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0.06;
}

.line-item {
  display: block;
  width: 80px;
  height: 2px;
  background: #cc0000;
  border-radius: 2px;
  animation: lineSlide 4s ease-in-out infinite;
}
.line-item:nth-child(2) { width: 120px; animation-delay: 0.5s; }
.line-item:nth-child(3) { width: 60px; animation-delay: 1s; }
.line-item:nth-child(4) { width: 100px; animation-delay: 1.5s; }
.line-item:nth-child(5) { width: 140px; animation-delay: 2s; }

@keyframes lineSlide {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(20px); opacity: 1; }
}

.dot-pattern {
  position: absolute;
  pointer-events: none;
  background-image:
      radial-gradient(circle, rgba(204, 0, 0, 0.06) 2px, transparent 2px),
      radial-gradient(circle, rgba(204, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 40px 40px, 20px 20px;
  background-position: 0 0, 20px 20px;
  opacity: 0.5;
  animation: patternFloat 20s linear infinite;
}

@keyframes patternFloat {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

/* ============================================ */
/* ===== HERO ===== */
/* ============================================ */

.hero-section {
  padding: 80px 0 60px;
  background: linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.hero-bg .line-group { top: 15%; right: 8%; }
.hero-bg .dot-pattern { top: 20%; left: 5%; width: 300px; height: 300px; }

/* ============================================ */
/* ===== СЕКЦИИ ===== */
/* ============================================ */

.section-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.services-section,
.offers-section,
.solutions-section,
.stats-section,
.prices-section,
.calculator-section,
.managers-section,
.form-section {
  position: relative;
  overflow: hidden;
}

/* ----- SERVICES ----- */
.services-section { padding: 80px 0; background: #ffffff; }
.services-section .wave-s-1 { width: 300px; height: 300px; background: #cc0000; top: 10%; right: -50px; opacity: 0.06; animation-delay: 1s; }
.services-section .wave-s-2 { width: 200px; height: 200px; background: #cc0000; bottom: 5%; left: -30px; opacity: 0.08; animation-delay: 3s; }
.services-section .glow-s-1 { width: 250px; height: 250px; background: rgba(204, 0, 0, 0.08); top: 30%; left: -40px; animation-delay: 1s; }
.services-section .glow-s-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.06); bottom: 20%; right: 10%; animation-delay: 3s; }
.services-section .line-group-s { top: 25%; left: 5%; }

/* ----- OFFERS ----- */
.offers-section { padding: 80px 0; background: #f8f6f5; }
.offers-section .wave-o-1 { width: 350px; height: 350px; background: #cc0000; bottom: -80px; right: -80px; opacity: 0.06; animation-delay: 2s; }
.offers-section .wave-o-2 { width: 200px; height: 200px; background: #cc0000; top: 10%; left: -40px; opacity: 0.08; animation-delay: 4s; }
.offers-section .glow-o-1 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.07); top: 20%; right: 10%; animation-delay: 1s; }
.offers-section .glow-o-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 30%; left: 5%; animation-delay: 3s; }
.offers-section .dot-pattern-o { top: 30%; right: 5%; width: 250px; height: 250px; }

/* ----- SOLUTIONS ----- */
.solutions-section { padding: 80px 0; background: #ffffff; }
.solutions-section .wave-sol-1 { width: 280px; height: 280px; background: #cc0000; top: 15%; right: -40px; opacity: 0.06; animation-delay: 1.5s; }
.solutions-section .glow-sol-1 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.08); bottom: 10%; left: -30px; animation-delay: 2s; }
.solutions-section .glow-sol-2 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.10); top: 40%; right: 15%; animation-delay: 4s; }
.solutions-section .line-group-sol { top: 20%; right: 5%; }

/* ----- STATS ----- */
.stats-section { padding: 80px 0; background: #f8f6f5; }
.stats-section .wave-st-1 { width: 320px; height: 320px; background: #cc0000; top: -60px; left: -60px; opacity: 0.06; animation-delay: 1s; }
.stats-section .wave-st-2 { width: 220px; height: 220px; background: #cc0000; bottom: 10%; right: 5%; opacity: 0.08; animation-delay: 3s; }
.stats-section .glow-st-1 { width: 280px; height: 280px; background: rgba(204, 0, 0, 0.07); top: 30%; right: 10%; animation-delay: 1s; }
.stats-section .glow-st-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 20%; left: 5%; animation-delay: 3s; }
.stats-section .dot-pattern-st { top: 15%; left: 10%; width: 280px; height: 280px; }

/* ----- PRICES ----- */
.prices-section { padding: 80px 0; background: #ffffff; }
.prices-section .wave-p-1 { width: 250px; height: 250px; background: #cc0000; bottom: -50px; right: -30px; opacity: 0.07; animation-delay: 2s; }
.prices-section .glow-p-1 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.08); top: 20%; left: -20px; animation-delay: 1s; }
.prices-section .glow-p-2 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.06); bottom: 30%; right: 10%; animation-delay: 3s; }
.prices-section .line-group-p { top: 15%; left: 5%; }

/* ----- CALCULATOR ----- */
.calculator-section { padding: 80px 0; background: #f8f6f5; }
.calculator-section .wave-c-1 { width: 300px; height: 300px; background: #cc0000; top: -80px; right: -50px; opacity: 0.06; animation-delay: 1s; }
.calculator-section .wave-c-2 { width: 200px; height: 200px; background: #cc0000; bottom: 10%; left: -40px; opacity: 0.08; animation-delay: 3s; }
.calculator-section .glow-c-1 { width: 250px; height: 250px; background: rgba(204, 0, 0, 0.07); top: 25%; right: 10%; animation-delay: 1s; }
.calculator-section .glow-c-2 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.10); bottom: 20%; left: 10%; animation-delay: 3s; }
.calculator-section .glow-c-3 { width: 150px; height: 150px; background: rgba(204, 0, 0, 0.12); top: 50%; right: 30%; animation-delay: 5s; }
.calculator-section .dot-pattern-c { top: 30%; left: 5%; width: 250px; height: 250px; }

/* ----- MANAGERS ----- */
.managers-section { padding: 80px 0; background: #ffffff; }
.managers-section .wave-m-1 { width: 280px; height: 280px; background: #cc0000; bottom: -60px; right: -40px; opacity: 0.06; animation-delay: 2s; }
.managers-section .glow-m-1 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.08); top: 15%; left: -30px; animation-delay: 1s; }
.managers-section .glow-m-2 { width: 220px; height: 220px; background: rgba(204, 0, 0, 0.06); bottom: 25%; right: 10%; animation-delay: 3s; }
.managers-section .line-group-m { top: 30%; right: 5%; }

/* ----- FORM ----- */
.form-section { padding: 80px 0; background: #f8f6f5; }
.form-section .wave-f-1 { width: 350px; height: 350px; background: #cc0000; top: -100px; left: -80px; opacity: 0.05; animation-delay: 1s; }
.form-section .wave-f-2 { width: 250px; height: 250px; background: #cc0000; bottom: 10%; right: -50px; opacity: 0.07; animation-delay: 3s; }
.form-section .glow-f-1 { width: 300px; height: 300px; background: rgba(204, 0, 0, 0.07); top: 20%; right: 10%; animation-delay: 1s; }
.form-section .glow-f-2 { width: 200px; height: 200px; background: rgba(204, 0, 0, 0.09); bottom: 30%; left: 5%; animation-delay: 3s; }
.form-section .glow-f-3 { width: 180px; height: 180px; background: rgba(204, 0, 0, 0.12); top: 45%; left: 25%; animation-delay: 5s; }
.form-section .dot-pattern-f { top: 10%; right: 5%; width: 300px; height: 300px; }

/* ============================================ */
/* ===== ОБЩИЕ СТИЛИ ===== */
/* ============================================ */

.section-tag {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #cc0000;
  font-weight: 600;
  margin-bottom: 10px;
}
.section-head { text-align: center; margin-bottom: 50px; }
.section-title { font-size: 38px; font-weight: 300; color: #1a1a1a; letter-spacing: -0.5px; }
.section-title span { color: #cc0000; font-weight: 600; }

/* BUTTONS */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background: #cc0000;
  color: #fff;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}
.btn-primary:hover { background: #b30000; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(204, 0, 0, 0.2); }
.btn-primary.full { width: 100%; justify-content: center; }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

.btn-secondary {
  padding: 14px 36px;
  background: transparent;
  color: #1a1a1a;
  border: 1.5px solid #e0e0e0;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary:hover { border-color: #cc0000; color: #cc0000; }

.btn-outline {
  padding: 12px 32px;
  background: transparent;
  color: #1a1a1a;
  border: 1.5px solid #e0e0e0;
  border-radius: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-outline:hover { border-color: #cc0000; color: #cc0000; }

/* HERO CONTENT */
.hero-content { position: relative; z-index: 1; }
.hero-label { font-size: 12px; letter-spacing: 4px; color: #999; text-transform: uppercase; margin-bottom: 16px; }
.hero-title { font-size: 64px; font-weight: 300; letter-spacing: 4px; line-height: 1.1; margin-bottom: 16px; }
.title-light { color: #cc0000; font-weight: 700; }
.title-bold { color: #1a1a1a; font-weight: 700; }
.hero-desc { font-size: 16px; color: #888; max-width: 500px; line-height: 1.6; margin-bottom: 32px; letter-spacing: 0.3px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 50px; }

/* ============================================ */
/* ===== HERO METRICS ===== */
/* ============================================ */

.hero-metrics {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  border-top: 1px solid #f0f0f0;
  padding-top: 30px;
  justify-content: space-between;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0;
  min-width: 140px;
}

.metric-value {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 1px;
  line-height: 1.2;
}

.metric-label {
  font-size: 11px;
  color: #999;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 4px;
  line-height: 1.3;
}

/* ============================================ */
/* ===== SERVICES GRID ===== */
/* ============================================ */

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.service-card {
  padding: 30px 24px;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.service-card:hover { border-color: #cc0000; transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03); }
.service-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.service-icon img { width: 48px; height: 48px; object-fit: contain; }
.service-card h3 { font-size: 18px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
.service-card p { font-size: 14px; color: #888; line-height: 1.6; margin-bottom: 14px; }
.service-link { background: none; border: none; color: #cc0000; font-size: 14px; font-weight: 500; cursor: pointer; padding: 0; transition: all 0.3s ease; }
.service-link:hover { transform: translateX(4px); }

/* ============================================ */
/* ===== OFFERS GRID ===== */
/* ============================================ */

.offers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.offer-card {
  padding: 36px;
  background: #ffffff;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
}
.offer-card:hover { border-color: #cc0000; box-shadow: 0 20px 50px rgba(204, 0, 0, 0.04); }
.offer-number { font-size: 40px; font-weight: 200; color: #cc0000; margin-bottom: 8px; }
.offer-card h3 { font-size: 20px; font-weight: 600; color: #1a1a1a; margin-bottom: 8px; }
.offer-card p { font-size: 15px; color: #888; line-height: 1.6; margin-bottom: 16px; }
.offer-btn { background: none; border: none; color: #cc0000; font-size: 14px; font-weight: 500; cursor: pointer; padding: 0; transition: all 0.3s ease; }
.offer-btn:hover { transform: translateX(4px); }

/* ============================================ */
/* ===== SOLUTIONS GRID ===== */
/* ============================================ */

.solutions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
.solution-item {
  text-align: center;
  padding: 28px 20px;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.solution-item:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.03); }
.solution-icon img { width: 40px; height: 40px; object-fit: contain; margin-bottom: 10px; }
.solution-price { font-size: 22px; font-weight: 600; color: #cc0000; margin-bottom: 4px; }
.solution-name { font-size: 15px; color: #1a1a1a; }
.bonus-list { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; position: relative; z-index: 1; }
.bonus { font-size: 14px; color: #888; letter-spacing: 0.3px; }
.bonus:first-child { color: #cc0000; }

/* ============================================ */
/* ===== STATS GRID ===== */
/* ============================================ */

.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 40px; }
.stat-block {
  text-align: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  position: relative;
  z-index: 1;
}
.stat-num { display: block; font-size: 36px; font-weight: 600; color: #cc0000; letter-spacing: 1px; }
.stat-label { font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; }
.stats-text { text-align: center; max-width: 700px; margin: 0 auto; position: relative; z-index: 1; }
.stats-text p { color: #888; font-size: 16px; line-height: 1.8; margin-bottom: 20px; }

/* ============================================ */
/* ===== PRICES GRID ===== */
/* ============================================ */

.prices-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.price-card {
  padding: 20px 16px;
  text-align: center;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.price-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.03); }
.price-card.featured { border-color: #cc0000; }
.price-card h3 { font-size: 13px; font-weight: 500; color: #1a1a1a; margin-bottom: 4px; min-height: 34px; }
.price-amount { font-size: 18px; font-weight: 600; color: #cc0000; margin-bottom: 4px; }
.price-card p { font-size: 12px; color: #888; margin-bottom: 12px; min-height: 28px; }
.price-btn {
  padding: 6px 18px;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1a1a1a;
}
.price-btn:hover { border-color: #cc0000; color: #cc0000; }

/* ============================================ */
/* ===== CALCULATOR ===== */
/* ============================================ */

.calculator-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 36px;
  border: 1px solid #f0f0f0;
  position: relative;
  z-index: 1;
}
.calc-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.calc-tab {
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #888;
}
.calc-tab:hover { border-color: #cc0000; color: #cc0000; }
.calc-tab.active { background: #cc0000; color: #fff; border-color: #cc0000; }
.calc-items { display: flex; flex-direction: column; gap: 4px; }
.calc-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 10px;
  transition: all 0.3s ease;
}
.calc-item:hover { background: rgba(204, 0, 0, 0.03); }
.calc-check { position: relative; cursor: pointer; flex-shrink: 0; }
.calc-check input { display: none; }
.checkmark {
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid #ddd;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.calc-check input:checked + .checkmark { background: #cc0000; border-color: #cc0000; }
.calc-check input:checked + .checkmark::after {
  content: '✓';
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}
.calc-info { flex: 1; }
.calc-info h4 { font-size: 15px; font-weight: 500; color: #1a1a1a; }
.calc-info p { font-size: 13px; color: #888; }
.calc-price { font-weight: 600; color: #cc0000; font-size: 16px; min-width: 100px; text-align: right; flex-shrink: 0; }
.calc-total {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 2px solid #cc0000;
}
.calc-total span:first-child { font-size: 18px; font-weight: 500; color: #1a1a1a; }
.total-amount { font-size: 28px; font-weight: 700; color: #cc0000; }

/* ============================================ */
/* ===== MANAGERS GRID ===== */
/* ============================================ */

.managers-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.manager-card {
  text-align: center;
  padding: 24px 16px;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.manager-card:hover { border-color: #cc0000; transform: translateY(-4px); }
.manager-photo { width: 72px; height: 72px; border-radius: 50%; overflow: hidden; margin: 0 auto 10px; }
.manager-photo img { width: 100%; height: 100%; object-fit: cover; }
.manager-card h4 { font-size: 16px; font-weight: 600; color: #1a1a1a; }
.manager-role { display: block; font-size: 12px; color: #888; margin-bottom: 4px; }
.manager-phone { display: block; font-size: 13px; color: #1a1a1a; margin-bottom: 10px; }
.manager-btn {
  padding: 6px 20px;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1a1a1a;
}
.manager-btn:hover { border-color: #cc0000; color: #cc0000; }

/* ============================================ */
/* ===== FORM ===== */
/* ============================================ */

.form-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  align-items: start;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid #f0f0f0;
  position: relative;
  z-index: 1;
}
.form-info h3 { font-size: 26px; font-weight: 300; color: #1a1a1a; margin: 8px 0 12px; }
.form-info p { color: #888; font-size: 15px; line-height: 1.6; margin-bottom: 20px; }
.form-contacts { display: flex; flex-direction: column; gap: 8px; }
.form-contacts a { color: #1a1a1a; text-decoration: none; font-size: 15px; transition: color 0.3s ease; }
.form-contacts a:hover { color: #cc0000; }

.form-fields { display: flex; flex-direction: column; gap: 14px; }
.field-group { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

.form-group {
  position: relative;
  width: 100%;
}

.form-group input,
.form-group select {
  padding: 14px 18px;
  background: #f8f6f5;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  color: #1a1a1a;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s ease;
  font-family: inherit;
}
.form-group input::placeholder { color: #bbb; }
.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #cc0000;
  box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.1);
}
.form-group select { appearance: none; cursor: pointer; color: #888; }

.form-group.has-error input,
.form-group.has-error select {
  border-color: #ff0000;
  background-color: #fff5f5;
}
.form-group.has-error input:focus {
  border-color: #ff0000;
  box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
}

.error-message {
  display: block;
  color: #ff0000;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 5px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.agree {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #888;
  font-size: 13px;
  cursor: pointer;
}
.agree input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; }

/* ============================================ */
/* ===== STARS ===== */
/* ============================================ */

.star {
  position: fixed;
  width: 2px;
  height: 2px;
  background: #cc0000;
  border-radius: 50%;
  opacity: 0;
  animation: twinkle 3s ease-in-out infinite;
  pointer-events: none;
  z-index: 9999;
}
@keyframes twinkle {
  0% { opacity: 0; }
  50% { opacity: 0.4; }
  100% { opacity: 0; }
}
/* ============================================ */
/* ===== УВЕЛИЧЕННАЯ ИКОНКА АВИТО ===== */
/* ============================================ */

/* Для карточки услуги "Ведение Авито" (4-я карточка) */
.service-card:nth-child(4) .service-icon img {
  width: 72px !important;
  height: 72px !important;
}

/* Для иконки Авито в секции "Решения" (3-й элемент) */
.solution-item:nth-child(3) .solution-icon img {
  width: 64px !important;
  height: 64px !important;
}

/* ============================================ */
/* ===== АДАПТИВ ДЛЯ МОБИЛЬНЫХ ===== */
/* ============================================ */

@media (max-width: 768px) {
  .service-card:nth-child(4) .service-icon img {
    width: 60px !important;
    height: 60px !important;
  }
  .solution-item:nth-child(3) .solution-icon img {
    width: 85px !important;
    height: 85px !important;
  }
}

@media (max-width: 480px) {
  .service-card:nth-child(4) .service-icon img {
    width: 85px !important;
    height: 85px !important;
  }
  .solution-item:nth-child(3) .solution-icon img {
    width: 85px !important;
    height: 85px !important;
  }
}
/* ============================================ */
/* ===== АДАПТИВ 1024px ===== */
/* ============================================ */

@media (max-width: 1024px) {
  .hero-metrics {
    gap: 20px;
    justify-content: center;
  }
  .metric {
    min-width: 120px;
    flex: 0 1 auto;
    align-items: center;
    text-align: center;
  }
  .metric-value { font-size: 28px; }
  .metric-label { font-size: 10px; }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .solutions-grid { grid-template-columns: repeat(2, 1fr); }
  .prices-grid { grid-template-columns: repeat(3, 1fr); }
  .managers-grid { grid-template-columns: repeat(3, 1fr); }
  .wave, .glow, .line-group, .dot-pattern { display: none; }
}

/* ============================================ */
/* ===== АДАПТИВ 768px ===== */
/* ============================================ */

@media (max-width: 768px) {
  .hero-title { font-size: 40px; }
  .services-grid { grid-template-columns: 1fr; }
  .offers-grid { grid-template-columns: 1fr; gap: 20px; }
  .solutions-grid { grid-template-columns: 1fr 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .prices-grid { grid-template-columns: repeat(2, 1fr); }
  .managers-grid { grid-template-columns: repeat(2, 1fr); }
  .form-wrapper { grid-template-columns: 1fr; gap: 30px; padding: 24px; }
  .field-group { grid-template-columns: 1fr; }
  .section-title { font-size: 28px; }
  .bonus-list { gap: 20px; }
  .calculator-box { padding: 20px; }
  .calc-item { flex-wrap: wrap; gap: 10px; }
  .calc-price { min-width: 80px; }
  .calc-tabs { gap: 6px; }
  .calc-tab { padding: 8px 14px; font-size: 12px; }
  .wave, .glow, .line-group, .dot-pattern { display: none; }

  /* ===== МОБИЛЬНЫЙ ФОН С КРУГАМИ ===== */
  .hero-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 8s ease-in-out infinite;
  }

  .hero-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 10s ease-in-out infinite reverse;
  }

  .services-section::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -60px;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 7s ease-in-out infinite;
  }

  .services-section::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: -70px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.10) 0%, rgba(204, 0, 0, 0.03) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 9s ease-in-out infinite reverse;
  }

  .offers-section::before {
    content: '';
    position: absolute;
    top: 30%;
    right: -50px;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 6s ease-in-out infinite;
  }

  .solutions-section::before {
    content: '';
    position: absolute;
    top: 15%;
    left: -40px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 11s ease-in-out infinite;
  }

  .stats-section::before {
    content: '';
    position: absolute;
    bottom: 20%;
    right: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.13) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 8s ease-in-out infinite reverse;
  }

  .prices-section::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -50px;
    width: 170px;
    height: 170px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.12) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 7s ease-in-out infinite;
  }

  .calculator-section::before {
    content: '';
    position: absolute;
    bottom: 30%;
    right: -40px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.14) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 5s ease-in-out infinite;
  }

  .managers-section::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -30px;
    width: 110px;
    height: 110px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 4s ease-in-out infinite;
  }

  .form-section::before {
    content: '';
    position: absolute;
    bottom: 10%;
    left: -30px;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.13) 0%, rgba(204, 0, 0, 0.04) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    animation: floatCircle 6s ease-in-out infinite reverse;
  }

  @keyframes floatCircle {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(10px, -15px) scale(1.05); }
    50% { transform: translate(-5px, 10px) scale(0.95); }
    75% { transform: translate(15px, 5px) scale(1.02); }
  }
}

/* ============================================ */
/* ===== АДАПТИВ 430px ===== */
/* ============================================ */

@media (max-width: 430px) {
  .hero-section::before {
    width: 250px !important;
    height: 250px !important;
    top: -80px !important;
    right: -80px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.08) 30%, transparent 70%) !important;
  }

  .hero-section::after {
    width: 200px !important;
    height: 200px !important;
    bottom: -60px !important;
    left: -60px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .services-section::before {
    width: 180px !important;
    height: 180px !important;
    right: -40px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .services-section::after {
    width: 140px !important;
    height: 140px !important;
    left: -50px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, rgba(204, 0, 0, 0.05) 30%, transparent 70%) !important;
  }

  .offers-section::before {
    width: 120px !important;
    height: 120px !important;
    right: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .solutions-section::before {
    width: 180px !important;
    height: 180px !important;
    left: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.17) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .stats-section::before {
    width: 150px !important;
    height: 150px !important;
    right: -40px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.19) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .prices-section::before {
    width: 130px !important;
    height: 130px !important;
    left: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.17) 0%, rgba(204, 0, 0, 0.05) 30%, transparent 70%) !important;
  }

  .calculator-section::before {
    width: 100px !important;
    height: 100px !important;
    right: -25px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.07) 30%, transparent 70%) !important;
  }

  .managers-section::before {
    width: 90px !important;
    height: 90px !important;
    right: -20px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.20) 0%, rgba(204, 0, 0, 0.07) 30%, transparent 70%) !important;
  }

  .form-section::before {
    width: 100px !important;
    height: 100px !important;
    left: -20px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.18) 0%, rgba(204, 0, 0, 0.06) 30%, transparent 70%) !important;
  }

  .hero-section {
    background:
        radial-gradient(circle at 85% 15%, rgba(204, 0, 0, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 15% 85%, rgba(204, 0, 0, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%) !important;
  }

  .services-section {
    background:
        radial-gradient(circle at 90% 30%, rgba(204, 0, 0, 0.10) 0%, transparent 45%),
        radial-gradient(circle at 10% 80%, rgba(204, 0, 0, 0.07) 0%, transparent 45%),
        #ffffff !important;
  }

  .offers-section {
    background:
        radial-gradient(circle at 85% 40%, rgba(204, 0, 0, 0.10) 0%, transparent 40%),
        #f8f6f5 !important;
  }

  .solutions-section {
    background:
        radial-gradient(circle at 15% 30%, rgba(204, 0, 0, 0.10) 0%, transparent 45%),
        #ffffff !important;
  }

  .stats-section {
    background:
        radial-gradient(circle at 85% 70%, rgba(204, 0, 0, 0.11) 0%, transparent 45%),
        #f8f6f5 !important;
  }

  .prices-section {
    background:
        radial-gradient(circle at 15% 20%, rgba(204, 0, 0, 0.10) 0%, transparent 40%),
        #ffffff !important;
  }

  .calculator-section {
    background:
        radial-gradient(circle at 85% 60%, rgba(204, 0, 0, 0.12) 0%, transparent 40%),
        #f8f6f5 !important;
  }

  .managers-section {
    background:
        radial-gradient(circle at 85% 30%, rgba(204, 0, 0, 0.10) 0%, transparent 35%),
        #ffffff !important;
  }

  .form-section {
    background:
        radial-gradient(circle at 15% 70%, rgba(204, 0, 0, 0.10) 0%, transparent 40%),
        #f8f6f5 !important;
  }
}

/* ============================================ */
/* ===== СПЕЦИАЛЬНО ДЛЯ 380px И МЕНЬШЕ (367px) ===== */
/* ============================================ */

@media (max-width: 380px) {
  /* ГЛАВНЫЙ ГЕРОЙ — самые яркие и крупные круги */
  .hero-section::before {
    width: 220px !important;
    height: 220px !important;
    top: -70px !important;
    right: -60px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.30) 0%, rgba(204, 0, 0, 0.15) 30%, rgba(204, 0, 0, 0.05) 60%, transparent 80%) !important;
    opacity: 1 !important;
    animation-duration: 6s !important;
  }

  .hero-section::after {
    width: 180px !important;
    height: 180px !important;
    bottom: -60px !important;
    left: -50px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.28) 0%, rgba(204, 0, 0, 0.12) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
    animation-duration: 8s !important;
  }

  /* УСЛУГИ */
  .services-section::before {
    width: 160px !important;
    height: 160px !important;
    right: -35px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.28) 0%, rgba(204, 0, 0, 0.12) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  .services-section::after {
    width: 120px !important;
    height: 120px !important;
    left: -40px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.24) 0%, rgba(204, 0, 0, 0.10) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* ПРЕДЛОЖЕНИЯ */
  .offers-section::before {
    width: 100px !important;
    height: 100px !important;
    right: -25px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.26) 0%, rgba(204, 0, 0, 0.10) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* РЕШЕНИЯ */
  .solutions-section::before {
    width: 160px !important;
    height: 160px !important;
    left: -30px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.26) 0%, rgba(204, 0, 0, 0.10) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* ЦИФРЫ */
  .stats-section::before {
    width: 130px !important;
    height: 130px !important;
    right: -35px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.28) 0%, rgba(204, 0, 0, 0.12) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* ЦЕНЫ */
  .prices-section::before {
    width: 110px !important;
    height: 110px !important;
    left: -25px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.24) 0%, rgba(204, 0, 0, 0.10) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* КАЛЬКУЛЯТОР */
  .calculator-section::before {
    width: 90px !important;
    height: 90px !important;
    right: -20px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.30) 0%, rgba(204, 0, 0, 0.14) 30%, rgba(204, 0, 0, 0.05) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* МЕНЕДЖЕРЫ */
  .managers-section::before {
    width: 80px !important;
    height: 80px !important;
    right: -15px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.30) 0%, rgba(204, 0, 0, 0.14) 30%, rgba(204, 0, 0, 0.05) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* ФОРМА */
  .form-section::before {
    width: 85px !important;
    height: 85px !important;
    left: -18px !important;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.28) 0%, rgba(204, 0, 0, 0.12) 30%, rgba(204, 0, 0, 0.04) 60%, transparent 80%) !important;
    opacity: 1 !important;
  }

  /* УСИЛЕННЫЙ БЭКГРАУНД ДЛЯ 380px */
  .hero-section {
    background:
        radial-gradient(circle at 80% 15%, rgba(204, 0, 0, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 20% 85%, rgba(204, 0, 0, 0.14) 0%, transparent 50%),
        linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%) !important;
  }

  .services-section {
    background:
        radial-gradient(circle at 90% 30%, rgba(204, 0, 0, 0.16) 0%, transparent 45%),
        radial-gradient(circle at 10% 80%, rgba(204, 0, 0, 0.12) 0%, transparent 45%),
        #ffffff !important;
  }

  .offers-section {
    background:
        radial-gradient(circle at 85% 40%, rgba(204, 0, 0, 0.16) 0%, transparent 40%),
        #f8f6f5 !important;
  }

  .solutions-section {
    background:
        radial-gradient(circle at 15% 30%, rgba(204, 0, 0, 0.16) 0%, transparent 45%),
        #ffffff !important;
  }

  .stats-section {
    background:
        radial-gradient(circle at 85% 70%, rgba(204, 0, 0, 0.17) 0%, transparent 45%),
        #f8f6f5 !important;
  }

  .prices-section {
    background:
        radial-gradient(circle at 15% 20%, rgba(204, 0, 0, 0.16) 0%, transparent 40%),
        #ffffff !important;
  }

  .calculator-section {
    background:
        radial-gradient(circle at 85% 60%, rgba(204, 0, 0, 0.18) 0%, transparent 40%),
        #f8f6f5 !important;
  }

  .managers-section {
    background:
        radial-gradient(circle at 85% 30%, rgba(204, 0, 0, 0.16) 0%, transparent 35%),
        #ffffff !important;
  }

  .form-section {
    background:
        radial-gradient(circle at 15% 70%, rgba(204, 0, 0, 0.16) 0%, transparent 40%),
        #f8f6f5 !important;
  }
}

/* ============================================ */
/* ===== АДАПТИВ 480px ===== */
/* ============================================ */

@media (max-width: 480px) {
  .hero-title { font-size: 30px; letter-spacing: 2px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions button { width: 100%; justify-content: center; }
  .prices-grid { grid-template-columns: 1fr; }
  .managers-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .stat-num { font-size: 28px; }
  .section-title { font-size: 22px; }
  .container { padding: 0 16px; }
  .services-section, .offers-section, .solutions-section, .stats-section,
  .prices-section, .calculator-section, .managers-section, .form-section { padding: 50px 0; }
  .form-wrapper { padding: 16px; }
  .offer-card { padding: 24px; }
  .calc-total { flex-wrap: wrap; justify-content: center; gap: 12px; }
  .total-amount { font-size: 22px; }
  .calc-item { padding: 12px; }
}

/* ============================================ */
/* ===== АДАПТИВ 600px (METRICS) ===== */
/* ============================================ */

@media (max-width: 600px) {
  .hero-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid rgba(204, 0, 0, 0.08);
  }
  .metric {
    min-width: 0;
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 14px 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(204, 0, 0, 0.05);
    flex: 1;
  }
  .metric-value { font-size: 22px; }
  .metric-label { font-size: 9px; letter-spacing: 0.3px; }
}
/* ============================================ */
/* ===== УМЕНЬШЕННАЯ ИКОНКА РЕКЛАМЫ В СЕКЦИИ "РЕШЕНИЯ" ===== */
/* ============================================ */

/* Иконка Реклама (3-й элемент) - делаем меньше */
.solution-item:nth-child(3) .solution-icon img {
  width: 36px !important;
  height: 36px !important;
}

.solution-item:nth-child(3) .solution-icon {
  width: 43px;
  height: 43px;
}

/* Остальные иконки остаются стандартного размера */
.solution-icon img {
  width: 52px !important;
  height: 52px !important;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.solution-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin: 0 auto 10px;
}

.solution-item:hover .solution-icon img {
  transform: scale(1.1);
}

/* ============================================ */
/* ===== АДАПТИВ ДЛЯ МОБИЛЬНЫХ ===== */
/* ============================================ */

@media (max-width: 768px) {
  .solution-icon img {
    width: 54px !important;
    height: 44px !important;
  }
  .solution-icon {
    width: 44px;
    height: 44px;
  }
  /* Уменьшенная иконка рекламы на планшетах */
  .solution-item:nth-child(3) .solution-icon img {
    width: 43px !important;
    height: 43px !important;
  }
  .solution-item:nth-child(3) .solution-icon {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 480px) {
  .solution-icon img {
    width: 58px !important;
    height: 58px !important;
  }
  .solution-icon {
    width: 58px;
    height: 58px;
  }
  /* Уменьшенная иконка рекламы на телефонах */
  .solution-item:nth-child(3) .solution-icon img {
    width: 35px !important;
    height: 35px !important;
  }
  .solution-item:nth-child(3) .solution-icon {
    width: 28px;
    height: 28px;
  }
}
</style>