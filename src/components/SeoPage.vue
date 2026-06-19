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
    <Breadcrumbs currentPage="Продвижение сайта" />
    <section class="hero">
      <div class="hero-blobs">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
      </div>
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <h1 class="hero-title split-text">SEO продвижение сайтов</h1>
        <div class="hero-subtitle">
          <div class="typewriter-wrapper">
            <span class="typewriter" id="typewriter"></span>
            <span class="cursor-blink">|</span>
          </div>
          <p class="hero-description">работая с нами, Вы получаете гарантию узнаваемости бренда</p>
        </div>
        <div class="hero-buttons">
          <button class="hero-btn primary" @click="showOrderModal = true">Заказать продвижение →</button>
          <button class="hero-btn secondary" @click="scrollToServices">Узнать больше ↓</button>
        </div>
      </div>
    </section>

    <!-- ПАРТНЁРЫ -->
    <div class="clients">
      <div class="clients-inner">
        <div class="client-logos">
          <span class="client-logo">Яндекс</span>
          <span class="client-logo">Google</span>
          <span class="client-logo">1С-Битрикс</span>
          <span class="client-logo">Joomla</span>
          <span class="client-logo">Wordpress</span>
          <span class="client-logo">VK</span>
        </div>
      </div>
    </div>

    <!-- ПРЕДЛОЖЕНИЯ 3D -->
    <div class="offers">
      <div class="offers-grid">
        <div class="offer-card-3d" @mousemove="handleCardMove($event, 0)" @mouseleave="resetCard(0)">
          <div class="offer-card-inner" ref="cardInner0">
            <div class="offer-icon">
              <img src="/assets/mechok_jenezn.svg" alt="стрелка" class="svg-icon">
            </div>
            <div class="offer-text">ПРЕДЛОЖЕНИЯ ДЛЯ<br><span>СРЕДНЕГО</span> И <span>МЕЛКОГО</span> БИЗНЕСА</div>
            <button class="offer-btn" @click="showOrderModal = true">→ ОТКРЫТЬ ФОРМУ</button>
          </div>
        </div>
        <div class="offer-card-3d" @mousemove="handleCardMove($event, 1)" @mouseleave="resetCard(1)">
          <div class="offer-card-inner" ref="cardInner1">
            <div class="offer-icon">
              <img src="/assets/home.png" alt="бизнес" class="svg-icon">
            </div>
            <div class="offer-text">ПРЕДЛОЖЕНИЯ ДЛЯ<br><span>КРУПНОГО</span> БИЗНЕСА</div>
            <button class="offer-btn" @click="showOrderModal = true">→ ОТКРЫТЬ ФОРМУ</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ОСНОВНОЙ КОНТЕНТ -->
    <div class="seo-content">
      <div class="info-card glass-card">
        <div class="info-card-icon"><img src="/assets/strelochka.png" alt="бизнес" ></div>
        <h3>Что такое СЕО оптимизация?</h3>
        <p>SEO — комплексное развитие сайта и его продвижение для поднятия на одну из топовых позиций в выдаче поисковиков.</p>
        <p>СЕО-оптимизация в тандеме с Яндекс рекламой работает лучше, позволяя сайту выходить на более высокие позиции.</p>
        <div class="info-card-stats">
          <div class="info-stat"><span class="stat-number">87%</span><span>трафика из поиска</span></div>
          <div class="info-stat"><span class="stat-number">3x</span><span>рост конверсии</span></div>
        </div>
      </div>

      <div class="directions">
        <h2 class="section-title gradient-text">Нами разработаны <span>5 направлений</span></h2>
        <div class="directions-list">
          <div class="direction-item" v-for="(dir, idx) in directions" :key="idx" @mouseenter="animateDirection(idx)">
            <div class="direction-number">{{ String(idx + 1).padStart(2, '0') }}</div>
            <p>{{ dir }}</p>
            <div class="direction-progress"></div>
          </div>
        </div>
      </div>

      <div class="stats-showcase">
        <div class="stats-container">
          <div class="stat-item" v-for="(stat, idx) in stats" :key="idx">
            <div class="stat-icon">
              <img :src="stat.icon" :alt="stat.label" class="stat-img">
            </div>
            <div class="stat-number" :data-target="stat.value" :data-suffix="stat.suffix">{{ stat.prefix }}0</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="why-us">
        <h2 class="section-title">Почему стоит заказать SEO в агентстве <span>«Вебразработка»</span></h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, idx) in whyItems" :key="idx">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <div class="timeline-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="packages-modern">
        <h2 class="section-title">Пакеты <span>продвижения</span></h2>
        <div class="package-toggles">
          <button class="toggle-btn" :class="{ active: activePackageTab === 'month' }" @click="activePackageTab = 'month'">Помесячно</button>
          <button class="toggle-btn" :class="{ active: activePackageTab === 'year' }" @click="activePackageTab = 'year'">Годовая скидка</button>
        </div>
        <div class="packages-grid-modern">
          <div class="package-card-modern" v-for="(pkg, idx) in packages" :key="idx" :class="{ popular: pkg.popular }">
            <div class="package-glow"></div>
            <div class="package-badge" v-if="pkg.popular">ХИТ ПРОДАЖ</div>
            <div class="package-name">{{ pkg.name }}</div>
            <div class="package-price">
              <span class="currency">₽</span>
              <span class="amount">{{ activePackageTab === 'month' ? pkg.price : pkg.yearPrice }}</span>
              <span class="period">{{ activePackageTab === 'month' ? '/мес' : '/год' }}</span>
            </div>
            <div class="package-savings" v-if="activePackageTab === 'year'">экономия {{ pkg.savings }} ₽</div>
            <ul class="package-features">
              <li v-for="feature in pkg.features" :key="feature"><span class="check">✓</span>{{ feature }}</li>
            </ul>
            <button class="package-order" @click="showOrderModal = true">Выбрать тариф →</button>
          </div>
        </div>
      </div>

      <div class="cases-showcase">
        <h2 class="section-title">Кейсы нашего <span>агентства</span></h2>
        <p class="cases-subtitle">«Вебразработка» занимается SEO продвижением более 17 лет</p>
        <div class="cases-slider">
          <button class="slider-btn prev" @click="prevCase">←</button>
          <div class="cases-slider-container">
            <div class="cases-slider-track" :style="{ transform: `translateX(-${currentCase * 33.333}%)` }">
              <div class="case-card-modern" v-for="item in casesList" :key="item.id" @click="openCaseModal(item)">
                <div class="case-image" v-if="item.image">
                  <img :src="item.image" :alt="item.title">
                </div>
                <div class="case-content">
                  <h4>{{ item.title }}</h4>
                  <p class="case-desc">{{ item.desc }}</p>
                  <div class="case-stats" v-if="item.stats">
                    <div class="case-stat" v-for="(stat, statIdx) in item.stats" :key="statIdx">
                      <span class="stat-value">{{ stat.value }}</span>
                      <span class="stat-label">{{ stat.label }}</span>
                    </div>
                  </div>
                  <div class="case-hover">Подробнее →</div>
                </div>
              </div>
            </div>
          </div>
          <button class="slider-btn next" @click="nextCase">→</button>
        </div>
        <div class="slider-dots">
          <span v-for="(_, idx) in Math.ceil(casesList.length / 3)" :key="idx" class="dot" :class="{ active: currentCase === idx }" @click="currentCase = idx"></span>
        </div>
      </div>

      <div class="faq-modern">
        <h2 class="section-title">Часто задаваемые <span>вопросы</span></h2>
        <div class="faq-container">
          <div class="faq-item-modern" v-for="(item, idx) in faqList" :key="idx">
            <div class="faq-question-modern" @click="toggleFaq(idx)">
              <span class="faq-icon">{{ openFaq === idx ? '−' : '+' }}</span>
              <span>{{ item.question }}</span>
            </div>
            <div class="faq-answer-modern" v-if="openFaq === idx"><p>{{ item.answer }}</p></div>
          </div>
        </div>
      </div>

      <div class="cta-block glass-card">
        <div class="cta-content">
          <h3>Готовы вывести ваш сайт в ТОП?</h3>
          <p>Оставьте заявку и получите бесплатный SEO-аудит вашего сайта</p>
          <button class="cta-btn" @click="showOrderModal = true">Получить аудит →</button>
        </div>
        <div class="cta-stats">
          <div class="cta-stat">500+<span>проектов в ТОП</span></div>
          <div class="cta-stat">17 лет<span>опыта</span></div>
          <div class="cta-stat">24/7<span>поддержка</span></div>
        </div>
      </div>
    </div>

    <AppFooter />

    <Modals
        :showOrderModal="showOrderModal"
        :showManagersModal="showManagersModal"
        orderTitle="Заявка на SEO продвижение"
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
import {ref, onMounted, onUnmounted} from 'vue'
import CustomCursor from './CustomCursor.vue'
import AppHeader from './AppHeader.vue'
import MobileMenu from './MobileMenu.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import AppFooter from './AppFooter.vue'
import Modals from './Modals.vue'
import ScrollTop from './ScrollTop.vue'
import Notification from './Notification.vue'

import chapockaIcon from '/assets/chapocka.png'
import molniaIcon from '/assets/strelochka.png'
import moneyIcon from '/assets/person.svg'
import palitraIcon from '/assets/molnia.svg'

const showOrderModal = ref(false)
const showManagersModal = ref(false)
const openFaq = ref(null)
const currentCase = ref(0)
const activePackageTab = ref('month')
const menuOpen = ref(false)
const notification = ref({show: false, message: ''})
const cardInner0 = ref(null)
const cardInner1 = ref(null)

let starInterval
let typewriterIndex = 0
const typewriterText = '«Вебразработка» выведет ваш сайт в ТОП'

const directions = [
  'Многократное увеличение количества фраз и трафика без увеличения ежемесячного платежа.',
  'Анализ сайта при обнаружении проблем с конверсией при продвижении.',
  'Мини-сайты на раскрученных тематических ТОП досках.',
  'Подключение рекламы Яндекс-Директ по фразам на продвижении.',
  'Размещение товаров в Яндекс Услугах.'
]

const stats = [
  {label: 'лет опыта', value: 17, prefix: '', suffix: '', icon: chapockaIcon},
  {label: 'проектов в ТОП', value: 500, prefix: '', suffix: '+', icon: molniaIcon},
  {label: 'активных клиентов', value: 70, prefix: '', suffix: '+', icon: moneyIcon},
  {label: 'результат', value: 3, prefix: '2-', suffix: ' нед', icon: palitraIcon}
]
const whyItems = [
  {year: '2006', text: 'Основание компании'},
  {year: '2010', text: 'Первый миллионный проект'},
  {year: '2015', text: '500+ успешных проектов'},
  {year: '2024', text: '1000+ активных клиентов'}
]

const packages = [
  {
    name: 'Старт',
    price: '25 000',
    yearPrice: '250 000',
    savings: '50 000',
    features: ['До 50 ключевых фраз', 'SEO-аудит сайта', 'Сбор семантического ядра', 'Оптимизация мета-тегов', 'Ежемесячный отчет'],
    popular: false
  },
  {
    name: 'Оптимум',
    price: '45 000',
    yearPrice: '450 000',
    savings: '90 000',
    features: ['До 200 ключевых фраз', 'Все из пакета "Старт"', 'Внутренняя оптимизация', 'Внешняя ссылочная стратегия', 'Анализ конкурентов', 'SEO-копирайтинг'],
    popular: true
  },
  {
    name: 'Бизнес',
    price: '80 000',
    yearPrice: '800 000',
    savings: '160 000',
    features: ['До 500 ключевых фраз', 'Все из пакета "Оптимум"', 'Комплексное продвижение', 'Работа с поведенческими факторами', 'Приоритетная поддержка 24/7', 'Индивидуальная стратегия'],
    popular: false
  }
]

import ravnovesieImg from '/assets/Ravnovesie.jpg'
import zsClinikImg from '/assets/ZSclinik.jpg'
import prokrepImg from '/assets/Prokrep_NN.jpg'
import beregImg from '/assets/BeregNN.jpg'
import avtoImg from '/assets/Avtocarmarket.jpg'
import eirgazImg from '/assets/Eirgaz.jpg'

const casesList = ref([
  {
    id: 1,
    title: 'Равновесие',
    desc: 'Центр психологии и кинезиологии',
    link: 'https://ravnovesie-nn.ru/',
    image: ravnovesieImg,
    stats: [{value: '50+', label: 'заявок в месяц'}, {value: 'ТОП-3', label: 'по ключевым запросам'}]
  },
  {
    id: 2,
    title: 'Золотое сечение',
    desc: 'Медицинская клиника',
    link: 'https://zs.clinic/',
    image: zsClinikImg,
    stats: [{value: '100+', label: 'посетителей/день'}, {value: '+200%', label: 'конверсия'}]
  },
  {
    id: 3,
    title: 'PROкрепеж',
    desc: 'Мультибрендовая сеть магазинов',
    link: 'https://prokrep.ru/',
    image: prokrepImg,
    stats: [{value: '+100%', label: 'рост посещаемости'}, {value: '+150%', label: 'рост заявок'}]
  },
  {
    id: 4,
    title: 'Побережье',
    desc: 'Строительная компания',
    link: 'https://bereg-nn.ru/',
    image: beregImg,
    stats: [{value: 'ТОП-3', label: 'по 30+ запросам'}, {value: '+80%', label: 'рост трафика'}]
  },
  {
    id: 5,
    title: 'Автокармаркет',
    desc: 'Автосалон',
    link: 'https://akm-52.ru/',
    image: avtoImg,
    stats: [{value: '2x', label: 'рост конверсии'}, {value: '100+', label: 'запросов в ТОП'}]
  },
  {
    id: 6,
    title: 'Эиргаз',
    desc: 'Газовая компания',
    link: 'https://airgaz-nn.ru/',
    image: eirgazImg,
    stats: [{value: '30% → 85%', label: 'рост видимости'}, {value: '+200%', label: 'рост лидов'}]
  }
])
const faqList = ref([
  {
    question: 'В чем отличия контекстной рекламы и SEO?',
    answer: 'Контекстная реклама — платные клики, мгновенный результат. SEO — бесплатный трафик, долгосрочный результат.'
  },
  {
    question: 'Для чего нужно абонентское обслуживание?',
    answer: 'Чтобы удерживать ТОП-позиции. Включает анализ контента, отслеживание конкурентов.'
  },
  {question: 'Когда сайт попадет в лидеры?', answer: 'Новые проекты — 5-6 месяцев. Действующие сайты — от 2 месяцев.'}
])

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToCompany = () => {
  const element = document.querySelector('.directions')
  if (element) element.scrollIntoView({behavior: 'smooth'})
}

const scrollToServices = () => {
  const element = document.querySelector('.directions')
  if (element) element.scrollIntoView({behavior: 'smooth'})
}

const handleCardMove = (e, index) => {
  const card = index === 0 ? cardInner0.value : cardInner1.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
}

const resetCard = (index) => {
  const card = index === 0 ? cardInner0.value : cardInner1.value
  if (card) card.style.transform = ''
}

const animateDirection = (index) => {
  const items = document.querySelectorAll('.direction-item')
  if (items[index]) {
    items[index].style.transform = 'translateX(10px)'
    setTimeout(() => {
      items[index].style.transform = ''
    }, 300)
  }
}

const prevCase = () => {
  if (currentCase.value > 0) currentCase.value--
}

const nextCase = () => {
  const max = Math.ceil(casesList.value.length / 3) - 1
  if (currentCase.value < max) currentCase.value++
}

const toggleFaq = (idx) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const openCaseModal = (item) => {
  window.open(item.link, '_blank')
}

const handleNotification = (data) => {
  notification.value = {show: true, message: data.message}
  setTimeout(() => {
    notification.value.show = false
  }, 3000)
}

const startCounters = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        if (!target) return
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            el.innerText = Math.floor(target) + suffix
            clearInterval(timer)
          } else {
            el.innerText = Math.floor(current) + suffix
          }
        }, 30)
        observer.unobserve(el)
      }
    })
  }, {threshold: 0.5})

  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el))
}

const typeWriter = () => {
  const el = document.getElementById('typewriter')
  if (el && typewriterIndex < typewriterText.length) {
    el.innerHTML += typewriterText.charAt(typewriterIndex)
    typewriterIndex++
    setTimeout(typeWriter, 80)
  }
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

onMounted(() => {
  typeWriter()
  startCounters()
  createStars()
})

onUnmounted(() => {
  if (starInterval) clearInterval(starInterval)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.site-full {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
}

/* АНИМАЦИИ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes floatBlob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 40px) scale(0.9);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

.gradient-text {
  background: linear-gradient(135deg, #000000, #cc0000, #000000);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 3s ease infinite;
}

.split-text {
  animation: fadeInUp 0.8s ease;
}

/* HERO */
.hero {
  padding-top: 0 !important;
  margin-top: 0 !important;
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%);
}

.hero-blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: floatBlob 15s infinite ease-in-out;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: #ff4444;
  top: -150px;
  left: -150px;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: #cc0000;
  bottom: -200px;
  right: -150px;
  animation-delay: 3s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #ff8888;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  animation-delay: 6s;
}

.blob-4 {
  width: 350px;
  height: 350px;
  background: #ff6666;
  bottom: 20%;
  right: 10%;
  animation-delay: 9s;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 20%, rgba(204, 0, 0, 0.03) 2px, transparent 2px);
  background-size: 40px 40px;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.2;
}

.typewriter-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
}

.typewriter {
  font-size: 28px;
  color: #cc0000;
  font-weight: 500;
}

.cursor-blink {
  font-size: 28px;
  color: #cc0000;
  animation: blink 0.7s step-end infinite;
}

.hero-description {
  color: #555;
  font-size: 18px;
  margin-top: 15px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.hero-btn {
  padding: 14px 32px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.hero-btn.primary {
  background: #cc0000;
  color: white;
  border: none;
}

.hero-btn.primary:hover {
  background: #ff1a1a;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(204, 0, 0, 0.3);
}

.hero-btn.secondary {
  background: transparent;
  border: 2px solid #cc0000;
  color: #cc0000;
}

.hero-btn.secondary:hover {
  background: #cc0000;
  color: white;
  transform: translateY(-3px);
}

/* КЛИЕНТЫ */
.clients {
  padding: 30px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.clients-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.client-logos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.client-logo {
  font-size: 18px;
  font-weight: 600;
  color: #999;
  transition: all 0.3s;
  cursor: pointer;
}

.client-logo:hover {
  color: #cc0000;
  transform: scale(1.1);
}

/* ПРЕДЛОЖЕНИЯ */
.offers {
  padding: 60px 30px;
  background: linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%);
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.offer-card-3d {
  perspective: 1000px;
  cursor: pointer;
}

.offer-card-inner {
  background: #ffffff;
  border-radius: 24px;
  padding: 50px 30px;
  text-align: center;
  border: 1px solid rgba(204, 0, 0, 0.2);
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.offer-card-inner:hover {
  border-color: #cc0000;
  box-shadow: 0 20px 50px rgba(204, 0, 0, 0.15);
}

.offer-icon {
  margin-bottom: 20px;
}

.offer-icon .svg-icon {
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.offer-card-inner:hover .offer-icon .svg-icon {
  transform: scale(1.1);
}

.offer-text {
  color: #000000;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
}

.offer-text span {
  color: #cc0000;
}

.offer-btn {
  background: transparent;
  border: 2px solid #cc0000;
  color: #cc0000;
  padding: 15px 30px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.offer-btn:hover {
  background: #cc0000;
  color: #ffffff;
  transform: scale(1.02);
}

/* ОСНОВНОЙ КОНТЕНТ */
.seo-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.info-card {
  padding: 40px;
  text-align: center;
  margin-bottom: 60px;
}

.info-card-icon {
  margin-bottom: 20px;
}

.info-card-icon img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  display: inline-block;
}

.info-card h3 {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
}

.info-card p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.info-card-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}

.info-stat {
  text-align: center;
}

.info-stat .stat-number {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: #cc0000;
}

.info-stat span:last-child {
  font-size: 14px;
  color: #666;
}

.directions {
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
}

.section-title span {
  color: #cc0000;
}

.directions-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.direction-item {
  background: #f8f8f8;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  gap: 15px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.direction-item:hover {
  background: #ffffff;
  border: 1px solid #cc0000;
  transform: translateX(5px);
}

.direction-number {
  font-size: 32px;
  font-weight: bold;
  color: #cc0000;
}

.direction-item p {
  color: #333;
  line-height: 1.5;
}

.direction-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: #cc0000;
  transition: width 0.5s;
}

.direction-item:hover .direction-progress {
  width: 100%;
}

/* СТАТИСТИКА */
.stats-showcase {
  margin-bottom: 60px;
  padding: 60px 0;
  border-radius: 24px;
  background: linear-gradient(135deg, #f8f8f8, #ffffff);
}

.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
}

.stat-item {
  text-align: center;
  flex: 1;
  min-width: 150px;
}

.stat-icon {
  margin-bottom: 15px;
}

.stat-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-img {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  color: #cc0000;
  margin-bottom: 10px;
}

.stat-label {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

/* ПОЧЕМУ МЫ */
.why-us {
  margin-bottom: 60px;
}

.timeline {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
  position: relative;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #cc0000, #eee);
}

.timeline-item {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 2;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: #cc0000;
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #cc0000;
}

.timeline-year {
  font-size: 18px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 10px;
}

.timeline-text {
  color: #444;
  font-size: 14px;
}

/* ПАКЕТЫ - ИСПРАВЛЕННЫЙ БЛОК */
.packages-modern {
  margin-bottom: 60px;
}

.package-toggles {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.toggle-btn {
  padding: 10px 24px;
  background: #f0f0f0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.toggle-btn.active {
  background: #cc0000;
  color: white;
}

.packages-grid-modern {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.package-card-modern {
  background: #ffffff;
  border-radius: 24px;
  padding: 30px;
  padding-top: 50px;
  position: relative;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.3s;
}

.package-card-modern:hover {
  transform: translateY(-10px);
  border-color: #cc0000;
  box-shadow: 0 20px 40px rgba(204, 0, 0, 0.1);
}

.package-card-modern.popular {
  border-color: #cc0000;
  background: linear-gradient(135deg, #ffffff, #fff5f5);
}

.package-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 20%, rgba(204, 0, 0, 0.05), transparent);
  pointer-events: none;
}

.package-badge {
  position: absolute;
  top: 21px;
  left: 50%;
  transform: translateX(-50%);
  background: #cc0000;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  z-index: 10;
}

.package-name {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.package-price {
  text-align: center;
  margin-bottom: 15px;
}

.package-price .currency {
  font-size: 20px;
  color: #cc0000;
}

.package-price .amount {
  font-size: 36px;
  font-weight: bold;
  color: #cc0000;
}

.package-price .period {
  font-size: 14px;
  color: #999;
}

.package-savings {
  text-align: center;
  font-size: 12px;
  color: #4caf50;
  margin-bottom: 20px;
}

.package-features {
  list-style: none;
  margin: 20px 0;
}

.package-features li {
  padding: 10px 0;
  color: #444;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.package-features .check {
  color: #cc0000;
  font-weight: bold;
}

.package-order {
  width: 100%;
  padding: 14px;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.package-order:hover {
  background: #ff1a1a;
}

/* КЕЙСЫ */
.cases-showcase {
  margin-bottom: 60px;
}

.cases-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.cases-slider {
  display: flex;
  align-items: center;
  gap: 20px;
}

.slider-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #eee;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s;
}

.slider-btn:hover {
  background: #cc0000;
  color: white;
  border-color: #cc0000;
}

.cases-slider-container {
  flex: 1;
  overflow: hidden;
}

.cases-slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.case-card-modern {
  flex: 0 0 calc(33.333% - 20px);
  margin: 0 10px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
}

.case-card-modern:hover {
  transform: translateY(-5px);
  border-color: #cc0000;
  box-shadow: 0 15px 30px rgba(204, 0, 0, 0.1);
}

.case-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: #f5f5f5;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.case-card-modern:hover .case-image img {
  transform: scale(1.05);
}

.case-content {
  padding: 20px;
}

.case-card-modern h4 {
  color: #000;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 700;
}

.case-desc {
  color: #666;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.case-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
}

.case-stat {
  text-align: center;
  flex: 1;
  min-width: 60px;
}

.case-stat .stat-value {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #cc0000;
}

.case-stat .stat-label {
  font-size: 10px;
  color: #999;
}

.case-hover {
  color: #cc0000;
  font-size: 13px;
  font-weight: 500;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s;
}

.case-card-modern:hover .case-hover {
  opacity: 1;
  transform: translateX(0);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  width: 30px;
  background: #cc0000;
  border-radius: 5px;
}

/* FAQ */
.faq-modern {
  margin-bottom: 60px;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item-modern {
  border-bottom: 1px solid #eee;
}

.faq-question-modern {
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  color: #000;
  transition: all 0.3s;
}

.faq-question-modern:hover {
  background: rgba(204, 0, 0, 0.05);
}

.faq-icon {
  width: 30px;
  height: 30px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cc0000;
  font-weight: bold;
}

.faq-answer-modern {
  padding: 0 20px 20px 65px;
  color: #666;
  line-height: 1.6;
}

/* CTA */
.cta-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 30px;
  background: linear-gradient(135deg, #ffffff, #fafafa);
}

.cta-content h3 {
  font-size: 28px;
  color: #000;
  margin-bottom: 10px;
}

.cta-content p {
  color: #666;
  margin-bottom: 20px;
}

.cta-btn {
  background: #cc0000;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #ff1a1a;
  transform: translateY(-2px);
}

.cta-stats {
  display: flex;
  gap: 40px;
}

.cta-stat {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #cc0000;
}

.cta-stat span {
  display: block;
  font-size: 12px;
  font-weight: normal;
  color: #666;
}

/* ОБЩИЕ СТИЛИ */
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(204, 0, 0, 0.1);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(204, 0, 0, 0.05);
  transition: all 0.3s;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(204, 0, 0, 0.1), 0 0 0 1px rgba(204, 0, 0, 0.2);
}

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

/* ============================================ */
/* АДАПТИВНЫЕ СТИЛИ */
/* ============================================ */

@media (max-width: 1000px) {
  .packages-grid-modern {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-container {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .offers-grid {
    grid-template-columns: 1fr;
  }

  .packages-grid-modern {
    grid-template-columns: 1fr;
  }

  /* Кейсы - полная перестройка */
  .cases-showcase {
    padding: 0 15px;
  }

  .cases-slider {
    display: block;
  }

  .slider-btn {
    display: none;
  }

  .cases-slider-container {
    width: 100%;
    overflow: visible;
  }

  .cases-slider-track {
    display: flex;
    flex-direction: column;
    transform: none !important;
    gap: 20px;
  }

  .case-card-modern {
    flex: none;
    width: 100%;
    margin: 0;
  }

  .case-image {
    height: 180px;
  }

  .case-content {
    padding: 15px;
  }

  .case-stats {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .case-stat {
    flex: 1;
    min-width: 80px;
  }

  .slider-dots {
    display: none;
  }

  /* Hero секция */
  .hero-title {
    font-size: 36px;
  }

  .typewriter {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  /* CTA блок */
  .cta-block {
    flex-direction: column;
    text-align: center;
  }

  .cta-stats {
    justify-content: center;
  }

  /* Timeline */
  .timeline {
    flex-direction: column;
  }

  .timeline:before {
    display: none;
  }

  /* Заголовки */
  .section-title {
    font-size: 28px;
  }

  /* Статистика */
  .stats-showcase {
    padding: 30px 15px;
  }

  .stat-item {
    min-width: 120px;
  }

  .stat-number {
    font-size: 32px;
  }

  .stat-img {
    width: 48px;
    height: 48px;
  }

  /* Info card */
  .info-card {
    padding: 25px;
  }

  .info-card h3 {
    font-size: 24px;
  }

  .info-card-stats {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  /* Кейсы */
  .cases-showcase {
    padding: 0 10px;
  }

  .case-image {
    height: 150px;
  }

  .case-content h4 {
    font-size: 16px;
  }

  .case-desc {
    font-size: 12px;
  }

  .case-stats {
    flex-direction: column;
    gap: 8px;
  }

  .case-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }

  .case-stat .stat-value {
    font-size: 14px;
  }

  .case-stat .stat-label {
    font-size: 11px;
  }

  /* Direction items */
  .direction-item {
    flex-direction: column;
    text-align: center;
  }

  .direction-number {
    text-align: center;
  }

  /* Info card */
  .info-card {
    padding: 20px;
  }

  .info-card h3 {
    font-size: 22px;
  }

  /* CTA */
  .cta-block {
    padding: 30px 20px;
  }

  .cta-content h3 {
    font-size: 24px;
  }

  .cta-stat {
    font-size: 20px;
  }

  /* Пакеты */
  .package-card-modern {
    padding: 20px;
    padding-top: 50px;
  }

  .package-name {
    font-size: 20px;
  }

  .package-price .amount {
    font-size: 28px;
  }

  /* FAQ */
  .faq-question-modern {
    font-size: 14px;
    padding: 15px;
  }

  .faq-answer-modern {
    padding: 0 15px 15px 50px;
    font-size: 13px;
  }
}
/* ===== ТЕМНАЯ ТЕМА ===== */
.site-full.dark-mode {
  background: #0a0a0a;
}

.site-full.dark-mode .hero {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 50%, #0d0d0d 100%);
}

.site-full.dark-mode .hero-title {
  color: #f0f0f0;
}

.site-full.dark-mode .hero-description {
  color: #aaaaaa;
}

.site-full.dark-mode .clients {
  border-top-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.site-full.dark-mode .client-logo {
  color: #888;
}

.site-full.dark-mode .client-logo:hover {
  color: #cc0000;
}

.site-full.dark-mode .offers {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 50%, #0d0d0d 100%);
}

.site-full.dark-mode .offer-card-inner {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(204, 0, 0, 0.2);
}

.site-full.dark-mode .offer-card-inner:hover {
  border-color: #cc0000;
}

.site-full.dark-mode .offer-text {
  color: #f0f0f0;
}

.site-full.dark-mode .info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.site-full.dark-mode .info-card h3 {
  color: #f0f0f0;
}

.site-full.dark-mode .info-card p {
  color: #cccccc;
}

.site-full.dark-mode .section-title {
  color: #f0f0f0;
}

.site-full.dark-mode .direction-item {
  background: rgba(255, 255, 255, 0.05);
}

.site-full.dark-mode .direction-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(204, 0, 0, 0.2);
}

.site-full.dark-mode .direction-item p {
  color: #cccccc;
}

.site-full.dark-mode .stats-showcase {
  background: rgba(255, 255, 255, 0.03);
}

.site-full.dark-mode .stat-label {
  color: #aaaaaa;
}

.site-full.dark-mode .timeline-item {
  background: rgba(255, 255, 255, 0.05);
}

.site-full.dark-mode .timeline-text {
  color: #cccccc;
}

.site-full.dark-mode .package-card-modern {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.site-full.dark-mode .package-card-modern.popular {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border-color: #cc0000;
}

.site-full.dark-mode .package-name {
  color: #f0f0f0;
}

.site-full.dark-mode .package-features li {
  color: #cccccc;
}

.site-full.dark-mode .case-card-modern {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.site-full.dark-mode .case-card-modern:hover {
  border-color: #cc0000;
}

.site-full.dark-mode .case-card-modern h4 {
  color: #f0f0f0;
}

.site-full.dark-mode .case-desc {
  color: #aaaaaa;
}

.site-full.dark-mode .case-stat .stat-label {
  color: #888;
}

.site-full.dark-mode .faq-question-modern {
  color: #f0f0f0;
}

.site-full.dark-mode .faq-answer-modern {
  color: #cccccc;
}

.site-full.dark-mode .cta-block {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.site-full.dark-mode .cta-content h3 {
  color: #f0f0f0;
}

.site-full.dark-mode .cta-content p {
  color: #aaaaaa;
}

.site-full.dark-mode .cta-stat {
  color: #cc0000;
}

.site-full.dark-mode .cta-stat span {
  color: #888;
}
</style>
