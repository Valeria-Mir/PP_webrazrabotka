<template>
  <!-- Модалка заказа -->
  <div class="modal" v-if="showOrderModal" @click.self="closeOrderModal">
    <div class="modal-content glass-card">
      <button class="modal-close" @click="closeOrderModal">✕</button>
      <h3>{{ orderTitle }}</h3>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <input
              type="text"
              v-model="orderForm.name"
              placeholder=" "
              required
              @blur="validateField('name')"
              @input="validateField('name')"
              :class="{ error: errors.name }"
          >
          <label>Ваше имя *</label>
          <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <input
              type="tel"
              v-model="orderForm.phone"
              placeholder="+7 (___) ___-__-__"
              required
              @blur="validateField('phone')"
              @input="formatPhone"
              :class="{ error: errors.phone }"
          >
          <label></label>
          <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
        </div>

        <div class="form-group" v-if="showSiteField">
          <input
              type="url"
              v-model="orderForm.site"
              placeholder=" "
              @blur="validateField('site')"
              @input="validateField('site')"
              :class="{ error: errors.site }"
          >
          <label>Адрес сайта</label>
          <span class="error-message" v-if="errors.site">{{ errors.site }}</span>
        </div>

        <div class="form-group" v-if="showSocialField">
          <input
              type="text"
              v-model="orderForm.social"
              placeholder=" "
          >
          <label>Социальная сеть</label>
        </div>

        <label class="checkbox">
          <input type="checkbox" v-model="orderForm.agree" required>
          <span>Согласие на обработку данных</span>
        </label>

        <button type="submit" class="submit-btn" :disabled="loading || !isFormValid">
          <span v-if="!loading">Отправить заявку</span>
          <span v-else class="loader"></span>
        </button>
      </form>
    </div>
  </div>

  <!-- Модалка выбора менеджера -->
  <div class="modal" v-if="showManagersModal" @click.self="closeManagersModal">
    <div class="modal-content glass-card">
      <button class="modal-close" @click="closeManagersModal">✕</button>
      <h3>Выберите менеджера</h3>
      <div class="managers-grid">
        <div class="manager-card" v-for="manager in managers" :key="manager.id" @click="selectManager(manager)">
          <div class="manager-avatar">
            <img :src="manager.avatar" :alt="manager.name">
          </div>
          <div class="manager-name">{{ manager.name }}</div>
          <div class="manager-spec">{{ manager.spec }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import alenaImg from '/assets/alena_fominykh.jpg'
import svetlanaImg from '/assets/svetlana.jpeg'
import ritaImg from '/assets/rita.jpg'
import yuliyaImg from '/assets/yuliya.png'
import kristinaImg from '/assets/kristina.jpg'

const props = defineProps({
  showOrderModal: Boolean,
  showManagersModal: Boolean,
  orderTitle: {
    type: String,
    default: 'Заявка на услугу'
  },
  showSiteField: {
    type: Boolean,
    default: false
  },
  showSocialField: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:showOrderModal', 'update:showManagersModal', 'orderSubmitted'])

const loading = ref(false)
const orderForm = ref({ name: '', phone: '', site: '', social: '', agree: false })
const errors = ref({ name: '', phone: '', site: '' })

// Форматирование телефона — оставляем только цифры
const formatPhone = () => {
  orderForm.value.phone = orderForm.value.phone.replace(/\D/g, '')
}

// Валидация полей
const validateField = (field) => {
  switch (field) {
    case 'name':
      const name = orderForm.value.name.trim()
      if (!name || name.length < 2) {
        errors.value.name = 'Имя должно содержать минимум 2 символа'
      } else if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name)) {
        errors.value.name = 'Имя должно содержать только буквы'
      } else {
        errors.value.name = ''
      }
      break

    case 'phone':
      const phoneDigits = orderForm.value.phone.replace(/\D/g, '')

      if (!phoneDigits) {
        errors.value.phone = 'Введите номер телефона'
      } else if (!phoneDigits.startsWith('7') && !phoneDigits.startsWith('8')) {
        errors.value.phone = 'Номер должен начинаться с 8, 7 или +7'
      } else if (phoneDigits.length !== 11) {
        errors.value.phone = 'Номер должен содержать ровно 11 цифр'
      } else {
        errors.value.phone = ''
      }
      break

    case 'site':
      if (orderForm.value.site && !/^https?:\/\/.+/.test(orderForm.value.site)) {
        errors.value.site = 'Введите корректный URL (начинается с http:// или https://)'
      } else {
        errors.value.site = ''
      }
      break
  }
}

// Проверка, что форма валидна
const isFormValid = computed(() => {
  const nameValid = orderForm.value.name &&
      orderForm.value.name.trim().length >= 2 &&
      /^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(orderForm.value.name.trim())

  const phoneDigits = orderForm.value.phone.replace(/\D/g, '')
  const phoneValid = phoneDigits &&
      (phoneDigits.startsWith('7') || phoneDigits.startsWith('8')) &&
      phoneDigits.length === 11

  const agreeValid = orderForm.value.agree

  if (props.showSiteField && orderForm.value.site) {
    const siteValid = /^https?:\/\/.+/.test(orderForm.value.site)
    return nameValid && phoneValid && agreeValid && siteValid && !errors.value.name && !errors.value.phone
  }

  return nameValid && phoneValid && agreeValid && !errors.value.name && !errors.value.phone
})

const managers = [
  { id: 1, name: 'Алёна', spec: 'Сайты / Поддержка', avatar: alenaImg },
  { id: 2, name: 'Светлана', spec: 'Реклама / SEO', avatar: svetlanaImg },
  { id: 3, name: 'Маргарита', spec: 'Сайты / Дизайн', avatar: ritaImg },
  { id: 4, name: 'Юлия', spec: 'SEO / Аналитика', avatar: yuliyaImg },
  { id: 5, name: 'Кристина', spec: 'Реклама / SMM', avatar: kristinaImg }
]

const closeOrderModal = () => {
  emit('update:showOrderModal', false)
  errors.value = { name: '', phone: '', site: '' }
}

const closeManagersModal = () => {
  emit('update:showManagersModal', false)
}

const submitOrder = async () => {
  // Форматируем телефон перед отправкой
  formatPhone()

  validateField('name')
  validateField('phone')
  if (props.showSiteField) validateField('site')

  if (errors.value.name || errors.value.phone || errors.value.site) {
    emit('orderSubmitted', { success: false, message: 'Исправьте ошибки в форме' })
    return
  }

  if (!orderForm.value.name || !orderForm.value.phone || !orderForm.value.agree) {
    emit('orderSubmitted', { success: false, message: 'Заполните все обязательные поля!' })
    return
  }

  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false

  emit('orderSubmitted', { success: true, message: 'Заявка отправлена! Менеджер свяжется с вами.' })
  closeOrderModal()
  orderForm.value = { name: '', phone: '', site: '', social: '', agree: false }
  errors.value = { name: '', phone: '', site: '' }
}

const selectManager = (manager) => {
  closeManagersModal()
  emit('orderSubmitted', { success: true, message: `Вы выбрали менеджера ${manager.name}. Специалист свяжется с вами.` })
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

/* ГЛАВНЫЙ ФИКС - чтобы инпуты не зумили на iOS */
.modal-content input {
  font-size: 16px !important;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;
}

.modal-close:hover {
  color: #cc0000;
}

.modal-content h3 {
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
}

.form-group input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 14px;
  transition: all 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #cc0000;
}

.form-group input.error {
  border-color: #ff0000;
}

.form-group label {
  position: absolute;
  left: 14px;
  top: 14px;
  color: #999;
  transition: all 0.3s;
  pointer-events: none;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label {
  top: -10px;
  left: 10px;
  font-size: 10px;
  background: white;
  padding: 0 5px;
  color: #cc0000;
}

.form-group input.error + label {
  color: #ff0000;
}

.error-message {
  display: block;
  color: #ff0000;
  font-size: 11px;
  margin-top: 5px;
  padding-left: 5px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  cursor: pointer;
}

.checkbox span {
  color: #666;
  font-size: 12px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #ff1a1a;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.managers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.manager-card {
  background: #f5f5f5;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.manager-card:hover {
  background: #ffffff;
  border: 1px solid #cc0000;
  transform: translateY(-3px);
}

.manager-avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  border-radius: 50%;
  overflow: hidden;
}

.manager-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.manager-name {
  font-weight: bold;
  color: #000;
  margin-top: 10px;
}

.manager-spec {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(204, 0, 0, 0.1);
}

/* ТОЛЬКО ДЛЯ ТЕЛЕФОНОВ - чтобы не прыгало */
@media (max-width: 768px) {
  .modal-content {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 25px 15px;
  }
}
/* ===== ТЕМНАЯ ТЕМА ===== */
.site-full.dark-mode .modal-content {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.site-full.dark-mode .modal-content h3 {
  color: #f0f0f0;
}

.site-full.dark-mode .modal-content .form-group input {
  background: rgba(255, 255, 255, 0.03);
  border-color: #333;
  color: #f0f0f0;
}

.site-full.dark-mode .modal-content .form-group input:focus {
  border-color: #cc0000;
}

.site-full.dark-mode .modal-content .form-group label {
  color: #888;
}

.site-full.dark-mode .modal-content .form-group input:focus + label,
.site-full.dark-mode .modal-content .form-group input:not(:placeholder-shown) + label {
  background: #1a1a1a;
  color: #cc0000;
}

.site-full.dark-mode .modal-content .checkbox span {
  color: #888;
}

.site-full.dark-mode .modal-content .manager-card {
  background: rgba(255, 255, 255, 0.05);
}

.site-full.dark-mode .modal-content .manager-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #cc0000;
}

.site-full.dark-mode .modal-content .manager-name {
  color: #f0f0f0;
}

.site-full.dark-mode .modal-content .manager-spec {
  color: #888;
}
</style>