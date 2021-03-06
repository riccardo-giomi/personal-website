<template>
  <div>
    <CurriculumHeader />
    <Curriculum />
    <CurriculumFooter />
  </div>
</template>

<script>
import CurriculumHeader from '@/components/it/layout/CurriculumHeader.vue'
import Curriculum from '@/components/it/Curriculum.vue'
import CurriculumFooter from '@/components/it/layout/CurriculumFooter.vue'

export default {
  name: 'CurriculumPage',
  components: { CurriculumHeader, Curriculum, CurriculumFooter },
  metaInfo: {
    title: 'Il mio Curriculum.',
    meta: [
      {
        name: 'description',
        content:
          'Portfolio professionale di Riccardo Giomi, ingegnere informatico e sviluppatore web. Questo è il mio curriculum.'
      }
    ]
  }
}
</script>
