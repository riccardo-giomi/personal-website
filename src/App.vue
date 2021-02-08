<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/it/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  metaInfo: {
    titleTemplate: 'Riccardo Giomi | %s'
  }
}
</script>
