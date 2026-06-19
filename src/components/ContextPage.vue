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

    <MobileMenu :menuOpen="menuOpen" @close="closeMenu"/>

    <Breadcrumbs currentPage="Контекстная реклама в Яндекс Директ"/>

    <div class="offers">
      <div class="offers-grid">
        <div class="offer-card-3d" @mousemove="handleCardMove($event, 0)" @mouseleave="resetCard(0)">
          <div class="offer-card-inner" ref="cardInner0">
            <div class="offer-icon"> <img src="/assets/mechok_jenezn.svg" alt="стрелка" class="svg-icon"></div>
            <div class="offer-text">ПРЕДЛОЖЕНИЯ ДЛЯ<br><span>СРЕДНЕГО</span> И <span>МЕЛКОГО</span> БИЗНЕСА</div>
            <button class="offer-btn" @click="showOrderModal = true">→ ОТКРЫТЬ ФОРМУ ВЫБОРА ПРЕДЛОЖЕНИЙ</button>
          </div>
        </div>
        <div class="offer-card-3d" @mousemove="handleCardMove($event, 1)" @mouseleave="resetCard(1)">
          <div class="offer-card-inner" ref="cardInner1">
            <div class="offer-icon"><img src="/assets/home.png" alt="бизнес" class="svg-icon"></div>
            <div class="offer-text">ПРЕДЛОЖЕНИЯ ДЛЯ<br><span>КРУПНОГО</span> БИЗНЕСА</div>
            <button class="offer-btn" @click="showOrderModal = true">→ ОТКРЫТЬ ФОРМУ ВЫБОРА ПРЕДЛОЖЕНИЙ</button>
          </div>
        </div>
      </div>
    </div>

    <div class="seo-content">
      <div class="info-card glass-card">
        <div class="info-card-icon"><img src="/assets/opovechenie.svg" alt="стрелка" class="svg-icon"></div>
        <h1>Контекстная реклама</h1>
        <p><strong>Заказать контекстную рекламу</strong> – это значит получить лучший инструмент для привлечения новых
          клиентов. Реклама способствует моментальному увеличению продаж с сайта.</p>
        <p>Чтобы рекламная кампания заработала должным образом и требовала минимальное количество вложений, необходим
          профессиональный подход к ее запуску. Агентство «Вебразработка» настраивает и сопровождает контекстную рекламу
          в Google AdWords, Yandex и Mail.</p>
        <p>Основная кампания предполагает бюджет от 15000 рублей в месяц. Пользователю можно показать цену, основные
          данные о продукции, чтобы у человека была мотивация сразу заказать и купить товар.</p>
        <p>С нами уже работает более 2000 организаций. Делаем до 25 сайтов в месяц. Являемся партнерами Яндекса! В
          большинстве случаев нам удается значительно снизить цену за переходы в рекламе.</p>
      </div>

      <div class="directions">
        <h2 class="section-title">Что вы получаете, заказав рекламную кампанию в <span>«Вебразработка»</span></h2>
        <div class="benefits-grid">
          <div class="benefit-item" v-for="(benefit, idx) in benefits" :key="idx">
            <div class="benefit-check">✓</div>
            <div class="benefit-text">{{ benefit }}</div>
          </div>
        </div>
      </div>

      <div class="stats-showcase">
        <h2 class="section-title">Цель и <span>преимущества</span> рекламы</h2>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="(adv, idx) in advantages" :key="idx">
            <div class="advantage-number">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="advantage-title">{{ adv.title }}</div>
            <div class="advantage-desc">{{ adv.desc }}</div>
          </div>
        </div>
      </div>

      <div class="work-process">
        <h2 class="section-title">Наша работа <span>включает</span></h2>
        <div class="process-steps">
          <div class="process-step" v-for="(step, idx) in processSteps" :key="idx">
            <div class="step-number">{{ idx + 1 }}</div>
            <div class="step-title">{{ step.title }}</div>
            <ul class="step-list">
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="process-call"><span class="callback-toggle" @click="showOrderModal = true">Оставьте заявку</span> на
          сайте или по номеру телефона <a href="tel:+78314228559">+7 (831) 422-85-59</a></div>
      </div>

      <div class="platforms">
        <h2 class="section-title">На каких площадках мы размещаем <span>объявления?</span></h2>
        <p class="platforms-subtitle">Мы осуществляем размещение объявлений на самых востребованных площадках – это
          <span>Яндекс, Google, Mail.</span></p>
        <div class="platform-card" v-for="(platform, idx) in platforms" :key="idx">
          <div class="platform-image"><img :src="platform.image" :alt="platform.name"></div>
          <div class="platform-content">
            <div class="platform-name">{{ platform.name }}</div>
            <p v-for="(text, textIdx) in platform.texts" :key="textIdx">{{ text }}</p>
            <div class="platform-call"><span class="callback-toggle"
                                             @click="showOrderModal = true">Оставить заявку</span> на ведение кампаний
              или заказать настройку по контактным номерам телефонов.
            </div>
          </div>
        </div>
      </div>

      <div class="banner-block glass-card">
        <h3>Большой баннер в Яндекс, Рамблер и Mail</h3>
        <p>Использование баннерного размещения обойдется дешевле, чем реклама на щитах вдоль дорог. Этот
          контекстно-медийный продукт показывается заинтересованной аудитории пользователей, согласно их поисковым
          запросам.</p>
        <div class="banner-advantages">
          <div class="banner-adv-title">К преимуществам этой рекламы относят:</div>
          <ul>
            <li v-for="adv in bannerAdvantages" :key="adv">{{ adv }}</li>
          </ul>
        </div>
        <p>Вебразработка также оказывает другие рекламные услуги. Мы создаем и продвигаем интернет-магазины и сайты
          разной направленности, проводим рассылку по email пользователям, уже посетившим ваш ресурс, подключаем
          дополнительные Маркет Плейсы.</p>
        <button class="cta-btn" @click="showOrderModal = true">Оставить заявку</button>
      </div>
    </div>

    <AppFooter/>

    <Modals
        :showOrderModal="showOrderModal"
        :showManagersModal="showManagersModal"
        orderTitle="Заявка на контекстную рекламу"
        :showSiteField="true"
        @update:showOrderModal="showOrderModal = $event"
        @update:showManagersModal="showManagersModal = $event"
        @orderSubmitted="handleNotification"
    />

    <ScrollTop/>
    <Notification :show="notification.show" :message="notification.message"/>
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

const showOrderModal = ref(false)
const showManagersModal = ref(false)
const menuOpen = ref(false)
const notification = ref({show: false, message: ''})
const cardInner0 = ref(null)
const cardInner1 = ref(null)

let starInterval

const benefits = [
  'Звонки и заявки от клиентов', 'Круглосуточный мониторинг', 'Рекомендации по работе и наполнению сайта',
  'Повышение узнаваемости бренда', 'Постоянное обновление', 'Индивидуальный отчет',
  'Эффективные кампании', 'Помощь экспертов', 'Экспертную оценку итогов'
]

const advantages = [
  {
    title: 'Высокая смотрибельность',
    desc: 'Информация размещается наверху в специальном разделе или внизу в гарантийных показах.'
  },
  {title: 'Результат сразу', desc: 'Объявление появляется в выдаче быстро: сегодня – завтра.'},
  {
    title: 'Большая аудитория',
    desc: 'За счет неограниченного количества фраз сгенерировать качественные лиды, то есть привлечь целевую аудиторию проще.'
  },
  {
    title: 'Растет узнаваемость вашей компании',
    desc: 'Даже при мимолетном отображении логотипа пользователь обратит на него внимание.'
  },
  {
    title: 'Работа с целевой аудиторией',
    desc: 'Работа с целевой аудиторией Нижнего Новгорода и другими городами по всей России.'
  },
  {
    title: 'Гибкость',
    desc: 'Кампанию можно остановить, откорректировать с учетом бюджета, новых задач и запустить снова.'
  },
  {
    title: 'Оптимальная стоимость настройки',
    desc: 'Кампания позволяет устанавливать предельную стоимость клика, количество кликов в день.'
  },
  {title: 'Рост посещаемости', desc: 'Поисковики начинают уделять веб-ресурсу больше внимания.'},
  {title: 'Повышение дохода', desc: 'За счет привлечения заинтересованных пользователей доходы растут.'},
  {title: 'Экономия бюджета', desc: 'В большинстве случаев нам удается в несколько раз снизить затраты.'},
  {title: 'Честная статистика', desc: 'Аналитические данные поступают в режиме реального времени.'}
]

const processSteps = [
  {
    title: 'Проведение аналитического разбора',
    items: ['проводим подбор наиболее эффективных фраз с помощью специальных сервисов', 'выбираем целевые фразы путем анализа полученных данных']
  },
  {
    title: 'Формирование стратегии',
    items: ['разрабатываем четкий план для создания качественной контекстной рекламы', 'заключаем договор и формируем бюджет']
  },
  {
    title: 'Подбор целевых фраз',
    items: ['с помощью технологии «сладких» предложений создаем объявления с повышенной кликабельностью']
  },
  {
    title: 'Запуск',
    items: ['запускаем объявления с точными данными, ссылками на страницы сайта и контакты', 'предоставляем статистику в течение 2-3 минут по вашей просьбе']
  },
  {
    title: 'Мониторинг эффективности',
    items: ['отсеиваем ненужные фразы', 'формируем дополнительные объявления', 'осуществляем оптимизацию расходов']
  }
]
import yandexIcon from '/assets/yandex-ru.svg'
import googleIcon from '/assets/google.png'
import mailIcon from '/assets/mail.svg'

const platforms = [
  {
    name: 'Работа с площадкой Яндекс',
    image: yandexIcon,  // используем существующий файл yandex-ru.svg
    texts: ['Поисковик относится к одному из самых популярных интернет-ресурсов в России. Основная аудитория – это Россия и страны СНГ.', 'Настройка таргетинга Яндекс.Директ проводится по географическому положению, социально-демографическим признакам и другим ключевым параметрам.', 'Канал РСЯ по интересам позволяет настроить ретаргетинг. Яндекс.Метрика отслеживает источники трафика, поведение пользователей и конверсию сайта.']
  },
  {
    name: 'Работа с площадкой GOOGLE',
    image: googleIcon,  // если файл есть в папке assets
    texts: ['Если ваш бизнес охватывает не только Россию, но и другие страны СНГ, лучше заказать рекламу в Google ADwords.', 'Поисковик позволяет настроить таргетинг по географическому положению, социально-демографическим признакам и интересам.', 'Сервисы аналитики Google Analytics позволяют анализировать поведение аудитории и эффективность рекламы.']
  },
  {
    name: 'Работа с MAIL',
    image: mailIcon,  // используйте существующий файл или создайте
    texts: ['Включает размещение в популярных социальных сетях Одноклассники, Мой Мир с многомиллионной аудиторией.', 'Можно настроить рекламные кампании по географическому положению, интересам, доходу и радиусу.', 'Через сервис Товары@mail.ru выгодно размещать предложения для заказа товаров из вашего магазина.']
  }
]

const bannerAdvantages = [
  'Размещение сразу на трех популярных поисковиках', 'Выраженный имиджевый эффект',
  'На одной странице располагается только один баннер', 'Большая реклама вызывает более глубокий интерес',
  'Оплата вносится один раз за месяц', 'Пользователь быстро реагирует на рекламу'
]

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

const handleNotification = (data) => {
  notification.value = {show: true, message: data.message}
  setTimeout(() => {
    notification.value.show = false
  }, 3000)
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

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
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
  font-size: 48px;
  margin-bottom: 20px;
}

/* КЛАСС ДЛЯ SVG ИКОНОК В ОФЕРАХ */
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
  color: #000;
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
  color: #fff;
  transform: scale(1.02);
}

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
  font-size: 48px;
  margin-bottom: 20px;
}

/* КЛАСС ДЛЯ КАРТИНОК В INFO CARD */
.info-card-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  display: inline-block;
}

.info-card h1 {
  font-size: 36px;
  color: #000;
  margin-bottom: 20px;
}

.info-card p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.section-title {
  font-size: 36px;
  color: #000;
  text-align: center;
  margin-bottom: 50px;
}

.section-title span {
  color: #cc0000;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 16px;
  transition: all 0.3s;
}

.benefit-item:hover {
  background: #fff;
  border: 1px solid #cc0000;
  transform: translateY(-3px);
}

.benefit-check {
  width: 30px;
  height: 30px;
  background: #cc0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.benefit-text {
  color: #333;
  font-weight: 500;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.advantage-card {
  background: #fff;
  border-radius: 20px;
  padding: 25px;
  border: 1px solid #eee;
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-5px);
  border-color: #cc0000;
  box-shadow: 0 10px 30px rgba(204, 0, 0, 0.1);
}

.advantage-number {
  font-size: 24px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 15px;
}

.advantage-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.advantage-desc {
  color: #666;
  line-height: 1.5;
  font-size: 14px;
}

.work-process {
  margin-bottom: 60px;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.process-step {
  background: #f8f8f8;
  border-radius: 20px;
  padding: 25px;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #cc0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
}

.step-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}

.step-list {
  list-style: none;
  padding-left: 0;
}

.step-list li {
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.step-list li:before {
  content: '•';
  color: #cc0000;
  position: absolute;
  left: 0;
}

.process-call {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #fef5f5, #fff);
  border-radius: 16px;
}

.process-call .callback-toggle {
  color: #cc0000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.process-call a {
  color: #cc0000;
  text-decoration: none;
  font-weight: bold;
}

.platforms {
  margin-bottom: 60px;
}

.platforms-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 18px;
}

.platforms-subtitle span {
  color: #cc0000;
  font-weight: bold;
}

.platform-card {
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  background: #f8f8f8;
  border-radius: 24px;
  padding: 30px;
  transition: all 0.3s;
}

.platform-card:hover {
  background: #fff;
  border: 1px solid rgba(204, 0, 0, 0.2);
  box-shadow: 0 10px 30px rgba(204, 0, 0, 0.05);
}

.platform-image {
  flex: 0 0 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* КЛАСС ДЛЯ КАРТИНОК ПЛАТФОРМ */
.platform-image img {
  max-width: 180px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.platform-card:hover .platform-image img {
  transform: scale(1.05);
}

.platform-content {
  flex: 1;
}

.platform-name {
  font-size: 24px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 20px;
}

.platform-content p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
}

.platform-call {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.platform-call .callback-toggle {
  color: #cc0000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.banner-block {
  padding: 40px;
  margin-bottom: 60px;
}

.banner-block h3 {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
}

.banner-block p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.banner-advantages {
  margin: 25px 0;
}

.banner-adv-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}

.banner-advantages ul {
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.banner-advantages li {
  color: #666;
  padding-left: 20px;
  position: relative;
}

.banner-advantages li:before {
  content: '✓';
  color: #cc0000;
  position: absolute;
  left: 0;
  font-weight: bold;
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
  margin-top: 20px;
}

.cta-btn:hover {
  background: #ff1a1a;
  transform: translateY(-2px);
}

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

@media (max-width: 1000px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantages-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .platform-card {
    flex-direction: column;
    text-align: center;
  }

  .platform-image {
    justify-content: center;
  }

  .banner-advantages ul {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .offers-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 36px;
  }

  .section-title {
    font-size: 28px;
  }

  .info-card h1 {
    font-size: 28px;
  }

  .platform-image img {
    max-width: 120px;
  }
}
.info-card-icon .svg-icon {
  filter: brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(7000%) hue-rotate(0deg) brightness(95%) contrast(110%);
}
</style>
