<template>
  <nav class="nav" :class="{ scrolled: isScrolled }" id="nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo">
        <div><img src="../assets/logo.png" alt=""></div>
        GalaxyERP
      </a>
      <div class="nav-links">
        <a href="#values">产品</a>
        <a href="#pricing">定价</a>
        <a href="#testimonials">客户评价</a>
      </div>
      <div class="nav-cta">
        <button class="theme-btn" type="button" @click="toggleTheme" :title="isLight ? '切换深色模式' : '切换浅色模式'">
          <!-- 月亮（当前浅色 → 点击切深色） -->
          <svg v-if="isLight" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <!-- 太阳（当前深色 → 点击切浅色） -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
        <a href="#cta" class="btn btn-primary btn-sm">免费试用</a>
      </div>
      <div class="hamburger" @click="mobileOpen = true">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" :class="{ active: mobileOpen }">
    <span class="mobile-menu-close" @click="mobileOpen = false">&times;</span>
    <a href="#values" @click="mobileOpen = false">产品</a>
    <a href="#pricing" @click="mobileOpen = false">定价</a>
    <a href="#testimonials" @click="mobileOpen = false">客户评价</a>
    <a href="#cta" class="btn btn-primary" @click="mobileOpen = false">免费试用</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isLight, toggleTheme } = useTheme()
const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
