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
  },
  metaInfo: {
    title: 'Chi sono.',
    meta: [
      {
        name: 'description',
        content:
          'Portfolio professionale di Riccardo Giomi, ingegnere informatico e sviluppatore web. Competenze e collaborazioni.'
      }
    ]
  }
}
</script>
