<template>
  <div>
    <Skills />
    <section class="section-proof section bg-white py-5">
      <Clients />
    </section>
  </div>
</template>

<script>
import Skills from './about/Skills.vue'
import Clients from './about/Clients.vue'

export default {
  name: 'About',
  components: {
    Skills,
    Clients
  }
}
</script>
