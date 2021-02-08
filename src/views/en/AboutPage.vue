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
  },
  metaInfo: {
    title: 'About me.',
    meta: [
      {
        name: 'description',
        content: 'Professional portfolio of Riccardo giomi, software engineer and web developer. Skills and clients.'
      }
    ]
  }
}
</script>
