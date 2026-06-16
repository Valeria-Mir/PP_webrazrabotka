## Полный исправленный AdvantagesPage.vue

```vue
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

    <Breadcrumbs currentPage="Преимущества сайтов Вебразработки" />

    <!-- БЛОК ВЫБОРА МЕНЕДЖЕРА -->
    <section class="managers-section">
      <div class="container">
        <h2 class="section-title">Выберите менеджера <span>Для заказа интернет-услуг</span></h2>
        <div class="managers-grid-adv">
          <div class="manager-card-adv glass-card" v-for="manager in managersList" :key="manager.id" @click="selectManager(manager)">
            <div class="manager-avatar-adv">
              <img :src="manager.image" :alt="manager.name">
            </div>
            <div class="manager-name-adv">{{ manager.name }}</div>
            <div class="manager-spec-adv">менеджер</div>
            <div class="manager-phone-adv">
              <a :href="`tel:${manager.phone}`">{{ manager.phoneFormatted }}</a>
            </div>
            <div class="manager-email-adv">
              <a :href="`mailto:${manager.email}`">{{ manager.email }}</a>
            </div>
            <div class="manager-tg-adv" v-if="manager.telegram">
              <a :href="manager.telegram" target="_blank">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- НАШИ САЙТЫ НАПРАВЛЕНЫ НА ПРОДАЖИ -->
    <section class="advantages-hero">
      <div class="container">
        <h2 class="section-title">Наши сайты направлены <span>на продажи</span></h2>
        <p class="hero-subtitle">Мы <span>увеличим</span> прибыль от вашего сайта до 10 раз!</p>
        <p class="hero-description">Мы не просто продаем сайты, а увеличиваем ваши продажи. Наши сайты оптимизированы под раскрутку.</p>
        <div class="tech-future">
          <span class="tech-text"><span class="red">Вебразработка</span> - технологии будущего</span>
        </div>
        <div class="features-row">
          <div class="feature-item">
            <div class="feature-icon"><img src='/assets/palitra.svg' alt="Эксклюзивность"></div>
            <div class="feature-title">Эксклюзивность</div>
            <div class="feature-desc">Уникальный дизайн, который не получит больше никто</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><img src='/assets/money.svg' alt="Низкая цена"></div>
            <div class="feature-title">Низкая цена</div>
            <div class="feature-desc">Самые минимальные цены за эксклюзивный сайт</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><img src='/assets/settings-svgrepo-com.svg' alt="Комплексный подход"></div>
            <div class="feature-title">Комплексный подход</div>
            <div class="feature-desc">Все включено в одну сумму</div>
          </div>
        </div>
      </div>
    </section>

    <!-- МЫ ПОМОЖЕМ ВАМ -->
    <section class="help-section glass-card">
      <div class="container">
        <div class="help-content">
          <div class="help-image">
            <div class="help-placeholder"><img src='/assets/ryka.png' alt="Помощь"></div>
          </div>
          <div class="help-text">
            <h3>Мы поможем Вам:</h3>
            <ul>
              <li>создать продающий сайт;</li>
              <li>сделать существующий сайт продающим;</li>
              <li>увеличить эффективность вашей рекламы;</li>
              <li>увеличить вашу прибыль в 10-ки раз;</li>
              <li>увеличить поток клиентов, готовых заказать ваши услуги прямо сейчас.</li>
            </ul>
            <button class="learn-more" @click="scrollToOffers">узнать подробнее →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ЦИТАТА -->
    <section class="quote-section">
      <div class="container">
        <div class="quote-card glass-card">
          <p>“Из 30 потенциальных клиентов, посетивших ваш сайт, как правило звонит - 1.</p>
          <p>Мы увеличим это число в 5 раз!“</p>
        </div>
      </div>
    </section>

    <!-- САЙТ-ВИТРИНА -->
    <section class="showcase-section">
      <div class="container">
        <h2 class="section-title">Сайт как эффективный инструмент <span>увеличения прибыли</span></h2>
        <h3 class="showcase-subtitle">Новая разработка <span>сайт-витрина</span></h3>
        <p class="showcase-desc">Вы знаете, мы единственные кто разработал систему до 10 увеличивающую прибыль от сайта. Витрина состоит из 3-х блоков инструментов, всего их около 30.</p>

        <div class="showcase-blocks">
          <div class="showcase-block">
            <div class="block-icon"><img src='/assets/home.png' alt="Имидж компании"></div>
            <h4>Имидж компании</h4>
            <ul>
              <li>Эксклюзивный имиджевый стильный сайт без ляпов и пустых страниц.</li>
              <li>Логотип и основная информация о компании в шапке</li>
              <li>Преимущества компании в виде баннеров.</li>
              <li>Положительные отзывы клиентов и баннеры компаний-парнеров.</li>
            </ul>
          </div>
          <div class="showcase-block">
            <div class="block-icon"><img src='/assets/tsel.svg' alt="Направленность на продажи"></div>
            <h4>Направленность на продажи</h4>
            <ul>
              <li>Ссылки на основные группы товаров.</li>
              <li>Страница захвата с основной информацией</li>
              <li>Основной прайс на самые популярные товары</li>
              <li>До 6 баннеров с акциями и спецпредложениями</li>
            </ul>
          </div>
          <div class="showcase-block">
            <div class="block-icon"><img src='/assets/phone.svg' alt="Подталкивание к действию"></div>
            <h4>Подталкивание к действию</h4>
            <ul>
              <li>Все контакты в шапке сайта и в футере</li>
              <li>Язычок "Заказать звонок"</li>
              <li>Фотографии менеджеров с телефонами</li>
            </ul>
          </div>
        </div>

        <div class="showcase-footer">
          <p>Обычно люди открывают несколько сайтов и уходят на тот, который им интересен, остальные закрывают.</p>
          <p class="bold">Вы хотите, чтобы люди оставались на вашем сайте, а не уходили на другие?</p>
          <button class="cta-btn" @click="showOrderModal = true">хочу эксклюзивный сайт - недорого →</button>
        </div>
      </div>
    </section>

    <!-- ПОЧЕМУ БОЛЕЕ 1000 КЛИЕНТОВ -->
    <section class="why-clients-section">
      <div class="container">
        <h2 class="section-title">Почему более 1000 клиентов выбрали именно нас</h2>
        <div class="reasons-grid">
          <div class="reason-card glass-card" v-for="(reason, idx) in reasons" :key="idx">
            <div class="reason-number">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="reason-title">{{ reason.title }}</div>
            <div class="reason-desc">{{ reason.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ЭКОНОМИЯ -->
    <section class="economy-section">
      <div class="container">
        <h2 class="section-title">С нами <span>вы экономите свои деньги!</span></h2>
        <div class="compare-grid">
          <div class="compare-card glass-card">
            <h3>Наша компания</h3>
            <ul>
              <li>В сумму, которую мы берем за сайт - <span class="red">все включено.</span></li>
              <li>✓ разработка уникального дизайна</li>
              <li>✓ сборка сайта и система</li>
              <li>✓ комплект инструментов, повышающих продажи</li>
            </ul>
          </div>
          <div class="compare-card glass-card">
            <h3>Другие компании</h3>
            <ul>
              <li>Берут деньги за дизайн, сборку, программирование, каждый инструмент отдельно</li>
              <li>Продают 1 страницу, а не полноценный сайт</li>
              <li>Обманывают</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ЧТО ВЫ ХОТИТЕ ЗАКАЗАТЬ -->
    <section class="offers-section" id="offers">
      <div class="container">
        <h2 class="section-title">Что вы хотите <span>заказать?</span></h2>
        <div class="offers-grid-adv">
          <div class="offer-card-adv glass-card" v-for="(offer, idx) in offersList" :key="idx">
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.desc }}</p>
            <div class="offer-price">{{ offer.price }}</div>
            <div class="offer-sale" v-if="offer.sale">
            </div>
            <button class="offer-btn-adv" @click="showOrderModal = true">заказать →</button>
          </div>
        </div>

        <!-- СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ - ИСПРАВЛЕННЫЙ БЛОК -->
        <div class="special-offer glass-card">
          <div class="special-offer-content">
            <p class="special-text">
              Только до <span class="date">29 Августа</span>! при заказе 4 блоков -
              <span class="highlight">эксклюзивный</span> +
              <span class="highlight">витрина</span> +
              <span class="highlight">интернет-магазин</span> +
              <span class="highlight">1с интеграция</span>
            </p>
            <div class="special-offer-actions">
              <div class="sale-badge">20% скидка</div>
              <button class="cta-btn special-btn" @click="showOrderModal = true">заказать →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ЭКСКЛЮЗИВНЫЕ ПОДАРКИ -->
    <section class="gifts-section">
      <div class="container">
        <h2 class="section-title">Эксклюзивные подарки при разработке сайта для всех</h2>
        <div class="gifts-grid">
          <div class="gift-col">
            <h3>Коммерческие инструменты</h3>
            <ul>
              <li v-for="tool in commercialTools" :key="tool">{{ tool }}</li>
            </ul>
          </div>
          <div class="gift-col">
            <h3>Инструменты для внешней части сайта</h3>
            <ul>
              <li v-for="tool in externalTools" :key="tool">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- САМАЯ НИЗКАЯ ЦЕНА -->
    <section class="low-price-section glass-card">
      <div class="container">
        <h2 class="section-title">Самая <span>низкая цена</span> за эксклюзивный сайт.<br>С нами вы <span>экономите.</span></h2>
        <p class="free-text">Заказывая сайт в нашей компании, Вы получаете многие услуги совершенно <span class="red">бесплатно.</span></p>
        <ul class="free-list">
          <li><span class="red">Бесплатное</span> обучение управлению сайтом</li>
          <li>Мы консультируем по телефону <span class="red">совершенно бесплатно!</span></li>
          <li>Мы <span class="red">бесплатно</span> вносим мелкие изменения на сайт</li>
        </ul>
        <button class="cta-btn large" @click="showOrderModal = true">хочу эксклюзивный сайт →</button>
      </div>
    </section>

    <AppFooter />

    <Modals
        :showOrderModal="showOrderModal"
        :showManagersModal="showManagersModal"
        orderTitle="Заявка на разработку сайта"
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
import { ref, onMounted, onUnmounted } from 'vue'
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
const notification = ref({ show: false, message: '' })

let starInterval

import alenaImg from '/assets/alena_fominykh.jpg'
import svetlanaImg from '/assets/svetlana.jpeg'
import ritaImg from '/assets/rita.jpg'
import yuliyaImg from '/assets/yuliya.png'
import kristinaImg from '/assets/kristina.jpg'

const managersList = [
  { id: 1, name: 'Алёна', image: alenaImg, phone: '79081670603', phoneFormatted: '+7 (908) 167-06-03', email: 'alena@webrazrabotka.ru', telegram: null },
  { id: 2, name: 'Светлана', image: svetlanaImg, phone: '79103884549', phoneFormatted: '+7 (910) 388-45-49', email: 'sveta@webrazrabotka.ru', telegram: 'https://t.me/mozsveta' },
  { id: 3, name: 'Маргарита', image: ritaImg, phone: '79081612062', phoneFormatted: '+7 (908) 161-20-62', email: 'rita@webrazrabotka.ru', telegram: null },
  { id: 4, name: 'Юлия', image: yuliyaImg, phone: '79082318418', phoneFormatted: '+7 (908) 231-84-18', email: 'julia@webrazrabotka.ru', telegram: 'https://t.me/Pelmeh0' },
  { id: 5, name: 'Кристина', image: kristinaImg, phone: '79990793009', phoneFormatted: '+7 (999) 079-30-09', email: 'Kristina@webrazrabotka.ru', telegram: 'https://t.me/kul_kris' }
]

const reasons = [
  { title: 'Лучшие дизайнеры города', desc: 'с опытом от 100 макетов, золотые медалистки' },
  { title: 'Лучшая система Joomla 3.5', desc: 'оптимизация сайта под продажи, максимальные возможности по расширению' },
  { title: 'Не меняем цены уже 6 лет!', desc: 'у нас самые минимальные цены за сайт. Больше экономия - больше прибыль!' },
  { title: 'За 10 лет ни одного отказа', desc: 'удовлетворяем потребности любого клиента. Работаем по вашему техническому заданию' },
  { title: 'Мы не работаем по шаблонам', desc: 'уникальный и эксклюзивный сайт с учетом всех ваших пожеланий, по минимальной цене' },
  { title: 'Делаем до 30 сайтов в месяц', desc: 'десятки сайтов во всех сферах' }
]

const offersList = [
  { title: 'Эксклюзивный сайт', desc: 'Только индивидуальный, неповторимый дизайн. Мы гарантируем, что этот дизайн не получит больше никто.', price: '15 000 руб.', sale: null },
  { title: 'Эксклюзивный + Витрина', desc: 'Витрина это уникальная разработка нашей компании, включающая 3 больших блока инструментов.', price: '15 000 руб. + 30 000 руб.', sale: null },
  { title: 'Эксклюзивный + Витрина + Интернет-магазин', desc: 'Функциональный удобный интернет-магазин с неограниченным количеством позиций.', price: '15 000 руб. + 30 000 руб. + 25 000 руб.', sale: null },
  { title: 'Интернет магазин + Интеграция 1С', desc: 'Возможность одним кликом перенести 10000 тысяч позиций и более в магазин.', price: '25 000 руб. + 25 000 руб.', sale: null }
]

const commercialTools = [
  'Лучший редактор контента Word JCE последней версии',
  'Мультизагрузка картинок',
  'Мультипросмотр картинок',
  'Перетаскивание пунктов меню',
  'Галерея с 10-ю вариантами всплытия'
]

const externalTools = [
  'Эффектный слайдер в шапке сайта',
  'Фиксированная форма – обратный звонок',
  'Уникальный новостной блог с прокруткой',
  'Отзывы клиентов с админ-панелью',
  'Спутниковая карта навигации (в подарок)',
  'Прописка в Яндекс, Мейл, Гугл',
  'Информация о количестве пользователей'
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
  const element = document.querySelector('.advantages-hero')
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const scrollToOffers = () => {
  const element = document.querySelector('.offers-section')
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const selectManager = (manager) => {
  showManagersModal.value = false
  handleNotification({ message: `Вы выбрали менеджера ${manager.name}. Специалист свяжется с вами.` })
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

onMounted(() => {
  createStars()
})

onUnmounted(() => {
  if (starInterval) clearInterval(starInterval)
})
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
.site-full { width: 100%; min-height: 100vh; background: #ffffff; overflow-x: hidden; }

/* Общие стили */
.container { max-width: 1200px; margin: 0 auto; padding: 0 30px; }
.section-title { font-size: 36px; color: #000; text-align: center; margin-bottom: 50px; }
.section-title span { color: #cc0000; }
.red { color: #cc0000; }

/* Анимации */
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
@keyframes floatBlob { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(50px,-50px) scale(1.1); } 66% { transform: translate(-30px,40px) scale(0.9); } }
@keyframes twinkle { 0% { opacity: 0; } 50% { opacity: 0.5; transform: scale(1.5); } 100% { opacity: 0; } }

.star { position: fixed; width: 2px; height: 2px; background: #cc0000; border-radius: 50%; opacity: 0; animation: twinkle 3s ease-in-out infinite; pointer-events: none; z-index: 9999; }

.glass-card { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border: 1px solid rgba(204,0,0,0.1); border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); transition: all 0.3s; }
.glass-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(204,0,0,0.1); }

/* Менеджеры */
.managers-section { padding: 60px 0; }
.managers-grid-adv { display: grid; grid-template-columns: repeat(5, 1fr); gap: 25px; }
.manager-card-adv { padding: 25px; text-align: center; cursor: pointer; transition: all 0.3s; }
.manager-card-adv:hover { transform: translateY(-10px); border-color: #cc0000; }
.manager-avatar-adv img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 15px; }
.manager-name-adv { font-size: 18px; font-weight: bold; color: #000; margin-bottom: 5px; }
.manager-spec-adv { font-size: 12px; color: #999; margin-bottom: 10px; }
.manager-phone-adv a, .manager-email-adv a, .manager-tg-adv a { font-size: 12px; color: #cc0000; text-decoration: none; }

/* Герой секция */
.advantages-hero { padding: 60px 0; text-align: center; background: linear-gradient(135deg, #fef5f5 0%, #ffffff 50%, #fef0f0 100%); }
.hero-subtitle { font-size: 24px; margin: 20px 0; }
.hero-subtitle span { color: #cc0000; font-weight: bold; }
.hero-description { color: #666; max-width: 800px; margin: 0 auto 30px; }
.tech-future { margin: 40px 0; }
.tech-text { font-size: 20px; font-weight: bold; }
.features-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px; }
.feature-item { padding: 30px; background: white; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: all 0.3s; }
.feature-item:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(204,0,0,0.1); border: 1px solid rgba(204,0,0,0.1); }
.feature-icon { font-size: 48px; margin-bottom: 15px; }
.feature-icon img { width: 48px; height: 48px; object-fit: contain; display: block; margin: 0 auto; transition: transform 0.3s ease; }
.feature-item:hover .feature-icon img { transform: scale(1.1); }
.feature-title { font-size: 20px; font-weight: bold; color: #cc0000; margin-bottom: 10px; }
.feature-desc { color: #666; }

/* Помощь */
.help-section { margin: 60px 30px; padding: 40px; }
.help-content { display: flex; gap: 50px; align-items: center; flex-wrap: wrap; }
.help-image { flex: 1; min-width: 200px; }
.help-placeholder { font-size: 80px; text-align: center; }
.help-placeholder img { width: 120px; height: 120px; object-fit: contain; display: block; margin: 0 auto; transition: transform 0.3s ease; filter: invert(12%) sepia(95%) saturate(7000%) hue-rotate(0deg) brightness(95%) contrast(110%); }
.help-placeholder:hover img { transform: scale(1.1); }
.help-text { flex: 2; }
.help-text h3 { font-size: 28px; color: #000; margin-bottom: 20px; }
.help-text ul { list-style: none; }
.help-text li { padding: 10px 0; padding-left: 25px; position: relative; color: #444; }
.help-text li:before { content: '✓'; color: #cc0000; position: absolute; left: 0; font-weight: bold; }
.learn-more { background: none; border: 2px solid #cc0000; color: #cc0000; padding: 10px 25px; border-radius: 30px; cursor: pointer; margin-top: 20px; transition: all 0.3s; }
.learn-more:hover { background: #cc0000; color: white; }

/* Цитата */
.quote-section { padding: 40px 0; }
.quote-card { padding: 50px; text-align: center; max-width: 800px; margin: 0 auto; }
.quote-card p { font-size: 20px; color: #333; font-style: italic; }

/* Сайт-витрина */
.showcase-section { padding: 60px 0; background: #f8f8f8; }
.showcase-subtitle { font-size: 28px; text-align: center; margin-bottom: 20px; }
.showcase-subtitle span { color: #cc0000; }
.showcase-desc { text-align: center; color: #666; max-width: 800px; margin: 0 auto 40px; }
.showcase-blocks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
.showcase-block { background: white; border-radius: 20px; padding: 25px; border: 1px solid #eee; transition: all 0.3s; }
.showcase-block:hover { transform: translateY(-5px); border-color: #cc0000; box-shadow: 0 8px 25px rgba(204,0,0,0.08); }
.block-icon { font-size: 48px; margin-bottom: 15px; }
.block-icon img { width: 48px; height: 48px; object-fit: contain; display: block; margin: 0 auto; transition: transform 0.3s ease; }
.showcase-block:hover .block-icon img { transform: scale(1.1); }
.showcase-block h4 { font-size: 20px; color: #cc0000; margin-bottom: 15px; }
.showcase-block ul { list-style: none; }
.showcase-block li { padding: 8px 0; padding-left: 20px; position: relative; color: #666; }
.showcase-block li:before { content: '•'; color: #cc0000; position: absolute; left: 0; }
.showcase-footer { text-align: center; }
.showcase-footer .bold { font-weight: bold; font-size: 18px; margin: 20px 0; }

/* Почему клиенты */
.why-clients-section { padding: 60px 0; }
.reasons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.reason-card { padding: 25px; text-align: center; }
.reason-number { font-size: 32px; font-weight: bold; color: #cc0000; margin-bottom: 15px; }
.reason-title { font-size: 18px; font-weight: bold; color: #000; margin-bottom: 10px; }
.reason-desc { color: #666; font-size: 14px; line-height: 1.5; }

/* Экономия */
.economy-section { padding: 60px 0; background: linear-gradient(135deg, #fef5f5, #ffffff); }
.compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
.compare-card { padding: 30px; }
.compare-card h3 { font-size: 24px; color: #cc0000; margin-bottom: 20px; }
.compare-card ul { list-style: none; }
.compare-card li { padding: 10px 0; color: #444; }

/* Предложения */
.offers-section { padding: 60px 0; }
.offers-grid-adv { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 40px; }
.offer-card-adv { padding: 30px; text-align: center; }
.offer-card-adv h3 { font-size: 20px; color: #000; margin-bottom: 15px; }
.offer-card-adv p { color: #666; margin-bottom: 20px; }
.offer-price { font-size: 20px; font-weight: bold; color: #cc0000; margin-bottom: 15px; }
.offer-btn-adv { background: #cc0000; color: white; border: none; padding: 10px 25px; border-radius: 30px; cursor: pointer; transition: all 0.3s; }
.offer-btn-adv:hover { background: #ff1a1a; transform: translateY(-2px); }

/* ============================================ */
/* СПЕЦПРЕДЛОЖЕНИЕ - ИСПРАВЛЕННЫЙ БЛОК */
/* ============================================ */

.special-offer {
  padding: 30px 40px;
  margin-top: 30px;
  text-align: center;
  background: linear-gradient(135deg, #fff5f5, #ffffff, #fff0f0);
  border: 2px solid rgba(204, 0, 0, 0.15);
  border-radius: 24px;
}

.special-offer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.special-text {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.special-text .date {
  color: #cc0000;
  font-weight: bold;
  font-size: 20px;
}

.special-text .highlight {
  color: #cc0000;
  font-weight: 600;
}

.special-offer-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.sale-badge {
  display: inline-block;
  background: #cc0000;
  color: white;
  padding: 8px 24px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 18px;
  animation: pulse 2s ease-in-out infinite;
  letter-spacing: 0.5px;
}

.special-btn {
  background: #cc0000;
  color: white;
  border: none;
  padding: 12px 35px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.special-btn:hover {
  background: #ff1a1a;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(204, 0, 0, 0.3);
}

/* Подарки */
.gifts-section { padding: 60px 0; background: #f8f8f8; }
.gifts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
.gift-col h3 { font-size: 24px; color: #cc0000; margin-bottom: 20px; }
.gift-col ul { list-style: none; }
.gift-col li { padding: 10px 0; padding-left: 25px; position: relative; color: #444; }
.gift-col li:before { content: '✓'; color: #cc0000; position: absolute; left: 0; }

/* Низкая цена */
.low-price-section { margin: 60px 30px; padding: 50px; text-align: center; }
.free-text { font-size: 18px; margin-bottom: 30px; }
.free-list { list-style: none; margin-bottom: 30px; }
.free-list li { padding: 10px 0; color: #444; }
.cta-btn.large { padding: 15px 40px; font-size: 18px; }

.cta-btn { background: #cc0000; color: white; border: none; padding: 12px 30px; border-radius: 40px; cursor: pointer; font-weight: bold; transition: all 0.3s; }
.cta-btn:hover { background: #ff1a1a; transform: translateY(-2px); }

/* ============================================ */
/* АДАПТИВНЫЕ СТИЛИ */
/* ============================================ */

/* Планшеты и маленькие ноутбуки */
@media (max-width: 1024px) {
  .container { padding: 0 20px; }
  .section-title { font-size: 30px; margin-bottom: 35px; }
  .managers-grid-adv { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .reasons-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .features-row { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .showcase-blocks { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .offers-grid-adv { grid-template-columns: 1fr 1fr; gap: 20px; }
  .gifts-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
  .compare-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .help-section { margin: 40px 20px; padding: 30px; }
  .low-price-section { margin: 40px 20px; padding: 35px; }
  .help-content { gap: 30px; }
  .help-image { flex: 0 0 150px; min-width: 150px; }
  .help-placeholder img { width: 90px; height: 90px; }
  .quote-card { padding: 35px; margin: 0 20px; }
  .special-offer { padding: 25px 30px; }
  .special-text { font-size: 16px; }
}

/* Планшеты вертикальные (768-1024px) */
@media (max-width: 768px) {
  .container { padding: 0 16px; }
  .section-title { font-size: 26px; margin-bottom: 30px; }
  .managers-grid-adv { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .manager-card-adv { padding: 18px 15px; }
  .manager-avatar-adv img { width: 75px; height: 75px; }
  .manager-name-adv { font-size: 16px; }
  .reasons-grid { grid-template-columns: 1fr 1fr; gap: 15px; }
  .features-row { grid-template-columns: 1fr; gap: 15px; margin-top: 30px; }
  .feature-item { padding: 20px; max-width: 400px; margin: 0 auto; width: 100%; }
  .feature-icon img { width: 40px; height: 40px; }
  .feature-title { font-size: 18px; }
  .showcase-blocks { grid-template-columns: 1fr; gap: 20px; }
  .showcase-block { padding: 20px; max-width: 500px; margin: 0 auto; width: 100%; }
  .offers-grid-adv { grid-template-columns: 1fr; gap: 20px; }
  .offer-card-adv { padding: 25px 20px; max-width: 500px; margin: 0 auto; width: 100%; }
  .gifts-grid { grid-template-columns: 1fr; gap: 25px; }
  .gift-col { max-width: 500px; margin: 0 auto; width: 100%; }
  .compare-grid { grid-template-columns: 1fr; gap: 20px; }
  .compare-card { padding: 25px 20px; max-width: 500px; margin: 0 auto; width: 100%; }
  .help-section { margin: 30px 16px; padding: 25px 20px; }
  .help-content { flex-direction: column; text-align: center; gap: 20px; }
  .help-image { flex: 0 0 auto; min-width: auto; }
  .help-placeholder img { width: 80px; height: 80px; }
  .help-text h3 { font-size: 24px; }
  .help-text ul { text-align: left; display: inline-block; }
  .help-text li { text-align: left; }
  .learn-more { width: 100%; max-width: 300px; }
  .quote-card { padding: 25px 20px; margin: 0 16px; }
  .quote-card p { font-size: 17px; }
  .low-price-section { margin: 30px 16px; padding: 25px 20px; }
  .free-text { font-size: 16px; }
  .free-list li { font-size: 14px; }
  .cta-btn { padding: 10px 24px; font-size: 14px; }
  .cta-btn.large { padding: 12px 30px; font-size: 16px; }
  .special-offer { padding: 20px; }
  .special-text { font-size: 15px; }
  .special-text .date { font-size: 17px; }
  .special-offer-actions { flex-direction: column; gap: 15px; width: 100%; }
  .sale-badge { font-size: 16px; padding: 6px 20px; }
  .special-btn { width: 100%; max-width: 280px; padding: 12px 20px; font-size: 15px; }
  .section-title { font-size: 24px; }
  .hero-subtitle { font-size: 20px; }
  .hero-description { font-size: 15px; padding: 0 10px; }
  .tech-text { font-size: 17px; }
  .advantages-hero { padding: 40px 0; }
  .managers-section { padding: 40px 0; }
  .showcase-section { padding: 40px 0; }
  .why-clients-section { padding: 40px 0; }
  .economy-section { padding: 40px 0; }
  .offers-section { padding: 40px 0; }
  .gifts-section { padding: 40px 0; }
  .showcase-subtitle { font-size: 22px; }
  .showcase-desc { font-size: 15px; padding: 0 10px; }
  .showcase-footer .bold { font-size: 16px; }
  .reason-number { font-size: 28px; }
  .reason-title { font-size: 16px; }
  .reason-desc { font-size: 13px; }
}

/* Мобильные телефоны (до 480px) */
@media (max-width: 480px) {
  .container { padding: 0 12px; }
  .section-title { font-size: 20px; margin-bottom: 25px; }
  .managers-grid-adv { grid-template-columns: 1fr 1fr; gap: 12px; }
  .manager-card-adv { padding: 15px 10px; }
  .manager-avatar-adv img { width: 60px; height: 60px; margin-bottom: 10px; }
  .manager-name-adv { font-size: 14px; }
  .manager-phone-adv a, .manager-email-adv a, .manager-tg-adv a { font-size: 10px; }
  .reasons-grid { grid-template-columns: 1fr; gap: 12px; }
  .reason-card { padding: 18px 15px; }
  .reason-number { font-size: 24px; }
  .features-row { gap: 12px; margin-top: 20px; }
  .feature-item { padding: 15px; }
  .feature-icon img { width: 32px; height: 32px; }
  .feature-title { font-size: 16px; }
  .feature-desc { font-size: 13px; }
  .showcase-block { padding: 15px; }
  .block-icon img { width: 36px; height: 36px; }
  .showcase-block h4 { font-size: 17px; }
  .showcase-block li { font-size: 13px; padding: 5px 0 5px 16px; }
  .offer-card-adv { padding: 20px 15px; }
  .offer-card-adv h3 { font-size: 17px; }
  .offer-price { font-size: 17px; }
  .offer-btn-adv { padding: 8px 20px; font-size: 13px; }
  .compare-card { padding: 20px 15px; }
  .compare-card h3 { font-size: 20px; }
  .compare-card li { font-size: 13px; padding: 6px 0; }
  .help-section { margin: 20px 12px; padding: 20px 15px; }
  .help-text h3 { font-size: 20px; }
  .help-text li { font-size: 13px; padding: 6px 0 6px 20px; }
  .learn-more { font-size: 13px; padding: 8px 20px; }
  .quote-card { padding: 20px 15px; margin: 0 12px; }
  .quote-card p { font-size: 15px; }
  .low-price-section { margin: 20px 12px; padding: 20px 15px; }
  .free-text { font-size: 14px; }
  .free-list li { font-size: 13px; padding: 6px 0; }
  .cta-btn { padding: 8px 18px; font-size: 13px; }
  .cta-btn.large { padding: 10px 24px; font-size: 14px; }
  .special-offer { padding: 15px; }
  .special-text { font-size: 13px; }
  .special-text .date { font-size: 15px; }
  .special-text .highlight { display: inline-block; }
  .special-offer-actions { flex-direction: column; gap: 12px; }
  .sale-badge { font-size: 14px; padding: 5px 16px; }
  .special-btn { width: 100%; font-size: 13px; padding: 10px 16px; max-width: 100%; }
  .gift-col h3 { font-size: 18px; }
  .gift-col li { font-size: 13px; padding: 6px 0 6px 20px; }
  .hero-subtitle { font-size: 17px; }
  .hero-description { font-size: 13px; padding: 0 5px; }
  .tech-text { font-size: 14px; }
  .advantages-hero { padding: 30px 0; }
  .managers-section { padding: 30px 0; }
  .showcase-section { padding: 30px 0; }
  .why-clients-section { padding: 30px 0; }
  .economy-section { padding: 30px 0; }
  .offers-section { padding: 30px 0; }
  .gifts-section { padding: 30px 0; }
  .showcase-subtitle { font-size: 18px; }
  .showcase-desc { font-size: 13px; padding: 0 5px; }
  .showcase-footer p { font-size: 13px; }
  .showcase-footer .bold { font-size: 14px; }
}
</style>
