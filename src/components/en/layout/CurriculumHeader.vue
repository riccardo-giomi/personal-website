<template>
  <header>
    <Navbar active="cv" />
    <div class="header-intro header-intro-resume theme-bg-primary text-white py-5">
      <div class="container position-relative">
        <h2 class="page-heading mb-3">Resume</h2>
        <a class="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto" @click="cv2Pdf()"
          ><i class="fas fa-download mr-2"></i>Download PDF Version</a
        >
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/en/layout/Navbar.vue'

import html2pdf from 'html2pdf.js'

export default {
  name: 'CurriculumHeader',
  components: { Navbar },
  methods: {
    cv2Pdf() {
      let cv = document.getElementById('cv-for-pdf')
      html2pdf()
        .set({
          pagebreak: { avoid: ['section'] },
          margin: [0, -2, 0, 0],
          image: { type: 'jpeg', quality: 0.98 },
          filename: 'riccardo.giomi.pdf'
        })
        .from(cv)
        .save()
    }
  }
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
