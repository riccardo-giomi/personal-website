<template>
  <div>
    <CurriculumHeader />
    <Curriculum />
    <CurriculumFooter />
  </div>
</template>

<script>
import CurriculumHeader from '@/components/en/layout/CurriculumHeader.vue'
import Curriculum from '@/components/en/Curriculum.vue'
import CurriculumFooter from '@/components/en/layout/CurriculumFooter.vue'

export default {
  name: 'CurriculumPage',
  components: { CurriculumHeader, Curriculum, CurriculumFooter },
  metaInfo: {
    title: 'My Resume',
    meta: [
      {
        name: 'description',
        content: 'Professional portfolio of Riccardo giomi, software engineer and web developer. This is my resume.'
      }
    ]
  }
}
</script>
