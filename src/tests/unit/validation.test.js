import { describe, it, expect } from 'vitest'
describe('Validation', () => {
    const validateForm = (name, phone, agree) => {
        if (!name || !phone) {
            return { valid: false, message: 'Заполните все обязательные поля!' }
        }
        if (!agree) {
            return { valid: false, message: 'Необходимо согласие на обработку данных' }
        }
        return { valid: true, message: '' }
    }
    it('should return error for empty fields', () => {
        const result = validateForm('', '', true)
        expect(result.valid).toBe(false)
        expect(result.message).toBe('Заполните все обязательные поля!')
    })
    it('should return error if no agreement', () => {
        const result = validateForm('Иван', '+79001234567', false)
        expect(result.valid).toBe(false)
        expect(result.message).toBe('Необходимо согласие на обработку данных')
    })
    it('should return valid for correct data', () => {
        const result = validateForm('Иван', '+79001234567', true)
        expect(result.valid).toBe(true)
        expect(result.message).toBe('')
    })
})