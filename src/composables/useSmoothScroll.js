import { onMounted } from 'vue'

export function useSmoothScroll() {
  function scrollToAnchor(e) {
    const href = e.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('#')) return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', scrollToAnchor)
    })
  })
}
