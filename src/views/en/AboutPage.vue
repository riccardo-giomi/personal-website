<template>
  <div>
    <AboutHeader />
    <About />
  </div>
</template>

<script>
import AboutHeader from '@/components/en/layout/AboutHeader.vue'
import About from '@/components/en/About.vue'

export default {
  name: 'AboutPage',
  components: {
    AboutHeader,
    About
  }
}
</script>
