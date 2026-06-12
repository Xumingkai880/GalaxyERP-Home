<template>
  <div class="stars-bg"></div>
  <div class="content-wrap">
    <AppHeader />
    <HeroSection />
    <PainSection />
    <ValuesSection />
    <TrustSection />
    <PricingSection />
    <FaqSection />
    <TestimonialSection />
    <CtaSection />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'
import { useSmoothScroll } from '../composables/useSmoothScroll'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import PainSection from '../components/PainSection.vue'
import ValuesSection from '../components/ValuesSection.vue'
import TrustSection from '../components/TrustSection.vue'
import PricingSection from '../components/PricingSection.vue'
import FaqSection from '../components/FaqSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import CtaSection from '../components/CtaSection.vue'
import AppFooter from '../components/AppFooter.vue'
import BackToTop from '../components/BackToTop.vue'

useScrollAnimation()
useSmoothScroll()
</script>
