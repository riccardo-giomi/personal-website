<template>
  <div>
    <Skills />
    <section class="section-proof section bg-white py-5">
      <Clients />
    </section>
  </div>
</template>

<script>
import Skills from './home/Skills.vue'
import Clients from './home/Clients.vue'

export default {
  name: 'Home',
  components: {
    Skills,
    Clients
  }
}
</script>
