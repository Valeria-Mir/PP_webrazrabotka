<template>
  <!-- Модалка заказа -->
  <div class="modal" v-if="showOrderModal" @click.self="closeOrderModal">
    <div class="modal-content glass-card">
      <button class="modal-close" @click="closeOrderModal">✕</button>
      <h3>{{ orderTitle }}</h3>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <input type="text" v-model="orderForm.name" placeholder=" " required>
          <label>Ваше имя *</label>
        </div>
        <div class="form-group">
          <input type="tel" v-model="orderForm.phone" placeholder=" " required>
          <label>Телефон *</label>
        </div>
        <div class="form-group" v-if="showSiteField">
          <input type="url" v-model="orderForm.site" placeholder=" ">
          <label>Адрес сайта</label>
        </div>
        <div class="form-group" v-if="showSocialField">
          <input type="text" v-model="orderForm.social" placeholder=" ">
          <label>Социальная сеть</label>
        </div>
        <label class="checkbox">
          <input type="checkbox" v-model="orderForm.agree" required>
          <span>Согласие на обработку данных</span>
        </label>
        <button type="submit" class="submit-btn" :disabled="loading">
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
import { ref } from 'vue'

// Импортируем фото менеджеров из папки assets
import alenaImg from '@/assets/alena_fominykh.jpg'
import svetlanaImg from '@/assets/svetlana.jpeg'
import ritaImg from '@/assets/rita.jpg'
import yuliyaImg from '@/assets/yuliya.png'
import kristinaImg from '@/assets/kristina.jpg'

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

const managers = [
  { id: 1, name: 'Алёна', spec: 'Сайты / Поддержка', avatar: alenaImg },
  { id: 2, name: 'Светлана', spec: 'Реклама / SEO', avatar: svetlanaImg },
  { id: 3, name: 'Маргарита', spec: 'Сайты / Дизайн', avatar: ritaImg },
  { id: 4, name: 'Юлия', spec: 'SEO / Аналитика', avatar: yuliyaImg },
  { id: 5, name: 'Кристина', spec: 'Реклама / SMM', avatar: kristinaImg }
]

const closeOrderModal = () => {
  emit('update:showOrderModal', false)
}

const closeManagersModal = () => {
  emit('update:showManagersModal', false)
}

const submitOrder = async () => {
  if (!orderForm.value.name || !orderForm.value.phone || !orderForm.value.agree) {
    emit('orderSubmitted', {success: false, message: 'Заполните все обязательные поля!'})
    return
  }
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  emit('orderSubmitted', {success: true, message: 'Заявка отправлена! Менеджер свяжется с вами.'})
  closeOrderModal()
  orderForm.value = {name: '', phone: '', site: '', social: '', agree: false}
}

const selectManager = (manager) => {
  closeManagersModal()
  emit('orderSubmitted', {success: true, message: `Вы выбрали менеджера ${manager.name}. Специалист свяжется с вами.`})
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
}

.modal-content {
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  position: relative;
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

.submit-btn:hover {
  background: #ff1a1a;
  transform: translateY(-2px);
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
</style>