import { ref, watch } from 'vue'

const isDarkMode = ref(false)

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark-mode')
}

export function useTheme() {
    const toggleTheme = () => {
        isDarkMode.value = !isDarkMode.value
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark-mode')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark-mode')
            localStorage.setItem('theme', 'light')
        }
    }

    return {
        isDarkMode,
        toggleTheme
    }
}