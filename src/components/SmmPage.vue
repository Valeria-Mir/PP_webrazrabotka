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

    <Breadcrumbs currentPage="SMM продвижение" />

    <!-- ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ SMM -->
    <div class="smm-page-content">
      <div class="container">

        <!-- HERO БЛОК -->
        <div class="smm-hero">
          <div class="hero-image">
            <video class="hero-video" autoplay loop muted playsinline>
              <source src="/assets/3d.mp4" type="video/mp4">
              Ваш браузер не поддерживает видео
            </video>
          </div>
          <div class="hero-text">
            <h1>Эффективное SMM-продвижение <span>бизнеса в Нижнем Новгороде</span></h1>
            <ul>
              <li>Не просто ведем соцсети в Нижнем Новгороде, а настраиваем регулярный приток реальных клиентов.</li>
              <li>Работаем в рамках Вашего рекламного бюджета.</li>
              <li>Результат продвижения в виде увеличения продаж уже в первые месяцы.</li>
            </ul>
            <button class="styleBtn" @click="showOrderModal = true"><span>Заказать СММ продвижение</span> компании в социальных сетях</button>
          </div>
        </div>

        <!-- ПРОДВИЖЕНИЕ СОЦСЕТЕЙ -->
        <div class="promotion-smm">
          <h2 class="titleSmm">Продвижение соцсетей в Нижнем Новгороде от компании <span>«Вебразработка»</span></h2>
          <p>Социальные сети – это эффективный инструмент продвижения бизнеса, увеличения количества продаж, повышения узнаваемости компании, создания положительного имиджа, привлечения трафика на сайт и подписчиков в группу/интстаграм-аккаунт.</p>

          <!-- Оформление -->
          <div class="service-block">
            <h3><strong>Оформление сообщества/аккаунта в ВКонтакте, Instagram, Facebook.</strong></h3>
            <p><strong>Что входит в стоимость:</strong></p>
            <ul>
              <li>Составление портрета ЦА;</li>
              <li>Анализ конкурентов;</li>
              <li>Визуальное оформление: добавление описания компании, создание аватара, обложки, карточек для товаров, обсуждений, фотоальбомов, добавление видео, виджетов, меню и т.п.</li>
              <li>Заполнение контактной информации;</li>
              <li>Написание контент-плана.</li>
              <li>Написание двух постов.</li>
            </ul>
            <p class="price"><strong>Цена: 15 000 руб. за 1 соц. сеть.</strong></p>
          </div>

          <!-- Ведение -->
          <div class="service-block">
            <h3><strong>Ведение.</strong></h3>
            <p><strong>Что входит в стоимость:</strong></p>
            <ul>
              <li>Модерация (работа с комментариями, спамом, негативом, отзывами).</li>
              <li>Написание и публикация от 2 постов в неделю (8-9 в месяц)</li>
              <li>Составление рекомендаций, генерация идей относительно контента, стратегии ведения групп/аккаунтов в соцсетях;</li>
              <li>Поддержание, стимулирование активности в группах/аккаунтах в соц. сетях.</li>
            </ul>
            <p class="price"><strong>Цена: от 10 000 руб. в месяц.</strong></p>
          </div>

          <!-- Таргетированная реклама -->
          <div class="service-block">
            <h3><strong>Таргетированная реклама в ВКонтакте, Instagram, Facebook.</strong></h3>
            <p><strong>Что входит в стоимость:</strong></p>
            <ul>
              <li>Анализ группы/сайта, анализ конкурентов;</li>
              <li>Разработка стратегии рекламы;</li>
              <li>Построение портрета ЦА на основе брифа, Сбор ЦА;</li>
              <li>Создание креативов разных форматов;</li>
              <li>А/В тестирование;</li>
              <li>Анализ тестовой рекламной кампании;</li>
              <li>Выявление успешных объявлений и аудиторий;</li>
              <li>Регулярный мониторинг объявлений;</li>
              <li>Обновление креативов по мере необходимости;</li>
              <li>Отчеты.</li>
            </ul>
            <p class="price"><strong>Составление и ведение рекламы: 1 соц. сеть – 15 000 руб. первый месяц, далее 10 000р.</strong></p>
            <p class="price"><strong>Рекомендованный Баланс от 10 000р.</strong></p>
          </div>
        </div>

        <!-- ЧТО ТАКОЕ SMM -->
        <div class="about-smm">
          <h3 class="titleSmm">Что такое SMM продвижение</h3>
          <p>Это быстрый способ рассказать целевой аудитории о своем продукте или пакете услуг с помощью постов и другого контента. Также, это отличный способ маркетинга и рекламы, способствующий привлечению целевой аудитории в свой бизнес и увеличивающий продажи.<br> Основные каналы SMM – размещение рекламных постов: Vk, YT, Fb, OK, Inst.</p>

          <p class="razdAS">Ключевые задачи SMM:</p>
          <div class="tasks-grid">
            <div class="task-card">
              <div class="task-name">Создание и повышение имиджа компании</div>
              <ul>
                <li>аудит, разработка и реализация комплексной стратегии рекламы;</li>
                <li>выделение среди конкурентов;</li>
                <li>посты с анонсированием скидок на продажах, акций, конкурсов;</li>
                <li>привлечение к сотрудничеству блогеров (выбираем ведущих блогеров региона с Вашей целевой аудиторией).</li>
              </ul>
            </div>
            <div class="task-card">
              <div class="task-name">Увеличение продаж компании</div>
              <ul>
                <li>создание тематических постов;</li>
                <li>публикация рекламных постов в рамках маркетингового плана;</li>
                <li>построение каналов привлечения клиентов в социальных сетях на основе проведенного ранее аудита;</li>
                <li>реклама через блогеров</li>
              </ul>
            </div>
            <div class="task-card">
              <div class="task-name">Удержание и развитие аудитории</div>
              <ul>
                <li>анализ целевой аудитории, разработка и реализация привлекающей SMM-стратегии и контент-плана на имеющихся каналах привлечения клиентов, проработка постов;</li>
                <li>увеличение эффективности за счет использования пакета дополнительных каналов коммуникаций;</li>
                <li>анализ эффективности используемых методов, доработка и реализация новых идей</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ЭТАПЫ SMM -->
        <div class="stages-smm">
          <h2 class="titleSmm">Этапы SMM</h2>
          <p class="txtBoldSmm">Как мы будем работать, если Вы направите заявку в компанию «Вебразработка»:</p>
          <div class="stages-tabs">
            <div class="stages-list">
              <div class="stage-item" v-for="(stage, idx) in stages" :key="idx" :class="{ active: activeStage === idx }" @click="activeStage = idx">
                <span>{{ idx + 1 }}</span> этап
              </div>
            </div>
            <div class="stage-content">
              <p>{{ stages[activeStage]?.content }}</p>
            </div>
          </div>
        </div>

        <!-- ПРЕИМУЩЕСТВА -->
        <div class="advantages-smm">
          <h3 class="titleSmm">Преимущества «Вебразработка»</h3>
          <p class="txtBoldSmm">Несколько слов о том, почему мы входим в категорию лучших SMM агентств в Нижнем Новгороде:</p>
          <div class="advantages-grid-smm">
            <div class="advantage-smm" v-for="(adv, idx) in advantagesSmm" :key="idx">
              <div class="num">{{ String(idx + 1).padStart(2, '0') }}</div>
              <div class="name">{{ adv.name }}</div>
              <p>{{ adv.desc }}</p>
            </div>
          </div>
        </div>

        <!-- ФОРМА ЗАЯВКИ -->
        <div class="request-form">
          <h3 class="titleReq">Оформить заявку на услугу</h3>
          <p>Интернет агентство «Вебразработка» предлагает качественное СММ по демократичным ценам. Чтобы заказать раскрутку Вашей группы – оставьте заявку на необходимый пакет услуг, позвонив нам по телефону или воспользуйтесь специальной формой на нашем сайте.</p>
          <div class="form-block">
            <form @submit.prevent="submitOrderForm" novalidate>
              <p>Не упустите возможность и закажите услугу прямо сейчас!</p>

              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': errors.name }">
                  <input
                      type="text"
                      v-model="requestForm.name"
                      placeholder="Имя *"
                      @blur="validateField('name')"
                      @input="validateField('name')"
                  >
                  <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                </div>

                <div class="form-group" :class="{ 'has-error': errors.phone }">
                  <input
                      type="tel"
                      v-model="requestForm.phone"
                      placeholder="+7 (___) ___-__-__"
                      @blur="validateField('phone')"
                      @input="handlePhoneInput"
                      maxlength="18"
                  >
                  <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
                  <span class="hint-text" v-if="!errors.phone && requestForm.phone">Пример: +7 (999) 123-45-67</span>
                </div>
              </div>

              <p class="zv">* - поля, обязательные для заполнения</p>

              <div class="form-group" :class="{ 'has-error': errors.agree }">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="requestForm.agree" @change="validateField('agree')">
                  <span>Согласие на обработку персональных данных с целью обработки запроса. С условиями <a href="/politika-v-otnoshenii-obrabotki-personalnykh-dannykh">Политики</a> и <a href="/soglasie-posetitelya-saita-na-obrabotku-personalnykh-dannykh">Согласия</a> ознакомлен.</span>
                </label>
                <span class="error-message" v-if="errors.agree">{{ errors.agree }}</span>
              </div>

              <button type="submit" class="submit-btn" :disabled="requestLoading">
                {{ requestLoading ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ' }}
              </button>
            </form>
          </div>
        </div>

        <!-- ПОПУЛЯРНЫЕ ВОПРОСЫ -->
        <div class="popular-questions">
          <h4 class="titleSmm">Популярные вопросы</h4>
          <div class="questions-wrap">
            <div class="question-item" v-for="(q, idx) in questions" :key="idx">
              <div class="question-title" @click="toggleQuestion(idx)">
                <p>{{ q.question }}</p>
                <div class="dec" :class="{ open: openQuestion === idx }">▼</div>
              </div>
              <div class="question-answer" v-if="openQuestion === idx">
                <div v-html="q.answer"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <AppFooter />

    <Modals
        :showOrderModal="showOrderModal"
        :showManagersModal="showManagersModal"
        orderTitle="Заявка на SMM продвижение"
        :showSocialField="true"
        @update:showOrderModal="showOrderModal = $event"
        @update:showManagersModal="showManagersModal = $event"
        @orderSubmitted="handleNotification"
    />

    <ScrollTop />
    <Notification :show="notification.show" :message="notification.message" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
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
const activeStage = ref(4)
const openQuestion = ref(null)
const requestLoading = ref(false)

// Состояние формы
const requestForm = reactive({
  name: '',
  phone: '',
  agree: false
})

// Ошибки валидации
const errors = reactive({
  name: '',
  phone: '',
  agree: ''
})

let starInterval

const stages = [
  { content: 'Аудит. Проводим анализ Вашего бизнеса с точки зрения возможностей маркетинга.' },
  { content: 'Осуществляем анализ конкурентной среды. Аудит конкурентов позволяет понять, какие решения действительно работают в Вашем сегменте бизнеса.' },
  { content: 'Ставим задачи SMM, составляем контент-план.' },
  { content: 'Определяем пакет инструментов, которые лучше всего использовать.' },
  { content: 'Разрабатываем стратегию размещения постов и дизайнерского контента, запускаем таргетированную рекламу на основе проведенного аудита. Выделяем компанию среди конкурентов.' },
  { content: 'Делаем анализ запущенной концепции, дорабатываем и улучшаем качество контента, публикуем рекламные посты, осуществляем дизайнерское оформление соц.сетей и направляем заявки на сотрудничество с ведущими блогерами.' }
]

const advantagesSmm = [
  { name: 'Более 17 лет на рынке', desc: 'Грамотно подходим к аудиту, эффективно продвигаем компанию в социальных сетях и выделяем ее среди конкурентов.' },
  { name: 'Многопрофильная ориентация', desc: 'Мы работали с абсолютно разными бизнесами в социальных сетях и везде были успешны.' },
  { name: 'Индивидуальный подход', desc: 'Всегда внимательно изучаем текущие потребности и предлагаем пакет лучших решений. Работаем на результат.' },
  { name: 'Дружная команда опытных специалистов', desc: 'В штат сотрудников компании входят программисты, специалисты по маркетингу, дизайнеры, блогеры.' }
]

const questions = [
  {
    question: 'Каких целей можно достигнуть с помощью SMM?',
    answer: '<p>Зная и понимая задачи, которые можно решить через продвижение в соцсетях, можно разработать успешную SMM-стратегию. Поэтому, прежде чем заказать SMM продвижение в Нижнем Новгороде необходимо определиться с его целями.</p><p><strong>Блогеры и владельцы бизнесов в социальных сетях чаще всего ставят следующие цели:</strong></p><ul><li>аудит запросов целевой аудитории;</li><li>увеличение продаж;</li><li>улучшение репутации;</li><li>общение с аудиторией;</li><li>получение трафика на сайт.</li></ul><p>Можно ставить одновременно несколько целей: поднять продажи и улучшить репутацию и т.д.</p>'
  },
  {
    question: 'Какие факторы влияют на успешность SMM-продвижения в социальных сетях?',
    answer: '<p>Для успешного СММ-продвижения в социальных сетях необходимо сочетание следующих факторов:</p><ul><li>грамотный подход к созданию стратегии;</li><li>умение сотрудников Вашего бизнеса общаться с клиентом и доносить необходимую информацию;</li><li>одновременное использование нескольких платформ: ВК, Ютуб, Инстаграм и т.д. Чем больше клиентов в социальных сетях – тем лучше для продвижения;</li><li>наличие сотрудников, занимающихся SMM. Чтобы добиться результата в продвижении, желательно нанять фрилансеров или специальную команду, которая будет заниматься исключительно SMM: проводить аудит, продавать товары и т.д.;</li><li>осуществление регулярного анализа окупаемости продвижения социальных сетей. Анализируя продвижение соц.сетей Вы сможете увеличить эффективность маркетингового плана.</li></ul>'
  }
]

// Функции валидации для российского номера
const validateName = (value) => {
  if (!value || value.trim().length === 0) {
    return 'Пожалуйста, введите ваше имя'
  }
  if (value.trim().length < 2) {
    return 'Имя должно содержать минимум 2 символа'
  }
  if (!/^[а-яА-Яa-zA-Z\s-]+$/.test(value.trim())) {
    return 'Имя может содержать только буквы'
  }
  return ''
}

/**
 * Валидация российского номера телефона
 * Поддерживает форматы:
 * - 8 (999) 123-45-67
 * - +7 (999) 123-45-67
 * - 89991234567
 * - +79991234567
 * - 8-999-123-45-67
 * - 8 999 123 45 67
 */
const validatePhone = (value) => {
  if (!value || value.trim().length === 0) {
    return 'Пожалуйста, введите номер телефона'
  }

  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, '')

  // Проверяем, что есть цифры
  if (digits.length === 0) {
    return 'Введите номер телефона'
  }

  // Российские номера должны содержать 10 или 11 цифр
  // 10 цифр - номер без кода страны (9xx xxx xx xx)
  // 11 цифр - номер с кодом страны (8 или 7 в начале)
  if (digits.length < 10) {
    return 'Номер должен содержать минимум 10 цифр'
  }

  if (digits.length > 11) {
    return 'Номер слишком длинный (максимум 11 цифр)'
  }

  // Проверка для 11-значных номеров (с кодом страны)
  if (digits.length === 11) {
    const firstDigit = digits[0]
    // Код страны должен быть 7 или 8
    if (firstDigit !== '7' && firstDigit !== '8') {
      return 'Номер должен начинаться с +7 или 8'
    }

    // Проверяем, что после кода страны идет 9 (оператор)
    const operatorCode = digits.substring(1, 2)
    if (operatorCode !== '9') {
      return 'Некорректный код оператора (должен начинаться с 9)'
    }

    // Проверяем, что остальные 9 цифр (после кода оператора) корректны
    const restDigits = digits.substring(2)
    if (restDigits.length !== 9) {
      return 'Некорректный номер'
    }
  }

  // Проверка для 10-значных номеров (без кода страны)
  if (digits.length === 10) {
    // Проверяем, что номер начинается с 9
    if (digits[0] !== '9') {
      return 'Номер должен начинаться с 9'
    }
  }

  return ''
}

const validateAgree = (value) => {
  if (!value) {
    return 'Необходимо согласие на обработку персональных данных'
  }
  return ''
}

// Валидация конкретного поля
const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = validateName(requestForm.name)
      break
    case 'phone':
      errors.phone = validatePhone(requestForm.phone)
      break
    case 'agree':
      errors.agree = validateAgree(requestForm.agree)
      break
  }
}

// Валидация всей формы
const validateForm = () => {
  validateField('name')
  validateField('phone')
  validateField('agree')

  return !errors.name && !errors.phone && !errors.agree
}

/**
 * Форматирование российского номера телефона
 * Преобразует в формат: +7 (XXX) XXX-XX-XX
 */
const formatPhone = (value) => {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, '')

  if (digits.length === 0) return ''

  // Ограничиваем длину 11 цифрами
  const limitedDigits = digits.slice(0, 11)

  let formatted = ''

  if (limitedDigits.length <= 1) {
    // Если есть одна цифра, показываем как +7 или +8
    formatted = '+' + limitedDigits
  } else if (limitedDigits.length <= 4) {
    // +7 (XXX)
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1)
    formatted = '+' + firstDigit + ' (' + areaCode
  } else if (limitedDigits.length <= 7) {
    // +7 (XXX) XXX
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart
  } else if (limitedDigits.length <= 9) {
    // +7 (XXX) XXX-XX
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4, 7)
    const secondPart = limitedDigits.slice(7)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart + '-' + secondPart
  } else {
    // +7 (XXX) XXX-XX-XX
    const firstDigit = limitedDigits[0]
    const areaCode = limitedDigits.slice(1, 4)
    const firstPart = limitedDigits.slice(4, 7)
    const secondPart = limitedDigits.slice(7, 9)
    const thirdPart = limitedDigits.slice(9, 11)
    formatted = '+' + firstDigit + ' (' + areaCode + ') ' + firstPart + '-' + secondPart + '-' + thirdPart
  }

  return formatted
}

// Обработка ввода телефона с маской
const handlePhoneInput = (e) => {
  const value = e.target.value
  const formatted = formatPhone(value)

  // Обновляем значение, если оно изменилось
  if (formatted !== requestForm.phone) {
    requestForm.phone = formatted
  }

  // Валидация в реальном времени
  validateField('phone')
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
  const element = document.querySelector('.advantages-smm')
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const toggleQuestion = (idx) => {
  openQuestion.value = openQuestion.value === idx ? null : idx
}

const submitOrderForm = async () => {
  // Валидация всех полей
  if (!validateForm()) {
    // Прокрутка к первому полю с ошибкой
    const firstError = document.querySelector('.has-error input, .has-error input[type="checkbox"]')
    if (firstError) {
      firstError.focus()
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    handleNotification({ message: 'Пожалуйста, исправьте ошибки в форме' })
    return
  }

  requestLoading.value = true

  try {
    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Успешная отправка
    handleNotification({ message: 'Заявка успешно отправлена! Менеджер свяжется с вами в ближайшее время.' })

    // Очистка формы
    requestForm.name = ''
    requestForm.phone = ''
    requestForm.agree = false

    // Сброс ошибок
    errors.name = ''
    errors.phone = ''
    errors.agree = ''

  } catch (error) {
    handleNotification({ message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.' })
  } finally {
    requestLoading.value = false
  }
}

const handleNotification = (data) => {
  notification.value = { show: true, message: data.message }
  setTimeout(() => { notification.value.show = false }, 5000)
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
/* СТИЛИ ДЛЯ SMM СТРАНИЦЫ */
.smm-page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px;
}

/* Hero блок */
.smm-hero {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
  flex-wrap: wrap;
}
.hero-image {
  flex: 1;
  min-width: 280px;
}
.hero-placeholder {
  background: linear-gradient(135deg, #fef5f5, #f0f0f0);
  border-radius: 20px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #cc0000;
}
.hero-text {
  flex: 1;
}
.hero-text h1 {
  font-size: 36px;
  color: #000;
  margin-bottom: 20px;
}
.hero-text h1 span {
  color: #cc0000;
}
.hero-text ul {
  list-style: none;
  padding: 0;
}
.hero-text ul li {
  padding-left: 25px;
  position: relative;
  margin-bottom: 12px;
  color: #444;
}
.hero-text ul li:before {
  content: '✓';
  color: #cc0000;
  position: absolute;
  left: 0;
  font-weight: bold;
}
.styleBtn {
  background: #cc0000;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.3s;
}
.styleBtn:hover {
  background: #ff1a1a;
  transform: translateY(-2px);
}

/* Заголовки */
.titleSmm {
  font-size: 32px;
  color: #000;
  margin: 40px 0 20px;
}
.titleSmm span {
  color: #cc0000;
}

/* Блоки услуг */
.service-block {
  background: #f8f8f8;
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 30px;
}
.service-block h3 {
  color: #cc0000;
  margin-bottom: 15px;
}
.service-block ul {
  margin: 15px 0;
  padding-left: 20px;
}
.service-block li {
  color: #444;
  margin-bottom: 8px;
}
.price {
  color: #cc0000;
  font-size: 18px;
  margin-top: 15px;
}

/* Сетка задач */
.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}
.task-card {
  background: #f8f8f8;
  border-radius: 16px;
  padding: 20px;
}
.task-name {
  font-size: 18px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 15px;
}
.task-card ul {
  padding-left: 20px;
}
.task-card li {
  color: #444;
  margin-bottom: 8px;
}

/* Этапы */
.stages-tabs {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0;
}
.stages-list {
  flex: 1;
  min-width: 200px;
}
.stage-item {
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
}
.stage-item.active {
  color: #cc0000;
  font-weight: bold;
  border-bottom-color: #cc0000;
}
.stage-item:hover {
  color: #cc0000;
  padding-left: 30px;
}
.stage-content {
  flex: 2;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 16px;
  color: #444;
}

/* Преимущества */
.advantages-grid-smm {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 30px 0;
}
.advantage-smm {
  background: #ffffff;
  border-radius: 20px;
  padding: 25px;
  border: 1px solid #eee;
  transition: all 0.3s;
}
.advantage-smm:hover {
  transform: translateY(-5px);
  border-color: #cc0000;
  box-shadow: 0 10px 30px rgba(204,0,0,0.1);
}
.advantage-smm .num {
  font-size: 32px;
  font-weight: bold;
  color: #cc0000;
  margin-bottom: 15px;
}
.advantage-smm .name {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}
.advantage-smm p {
  color: #666;
  line-height: 1.5;
}

/* Форма */
.request-form {
  background: linear-gradient(135deg, #fef5f5, #ffffff);
  border-radius: 24px;
  padding: 40px;
  margin: 50px 0;
}
.titleReq {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}
.form-block form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0;
}

/* Группа полей */
.form-group {
  flex: 1;
  min-width: 200px;
  position: relative;
}

.form-group input[type="text"],
.form-group input[type="tel"] {
  width: 100%;
  padding: 14px;
  border: 2px solid #ddd;
  border-radius: 12px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;
  font-family: inherit;
}

.form-group input[type="text"]:focus,
.form-group input[type="tel"]:focus {
  border-color: #cc0000;
  outline: none;
  box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.1);
}

.form-group input[type="text"]::placeholder,
.form-group input[type="tel"]::placeholder {
  color: #999;
}

/* Стили для ошибок */
.form-group.has-error input[type="text"],
.form-group.has-error input[type="tel"] {
  border-color: #ff0000;
  background-color: #fff5f5;
}

.form-group.has-error input[type="text"]:focus,
.form-group.has-error input[type="tel"]:focus {
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

.hint-text {
  display: block;
  color: #999;
  font-size: 11px;
  margin-top: 4px;
  padding-left: 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.zv {
  font-size: 12px;
  color: #999;
  margin: 10px 0;
}

/* ===== ЧЕКБОКС СОГЛАСИЯ (ИСПРАВЛЕННЫЙ) ===== */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 20px 0;
  cursor: pointer;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
}

.checkbox-label input[type="checkbox"] {
  flex-shrink: 0;
  margin-top: 3px;
  width: 16px;
  height: 16px;
}

.checkbox-label span {
  flex: 1;
  min-width: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.checkbox-label a {
  display: inline;
  white-space: normal;
  word-break: break-word;
  color: #cc0000;
  text-decoration: underline;
}

.checkbox-label a:hover {
  color: #ff1a1a;
}

.form-group.has-error .checkbox-label {
  color: #ff0000;
}

.form-group.has-error .checkbox-label input[type="checkbox"] {
  outline: 2px solid #ff0000;
  outline-offset: 2px;
}

/* ===== КНОПКА ОТПРАВКИ ===== */
.submit-btn {
  width: 100%;
  padding: 14px;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 16px;
}

.submit-btn:hover:not(:disabled) {
  background: #ff1a1a;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(204, 0, 0, 0.3);
}

.submit-btn:disabled {
  background: #999;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Вопросы */
.popular-questions {
  margin: 50px 0;
}
.question-item {
  border-bottom: 1px solid #eee;
}
.question-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  font-weight: 500;
}
.question-title:hover {
  background: rgba(204,0,0,0.05);
}
.dec {
  transition: transform 0.3s;
  font-size: 14px;
  color: #cc0000;
}
.dec.open {
  transform: rotate(180deg);
}
.question-answer {
  padding: 0 20px 20px 20px;
  color: #666;
  line-height: 1.6;
}
.question-answer ul {
  padding-left: 20px;
  margin: 10px 0;
}

/* ===== АДАПТИВ ДЛЯ МОБИЛЬНЫХ ===== */
@media (max-width: 768px) {
  .smm-hero {
    flex-direction: column;
  }
  .advantages-grid-smm {
    grid-template-columns: 1fr;
  }
  .hero-text h1 {
    font-size: 28px;
  }
  .titleSmm {
    font-size: 24px;
  }
  .stages-tabs {
    flex-direction: column;
  }
  .form-row {
    flex-direction: column;
  }
  .request-form {
    padding: 20px;
  }
  .form-group {
    min-width: 100%;
  }

  .form-block form {
    max-width: 100%;
    padding: 0 5px;
  }

  .checkbox-label {
    gap: 8px;
  }

  .checkbox-label span {
    font-size: 11px;
  }
}

/* ===== ЗВЕЗДЫ (ДЕКОРАТИВНЫЙ ЭЛЕМЕНТ) ===== */
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
  50% { opacity: 0.5; transform: scale(1.5); }
  100% { opacity: 0; }
}

/* ===== ВИДЕО В HERO ===== */
.hero-image {
  flex: 1;
  min-width: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-video {
  width: 100%;
  height: auto;
  min-height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.hero-image:hover .hero-video {
  transform: scale(1.02);
}

.hero-video {
  pointer-events: none;
}

.hero-text {
  flex: 1;
}

.header {
  position: relative !important;
}
</style>