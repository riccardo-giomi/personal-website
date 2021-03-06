<template>
  <div>
    <AboutHeader />
    <About />
    <Footer />
  </div>
</template>

<script>
import AboutHeader from '@/components/it/layout/AboutHeader.vue'
import About from '@/components/it/About.vue'
import Footer from '@/components/it/layout/Footer.vue'

export default {
  name: 'AboutPage',
  components: {
    AboutHeader,
    About,
    Footer
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
