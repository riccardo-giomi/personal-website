<template>
  <div>
    <AboutHeader />
    <About />
  </div>
</template>

<script>
import AboutHeader from '@/components/it/layout/AboutHeader.vue'
import About from '@/components/it/About.vue'

export default {
  name: 'AboutPage',
  components: {
    AboutHeader,
    About
  }
}
</script>
