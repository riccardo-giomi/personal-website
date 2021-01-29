<template>
  <header>
    <Navbar active="cv" />
    <div class="header-intro header-intro-resume theme-bg-primary text-white py-5">
      <div class="container position-relative">
        <h2 class="page-heading mb-3">Curriculum</h2>
        <a class="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto" href="#"
          ><i class="fas fa-download mr-2"></i>Scarica come PDF</a
        >
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/it/layout/Navbar.vue'

export default {
  name: 'CurriculumHeader',
  components: { Navbar }
}
</script>

<style scoped>
.header-intro-cv {
  height: 320px;
}

.header-intro-cv .container {
  max-width: 1000px;
}
</style>
