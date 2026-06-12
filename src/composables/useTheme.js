import { ref, onMounted, onUnmounted } from 'vue'

export function useTheme() {
  const isLight = ref(false)

  function applyTheme(theme) {
    isLight.value = theme === 'light'
    document.body.classList.toggle('theme-light', isLight.value)
    localStorage.setItem('site-theme', theme)
  }

  function toggleTheme() {
    const next = isLight.value ? 'dark' : 'light'
    applyTheme(next)
  }

  onMounted(() => {
    const saved = localStorage.getItem('site-theme') || 'dark'
    applyTheme(saved)
  })

  return { isLight, toggleTheme }
}
