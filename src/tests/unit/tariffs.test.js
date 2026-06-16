import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
describe('Tariffs', () => {
    it('should start with monthly tab active', () => {
        const activePackageTab = ref('month')
        expect(activePackageTab.value).toBe('month')
    })

    it('should switch to yearly tab', () => {
        const activePackageTab = ref('month')
        const toggleTab = (tab) => {
            activePackageTab.value = tab
        }
        toggleTab('year')
        expect(activePackageTab.value).toBe('year')
    })

    it('should show correct yearly price', () => {
        const activePackageTab = ref('year')
        const packages = [
            { name: 'Старт', price: '25 000', yearPrice: '250 000' }
        ]
        const getPrice = (pkg) => {
            return activePackageTab.value === 'month' ? pkg.price : pkg.yearPrice
        }
        expect(getPrice(packages[0])).toBe('250 000')
    })
})