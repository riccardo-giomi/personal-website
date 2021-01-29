<template>
  <div>
    <HomeHeader />
    <Home />
  </div>
</template>

<script>
import HomeHeader from '@/components/it/layout/HomeHeader.vue'
import Home from '@/components/it/Home.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    Home
  }
}
</script>
