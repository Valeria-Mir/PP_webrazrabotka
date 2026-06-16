import { ref } from 'vue'
import { describe, it, expect } from 'vitest'

describe('Notification', () => {
    it('should set notification correctly', () => {
        const notification = ref({ show: false, message: '' })

        const handleNotification = (data) => {
            notification.value = { show: true, message: data.message }
        }

        handleNotification({ message: 'Тестовое сообщение' })

        expect(notification.value.show).toBe(true)
        expect(notification.value.message).toBe('Тестовое сообщение')
    })
})