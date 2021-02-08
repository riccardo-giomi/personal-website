<template>
  <div>
    <CurriculumHeader />
    <Curriculum />
  </div>
</template>

<script>
import CurriculumHeader from '@/components/en/layout/CurriculumHeader.vue'
import Curriculum from '@/components/en/Curriculum.vue'

export default {
  name: 'CurriculumPage',
  components: { CurriculumHeader, Curriculum },
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
